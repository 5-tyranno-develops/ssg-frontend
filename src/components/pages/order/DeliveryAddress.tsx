'use client'

import { useEffect, useState } from 'react'
import SelectAddressModal from '@/components/modal/SelectAddressModal'
import { getDeliveryAddressAPI } from '@/actions/order'
import { OrderAddressDataType } from '@/types/AddressDataType'

export default function DeliveryAddress() {
    const [SelectAddressModalOpen, setSelectAddressModalOpen] = useState(false)
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
        <>
            <div className="bg-white m-4 p-4 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">배송지 : {deliveryAddress?.deliveryName}</h2>
                    <button
                        className="border-[1px] border-[#d8d8d8] px-2 text-xs"
                        onClick={() => {
                            setSelectAddressModalOpen(true)
                        }}
                    >
                        변경
                    </button>
                    <SelectAddressModal modalOpen={SelectAddressModalOpen} setModalOpen={setSelectAddressModalOpen} />
                </div>
                <div className="my-4 text-sm">
                    {deliveryAddress?.zipCode} {deliveryAddress?.deliveryBase} {deliveryAddress?.deliveryDetail}
                </div>
                <div className="flex justify-between text-[#888888]">
                    <span className="text-xs">
                        {deliveryAddress?.receiverName} / {deliveryAddress?.phoneNumber}
                    </span>
                    <div className="flex justify-center items-center">
                        <input type="checkbox" className="w-8 h-4 rounded-sm accent-red-500" />
                        <span className="text-xs ">안심번호사용</span>
                    </div>
                </div>
            </div>
        </>
    )
}
