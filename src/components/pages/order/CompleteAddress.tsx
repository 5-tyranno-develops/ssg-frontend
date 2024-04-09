'use client'

import { getDeliveryAddressAPI } from '@/actions/order'
import { OrderAddressDataType } from '@/types/AddressDataType'
import { useEffect, useState } from 'react'

export default function CompleteAddress() {
    const [deliveryAddress, setDeliveryAddress] = useState<OrderAddressDataType>()
    const fetchData = async () => {
        try {
            const res = await getDeliveryAddressAPI()
            setDeliveryAddress(res)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="m-3">
            <h2 className="font-bold text-md mb-3">받는 분 정보</h2>
            <p className="flex justify-between text-[14px]">
                <span className="font-bold">
                    {deliveryAddress?.receiverName} / {deliveryAddress?.phoneNumber}
                </span>
            </p>
            <p className="text-[14px]">
                {deliveryAddress?.zipCode} {deliveryAddress?.deliveryBase} {deliveryAddress?.deliveryDetail}
            </p>
        </div>
    )
}
