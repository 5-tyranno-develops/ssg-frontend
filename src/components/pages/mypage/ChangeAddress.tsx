'use client'
import { getDelivery, getMainDelivery } from '@/app/api/delivery'
import Buttons from '@/components/ui/buttons'
import { AddressDataType } from '@/types/AddressDataType'
import { get } from 'http'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ChangeAddress() {
    const [deliveryData, setDeliveryData] = useState<AddressDataType[]>([])
    const [mainAddress, setMainAddress] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            await getDelivery()
                .then((res) => {
                    setDeliveryData(res as AddressDataType[])
                })
                .catch((err) => {
                    console.error(err)
                })
        }
        fetchData()
    }, [])
    useEffect(() => {
        const mainAddress = async () => {
            await getMainDelivery()
                .then((res) => {
                    setMainAddress(res)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
        mainAddress()
    }, [])

    return (
        <section>
            <div className="flex px-5 py-3 " style={{ backgroundColor: '#f5f5f5' }}>
                <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/ios/50/place-marker--v1.png"
                    alt="place-marker--v1"
                />
                <h3 className="ml-2 text-sm font-bold">[MY 배송지] {mainAddress} </h3>
            </div>
            <div className="px-4 py-5">
                <ul>
                    {deliveryData.map((address, index) => (
                        <li key={index} className="py-5 px-1 text-sm relative block min-h-5 border-b">
                            <label className="flex items-center">
                                <div className="py-5">
                                    <input type="radio" className="block relative w-5 h-5" name="selectAddress" />
                                </div>
                                <div className="flex-col ml-4">
                                    <div className="flex items-center ">
                                        <strong>{address.deliveryName}</strong>
                                        {address.isBaseDelivery === 11 ? (
                                            <div
                                                className="inline-block ml-2 bg-red-500 text-white h-5 px-2"
                                                style={{ borderRadius: '10px' }}
                                            >
                                                <span className="text-xs ">기본배송지</span>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="my-1">({String(address.zipCode)})</div>
                                    <div>
                                        도로명주소 : {address.deliveryBase} {address.deliveryDetail}
                                    </div>
                                </div>
                            </label>
                            {address.isBaseDelivery === 11 ? (
                                <div className="absolute top-0 right-0" style={{ color: '#888' }}>
                                    <button type="button" className="relative inline-block ">
                                        수정
                                    </button>
                                </div>
                            ) : (
                                <div className="absolute top-0 right-0" style={{ color: '#888' }}>
                                    <button type="button" className="relative inline-block ">
                                        수정
                                    </button>
                                    <button type="button" className="relative inline-block ml-2 ">
                                        삭제
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="px-4">
                    <Link href={'/address'}>
                        <button className="w-full border h-12 mt-5" type="button">
                            <span className="text-sm font-light">+ 새 배송지 추가</span>
                        </button>
                    </Link>
                </div>
                <div className="flex mt-6 bottom-0 left-0 right-0">
                    <div className="flex-grow">
                        <Buttons title="이번만 배송지 변경" href="/" color="#666666" />
                    </div>
                    <div className="flex-grow">
                        <Buttons title="기본 배송지 변경" href="/" />
                    </div>
                </div>
                <span className="text-xs ">
                    선택한 배송지에 따라 이마트, 트레이더스 상품 재고가 달라질 수 있습니다.
                </span>
            </div>
        </section>
    )
}
