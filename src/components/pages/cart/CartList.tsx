'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import trash from '@/images/Trash.png'
import './../../..//app/cart/cart.css'
import Buttons from '@/components/ui/buttons'
import { useRecoilState } from 'recoil'
import { CartCheckedListAtom } from '@/state/CartCheckedListAtom'

import { productData } from '@/lib/CartList'
import { CartDataType, isKeepDataType } from '@/types/CartDataType'
import { countCartAPI, deleteCartIdAPI, getCartListAPI, isKeepAPI } from '@/actions/cart'
import { CartDataType, clickDeleteDataType, isKeepDataType } from '@/types/CartDataType'
import { countCartAPI, deleteCartIdAPI, deleteClickAPI, getCartListAPI, getOptionsAPI, isKeepAPI } from '@/actions/cart'

export default function CartList() {
    const [productData, setProductData] = useState<CartDataType[]>([])
    const [recoilSample, setRecoilSample] = useRecoilState<number[]>(CartCheckedListAtom)
    const [recoilCartItem, setRecoilCartItem] = useRecoilState<cartToOrderDataType[]>(CartItemsAtom)
    const fetchData = async () => {
        try {
            const res = await getCartListAPI()
            setProductData(res as CartDataType[])
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleCountChange = async (cartId: number, newCount: number) => {
        const cartCount = {
            cartId: cartId,
            count: newCount,
        }
        await countCartAPI(cartCount)
        fetchData()
    }

    const totalMoney = productData.reduce((total, product) => {
        return total + product.totalPrice * product.count
    }, 0)

    const discountMoney = productData.reduce((total, product) => {
        const discountedPrice = product.totalPrice * (product.discount / 100)
        return total - discountedPrice * product.count
    }, 0)

    const deletedProduct = async (cartId: number) => {
        const confirm = window.confirm('삭제하시겠습니까?')
        if (confirm) {
            try {
                const res = await deleteCartIdAPI(cartId)
                alert('삭제되었습니다.')
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }
    const checkDeletedProduct = async (checkedItemDelete: number[]) => {
        const confirm = window.confirm('선택된 상품을 삭제하시겠습니까?')
        if (confirm) {
            const deleteArr: clickDeleteDataType[] = checkedItemDelete.map((cartId) => ({ cartId }))

            const updatedRecoilSample = recoilSample.filter((item) => !checkedItemDelete.includes(item))
            await deleteClickAPI(deleteArr)

            setRecoilSample(updatedRecoilSample)

            alert('삭제되었습니다.')
            fetchData()
        }
    }

    const [showOnlySelectedProducts, setShowOnlySelectedProducts] = useState(false)

    // 선택상품만 보기 체크박스의 onChange 핸들러
    const handleShowOnlySelectedProductsChange = () => {
        setShowOnlySelectedProducts((prevState) => !prevState)
    }

    const [allChecked, setAllChecked] = useState(false)
    const [checkedItem, setCheckedItem] = useState<number[]>(recoilSample)
    const checkItemhandler = (id: number, ischecked: boolean) => {
        console.log(id, ischecked)
        if (ischecked) {
            if (!recoilSample.includes(id)) {
                setRecoilSample([...recoilSample, id])
            }
            setCheckedItem((prev) => [...prev, id])
        } else {
            setRecoilSample([...checkedItem.filter((item) => item !== id)])
            setCheckedItem(checkedItem.filter((item) => item !== id))
        }
    }
    const handleAllChecked = (checked: boolean) => {
        setAllChecked(checked)
        if (checked) {
            setCheckedItem(productData.map((item) => item.cartId))
        } else {
            setCheckedItem([])
        }
        console.log(checkedItem)
    }
    const isKeepHandle = async (cartId: number, isKeep: number) => {
        if (isKeep === 11) {
            const cartIskeep: isKeepDataType = {
                cartId: cartId,
                isKeep: 99,
            }
            await isKeepAPI(cartIskeep)
            fetchData()
        } else {
            const cartIskeep: isKeepDataType = {
                cartId: cartId,
                isKeep: 11,
            }
            await isKeepAPI(cartIskeep)

            fetchData()
        }
    }
    const handleOrder = async () => {
        const cartToOrder = productData.map((product) => ({
            productId: product.productId,
            optionId: product.optionId,
            count: product.count,
            money: product.totalPrice * product.count,
        }))
        setRecoilCartItem(cartToOrder)
    }

    return (
        <>
            <div className="my-3 mx-4 flex items-center">
                <span className="min-w-5 min-h-5 leading-5">
                    <input
                        type="checkbox"
                        onChange={() => handleAllChecked(!allChecked)}
                        // checked={checkedItem.length === c.length ? true : false}
                        className="w-5 h-5"
                    />
                </span>
                <label>
                    <span className="mx-3 "> 전체</span>
                </label>
                |
                <button
                    className="ml-3 px-2 py-1"
                    onClick={() => {
                        checkDeletedProduct(checkedItem)
                    }}
                >
                    선택삭제
                </button>
                |
                <div className="flex ">
                    <label className="mx-3">
                        선택상품만 보기{' '}
                        <input
                            type="checkbox"
                            id="switch"
                            onChange={handleShowOnlySelectedProductsChange}
                            checked={showOnlySelectedProducts}
                        />
                        <label htmlFor="switch" className="switch_label">
                            <span className="onf_btn" />
                        </label>
                    </label>
                </div>
            </div>

            <ul>
                {productData.map(
                    (product) =>
                        !showOnlySelectedProducts /* || checkedItem.includes(product.) */ && (
                            <li key={product.cartId} className="flex items-center py-5 px-4 border-t">
                                <div className="flex items-start relative w-full">
                                    <label className="relative mr-3">
                                        <input
                                            type="checkbox"
                                            key={product.cartId}
                                            onChange={() =>
                                                checkItemhandler(
                                                    product.cartId,
                                                    !checkedItem.includes(product.cartId) ? true : false,
                                                )
                                            }
                                            checked={
                                                checkedItem.includes(product.cartId) ||
                                                recoilSample.includes(product.cartId)
                                            }
                                            className="absolute top-0 left-0 w-4 h-4"
                                        />
                                        <Image src={product.imageUrl} alt="상품" width={85} height={85} />
                                    </label>
                                    <div className="flex flex-col">
                                        <div className="w-3/4">
                                            <strong>{product.vendorName}</strong>
                                            <span className="ml-1 ">{product.productName}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs">옵션 :</span>
                                        </div>
                                        <div className="flex flex-col mt-1">
                                            {product.discount > 0 && (
                                                <span className="text-xs line-through">
                                                    {product.totalPrice * product.count}원
                                                </span>
                                            )}

                                            <span className="text-lg font-semibold  ">
                                                {(
                                                    product.totalPrice *
                                                    product.count *
                                                    (1 - product.discount / 100)
                                                ).toLocaleString()}
                                                원
                                            </span>
                                        </div>

                                        <div className="absolute top-0 right-0 mt-4">
                                            <button
                                                className=" text-4xl font-thin pt-3"
                                                onClick={() =>
                                                    handleCountChange(product.cartId, Math.max(1, product.count - 1))
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="mx-5   ">{product.count}</span>
                                            <button
                                                className=" text-4xl font-thin"
                                                onClick={() => handleCountChange(product.cartId, product.count + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    {product.isKeep === 11 ? (
                                        <div className="absolute top-0 right-0 flex items-start">
                                            <Image
                                                className="mr-5"
                                                width={20}
                                                height={20}
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABkUlEQVR4nO2Vv0oDQRDGfwTUIhYinFirIATBFIr4CPoANirY5RUkWFlY+go+gPoeFlZXREEr/zY2Wqio8ZOFCS6XS+6S3F2afLDc7e3OfN/NzszCCBlDUBkmeVXwIdgfBnlZ0BDIxkHRAk6M+F7wY+/FREKwZYQu/Ms2/y4kEoJ5wauR1SKi8hUhGBNcGMlZzHq+IgTH5vxOMN1hz+AiBBOCPcG54EbwKLgS/Aq+BOsJ9tt9J6ZgU/DslVd0JDoULFl1tBI1XbMS1AVNM3wRHApWBIFgzsSVEnzUBO/mw0WtmpZ8UhCa4adgMZXhv/2U4NSLlOsTZXp0EnginPrZlHargluzexPs9ETcRYR7Bl32llxOeFl/KVhgUCilCMsJWXW4Eh0fmLwXEdYV3XqDPCCoePXcJkIwY2sPeZAHXgSacSIEa/b9Ok/y0CLRdhyCo073QlbkjVYpxpRoxZqVm+/mQR7GnHkQaVbu+ZRJ9qvDn6fIjY2sycNuzSeyv144uX93kAXUB3mmUMKZjzACGeMPq1Fs+5EYcb4AAAAASUVORK5CYII="
                                                alt="계속담아두기"
                                                onClick={() => isKeepHandle(product.cartId, product.isKeep)}
                                            />
                                            <button onClick={() => deletedProduct(product.cartId)}>
                                                <Image src={trash} alt="삭제" width={20} height={20} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="absolute top-0 right-0 flex items-start">
                                            <Image
                                                className="mr-5"
                                                src="https://img.icons8.com/windows/32/pin.png"
                                                alt="계속담아두기"
                                                width={20}
                                                height={20}
                                                onClick={() => isKeepHandle(product.cartId, product.isKeep)}
                                            />
                                            <button onClick={() => deletedProduct(product.cartId)}>
                                                <Image src={trash} alt="삭제" width={20} height={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ),
                )}
            </ul>

            <div className="border-t-4 px-4 pl-4 pr-5 m">
                <h3 className="text-xl font-bold m-3 "> 결제 예정금액</h3>
                <div className="flex justify-between m-1">
                    <span>주문금액</span>
                    <span>{totalMoney.toLocaleString()} </span>
                </div>
                <div className="flex justify-between m-1">
                    <span>상품할인 </span>
                    <span style={{ color: 'red' }}>{discountMoney.toLocaleString()} </span>
                </div>
                <div className="flex justify-between m-1">
                    <span>배송비</span>
                    <span>0 원 </span>
                </div>
                <div className="flex justify-between m-1 border-t  mb-7 ">
                    <span className="text-base font-bold mt-2">총 결제예정금액</span>
                    <span className="text-lg font-bold mt-2">{(totalMoney + discountMoney).toLocaleString()} 원</span>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-[1] bg-white">
                <div className="relative p-4 ">
                    <p className="text-xs text-black">
                        전체상품 {productData.length}개 {(totalMoney + discountMoney).toLocaleString()} 원 + 배송비 0원
                        = {(totalMoney + discountMoney).toLocaleString()} 원
                    </p>
                    <p className="text-rose-600 text-xs">할인혜택 없음</p>
                </div>
                <Buttons title="주문하기" href="/order" click={handleOrder} />
            </div>
        </>
    )
}
