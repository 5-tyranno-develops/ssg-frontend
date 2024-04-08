'use client'
import { getItemsOrderAPI } from '@/actions/order'
import Buttons from '@/components/ui/buttons'
import { CartItemsAtom } from '@/state/CartCheckedListAtom'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function DeliveryItemList() {
    const data = useRecoilValue(CartItemsAtom)
    const [productData, setProductData] = useState([]) as any[]
    const fetchOptions = async () => {
        const productLists = []
        for (const item of data) {
            const product = await getItemsOrderAPI(item.productId)
            productLists.push({ ...product, ...item })
        }
        setProductData(productLists)
    }
    useEffect(() => {
        fetchOptions()
    }, [])
    console.log('data', productData)

    // const totalMoney = productData.reduce((total, product) => {
    //     return total + product.totalPrice * product.count
    // }, 0)

    // const discountMoney = productData.reduce((total, product) => {
    //     const discountedPrice = product.totalPrice * (product.discount / 100)
    //     return total - discountedPrice * product.count
    // }, 0)
    return (
        <>
            {productData.map((product: any, index: number) => (
                <div className="bg-white mx-4" key={index}>
                    {index === 0 && (
                        <div className="flex justify-between pt-[15px] px-[16px]">
                            <span className="text-lg font-semibold">택배배송</span>
                        </div>
                    )}

                    <div className="flex px-4 py-4">
                        <Image
                            src={product.imageUrl}
                            alt="이미지1"
                            width={80}
                            height={80}
                            className="rounded-lg mr-3"
                        />

                        <div className="w-full flex flex-col justify-between text-sm mx-2">
                            {product.vendorName}
                            <div className="flex">
                                <span className="font-extrabold mr-2">{product.vendorName}</span>
                                <span>{product.productName}</span>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <span className="line-through mr-2 text-[#666666]">{product.money}원</span>
                                    <span className="font-extrabold">{product.money}원</span>
                                </div>
                                <span className="text-[#666666]">수량{product.count}개</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
            <div className="mt-3">
                <Buttons title="얼마" href="/order/complete" />
            </div>
        </>
    )
}
