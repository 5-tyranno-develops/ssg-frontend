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
    let total = 0
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

    const discountmoney = (money: number, discount: number) => {
        const remoney = money * (1 - discount / 100)
        total += remoney
        return remoney
    }
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
                                    <span className="font-extrabold">
                                        {discountmoney(product.money, product.discount)}원
                                    </span>
                                </div>
                                <span className="text-[#666666]">수량 {product.count} 개</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
            <Link href={'/order/complete'}>
                <div className="bg-[#ff5452] p-4 sticky right-0 left-0 bottom-0 z-10 text-center">
                    <span className="text-white font-normal">
                        <span className="font-bold">{(total + 3000).toLocaleString()}원</span> 결제하기
                    </span>
                </div>
            </Link>
        </>
    )
}
