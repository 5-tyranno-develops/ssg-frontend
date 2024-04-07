'use client'
import { getMainDeliveryAPI } from '@/actions/delivery'
import { CartAddressDataType } from '@/types/AddressDataType'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function DeliveryAddress() {
    const [mainAddress, setMainAddress] = useState<CartAddressDataType>()
    const fetchData = async () => {
        try {
            const res = await getMainDeliveryAPI()
            setMainAddress(res as CartAddressDataType)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="my-5 mx-5 z-[2]">
            <div className="flex mb-2 ">
                <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/ios/50/place-marker--v1.png"
                    alt="place-marker--v1"
                />
                <h3 className="text- base font-bold">{mainAddress?.deliveryName}</h3>
                <span
                    className="ml-1 px-2 text-sm justify-center items-center flex"
                    style={{ backgroundColor: '#ff5452', color: 'white' }}
                >
                    기본배송지
                </span>
            </div>

            <p className="text-sm">
                [{mainAddress?.zipCode}] {mainAddress?.deliveryBase} {mainAddress?.deliveryDetail}{' '}
            </p>
        </section>
    )
}
