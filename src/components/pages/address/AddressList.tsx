'use client'
import { getDelivery } from '@/actions/delivery'
import { AddressDataType } from '@/types/AddressDataType'
import { useEffect, useState } from 'react'

export default function AddressList() {
    const [deliveryData, setDeliveryData] = useState<AddressDataType[]>([])
    const fetchData = async () => {
        try {
            const res = await getDelivery()
            setDeliveryData(res as AddressDataType[])
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const response = getDelivery()
    console.log(response)
    return (
        <div className="flex w-full max-w-full max-h-full">
            <ul className="block w-full">
                {deliveryData.map((delivery) => (
                    <li
                        key={String(delivery.id)}
                        className=" py-5 px-4 border"
                        style={{ display: 'flex', fontSize: '13px' }}
                    >
                        <label className="flex items-center">
                            <div className="py-5">
                                <input type="radio" className="block relative w-5 h-5" />
                            </div>
                            <div className="flex-col ml-4">
                                <div>
                                    <strong>{delivery.deliveryName}</strong>
                                </div>
                                <p className="mt-1">
                                    [{String(delivery.zipCode)}] {delivery.deliveryBase} {delivery.deliveryDetail}
                                </p>
                                <p className="mt-1">
                                    {delivery.receiverName} / {delivery.phoneNumber}
                                </p>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
