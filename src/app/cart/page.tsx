'use client'
import { useState } from 'react'
import AddressModal from './_component/AddressModal'
import HeaderTitle from '@/components/ui/HeaderTitle'
import LocationIcon from '@/images/locationIcon.png'
import Image from 'next/image'
import StillPinIcon from '@/images/StillPinIcon.png'
import trash from '@/images/Trash.png'
import './cart.css'
function Cart() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const addData = [
        {
            id: 1,
            name: '자취방',
            zipCode: 12312,
            addressBase: '부산광역시 센텀',
            addressDetail: '스파로스',
            isMain: '기본배송지',
        },
    ]
    const productData = [
        {
            productId: 1,
            vendorName: '노브랜드',
            name: '상품1',
            productPrice: 10000,
            discount: 0,
            count: 1,
            isIncluded: 11,
            isKeep: 99,
            imageUrl: 'https://sitem.ssgcdn.com/89/11/90/item/1000043901189_i1_750.jpg',
        },
        {
            productId: 12,
            vendorName: '노브랜드',
            name: '상품2',
            productPrice: 20000,
            discount: 10,
            count: 2,
            isIncluded: 11,
            isKeep: 99,
            imageUrl: 'https://sitem.ssgcdn.com/89/11/90/item/1000043901189_i1_750.jpg',
        },
    ]

    const [filteredProductList, setFilteredProductList] = useState(
        productData.filter((product) => product.isIncluded === 11),
    )

    const handleCountChange = (index: number, newCount: number) => {
        const updatedfilteredProductList = [...filteredProductList]
        updatedfilteredProductList[index].count = newCount
        setFilteredProductList(updatedfilteredProductList)
    }
    const totalMoney = filteredProductList.reduce((total, product) => {
        const discountedPrice = product.productPrice * (1 - product.discount / 100)
        return total + discountedPrice * product.count
    }, 0)

    const discountMoney = filteredProductList.reduce((total, product) => {
        const discountedPrice = product.productPrice * (product.discount / 100)
        return total - discountedPrice * product.count
    }, 0)

    const deletedProduct = (index: number) => {
        const confirm = window.confirm('삭제하시겠습니까?')
        if (confirm) {
            const updatedFilteredProductList = [...filteredProductList]
            updatedFilteredProductList[index].isIncluded = 99
            setFilteredProductList(updatedFilteredProductList)
        }
    }
    const [allChecked, setAllChecked] = useState(false)
    const [checkedItem, setCheckedItem] = useState<number[]>([])
    const checkItemhandler = (id: number, ischecked: boolean) => {
        console.log(id, ischecked)
        if (ischecked) {
            setCheckedItem((prev) => [...prev, id])
        } else {
            setCheckedItem(checkedItem.filter((item) => item !== id))
        }
    }
    const handleAllChecked = (checked: boolean) => {
        setAllChecked(checked)
        if (checked) {
            setCheckedItem(filteredProductList.map((item) => item.productId))
        } else {
            setCheckedItem([])
        }
        console.log(checkedItem)
    }

    return (
        <main>
            <HeaderTitle title="장바구니" />
            <div className="my-5 mx-5 ">
                <div className="flex mb-2 ">
                    <Image src={LocationIcon} alt="위치" width={20} height={20} />
                    <h3 className="text- base font-bold">{addData[0].name}</h3>
                    <span className="ml-1 px-2 text-sm" style={{ backgroundColor: '#ff5452', color: 'white' }}>
                        {addData[0].isMain}
                    </span>
                </div>

                <p className="text-sm">
                    [{addData[0].zipCode}] {addData[0].addressBase} {addData[0].addressDetail}{' '}
                </p>
            </div>
            <div className="mx-5 mb-10">
                <button
                    className="w-full h-9 border"
                    onClick={() => {
                        setModalOpen(true)
                    }}
                >
                    배송지 변경
                </button>
            </div>
            {/* <div className="flex justify-center px-3 py-4"></div> */}
            <div className="my-3 mx-4 flex items-center">
                <span className="min-w-5 min-h-5 leading-5">
                    <input
                        type="checkbox"
                        onChange={() => handleAllChecked(!allChecked)}
                        checked={checkedItem.length === filteredProductList.length ? true : false}
                        className="w-5 h-5"
                    />
                </span>
                <label>
                    <span className="mx-3 "> 전체</span>
                </label>
                |<button className="ml-3 px-2 py-1">선택삭제</button>|
                <div className="flex ">
                    <label className="mx-3">
                        선택상품만 보기 <input type="checkbox" id="switch" />
                        <label htmlFor="switch" className="switch_label">
                            <span className="onf_btn" />
                        </label>
                    </label>
                </div>
            </div>

            <ul>
                {filteredProductList.map(
                    (product, index) =>
                        product.isIncluded === 11 && (
                            <li key={product.productId} className="flex items-center py-5 px-4 border-t">
                                <div className="flex items-start relative w-full">
                                    <label className="relative mr-3">
                                        <input
                                            type="checkbox"
                                            key={product.productId}
                                            onChange={() =>
                                                checkItemhandler(
                                                    product.productId,
                                                    !checkedItem.includes(product.productId) ? true : false,
                                                )
                                            }
                                            checked={checkedItem.includes(product.productId)}
                                            className="absolute top-0 left-0 w-4 h-4"
                                        />
                                        <Image src={product.imageUrl} alt="상품" width={85} height={85} />
                                    </label>
                                    <div className="flex flex-col">
                                        <div>
                                            <strong>{product.vendorName}</strong>
                                            <span className="ml-1">{product.name}</span>
                                        </div>
                                        <div className="flex flex-col mt-1">
                                            {product.discount > 0 && (
                                                <span className="text-xs line-through">{product.productPrice}원</span>
                                            )}

                                            <span className="text-lg font-semibold  ">
                                                {(
                                                    product.productPrice *
                                                    product.count *
                                                    (1 - product.discount / 100)
                                                ).toLocaleString()}
                                                원
                                            </span>
                                        </div>

                                        <div className="absolute top-0 right-0 mt-4">
                                            <button
                                                className=" text-4xl font-thin pt-3"
                                                onClick={() => handleCountChange(index, Math.max(1, product.count - 1))}
                                            >
                                                -
                                            </button>
                                            <span className="mx-5   ">{product.count}</span>
                                            <button
                                                className=" text-4xl font-thin"
                                                onClick={() => handleCountChange(index, product.count + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 flex items-start">
                                        <Image
                                            className="mr-5"
                                            src={StillPinIcon}
                                            alt="계속담아두기"
                                            width={20}
                                            height={20}
                                        />
                                        <button onClick={() => deletedProduct(index)}>
                                            <Image src={trash} alt="삭제" width={20} height={20} />
                                        </button>
                                    </div>
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
            <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </main>
    )
}
export default Cart
