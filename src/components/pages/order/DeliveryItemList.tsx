'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GetOptionNameAPI } from '@/actions/option'
import { useSearchParams } from 'next/navigation'
export interface OptionType {
    color: string | null
    size: string | null
    additional_option: string | null
}
export interface ProductType {
    productName: string
    price: number
    vendorName: string
    imageUrl: string
    discount: number
}
export default function DeliveryItemList() {
    const searchParams = useSearchParams()
    const productId = searchParams.get('productId')
    // console.log(productId, '상품아이디')
    const optionId = searchParams.get('optionId')
    // console.log(optionId)
    const count = searchParams.get('count')

    const [option, setOption] = useState<any[]>([])
    const [product, setProduct] = useState<any[]>([])

    useEffect(() => {
        const GetOptionName = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/option/names/${optionId}`, {
                cache: 'force-cache',
            })

            if (data) {
                const response = await data.json()
                const optionList: OptionType[] = response.result
                setOption(optionList)
            }
        }
        GetOptionName()
    }, [optionId])
    // console.log(option)
    useEffect(() => {
        const GetProductName = async () => {
            const data1 = await fetch(`https://tyrannoback.com/api/v1/product/productInformation/${productId}`, {
                cache: 'force-cache',
            })

            if (data1) {
                const response = await data1.json()
                const productList: ProductType[] = response.result
                setProduct(productList)
            }
        }
        GetProductName()
    }, [productId])
    console.log(product)
    return (
        <>
            <div className="bg-white rounded-xl m-4 mb-20">
                <div className="flex justify-between pt-[15px] px-[16px]">
                    <span className="text-lg font-semibold">택배배송</span>
                </div>
                <div className="flex px-[16px] py-[15px] ">
                    <div className="flex  w-24">
                        <Image
                            src={product.imageUrl}
                            width={150}
                            height={150}
                            alt="상품썸네일"
                            style={{ width: '80px', height: '80px' }}
                        />
                    </div>
                    <div className="flex flex-col text-xs mx-2  w-full ">
                        <div>
                            <span>신세계몰</span>
                        </div>
                        <div>
                            <span className="font-extrabold mr-1">{product.vendorName}</span>
                            <span>{product.productName}</span>
                        </div>
                        {option && (
                            <div className="flex">
                                {option.color !== null || option.size !== null || option.additional_option !== null ? (
                                    <div className="flex">
                                        옵션:
                                        {option.color && <p>{option.color}</p>}
                                        {option.size && <p>{option.size}</p>}
                                        {option.additional_option && <p>{option.additional_option}</p>}
                                    </div>
                                ) : null}
                            </div>
                        )}

                        <div className="flex justify-between">
                            <div>
                                <span className="line-through mr-2 text-[#666666]">
                                    {(product.price * count).toLocaleString()}원
                                </span>
                                <span className="font-extrabold">
                                    {(product.price * (1 - product.discount / 100) * count).toLocaleString()}원
                                </span>
                            </div>
                            <span className="text-[#666666]">수량{count}개</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
