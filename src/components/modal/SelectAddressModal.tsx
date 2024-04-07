'use client'
import Link from 'next/link'
import HeaderToBackInModal from '../ui/HeaderToBackInModal'
import { useEffect, useState } from 'react'
import { AddressDataType } from '@/types/AddressDataType'
import { getDelivery } from '@/actions/delivery'

interface AddressModalProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}
function SelectAddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
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
    return modalOpen ? (
        <div>
            <div className="bg-black/60 absolute inset-0 z-50">
                <div className="fixed inset-x-0 top-0 bottom-0 flex flex-col border  bg-white">
                    <HeaderToBackInModal title="배송지 선택" setModalOpen={setModalOpen} />
                    <div className="pt-[40px] px-[16px] mb-[16px]">
                        <h1 className="text-[24px] tracking-[-0.3px] font-bold">어디로 보내드릴까요?</h1>
                    </div>
                    <div className="mb-5">
                        <Link href={'/address'} className="flex text-[14px] ml-2">
                            + 신규배송지등록
                        </Link>
                    </div>
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

                    <button
                        className="bottom-0 left-0 right-0 fixed h-14 z-50 bg-[#ff5452] text-white font-semibold"
                        onClick={() => {
                            setModalOpen(false)
                        }}
                    >
                        변경하기
                    </button>
                </div>
            </div>
        </div>
    ) : null
}
export default SelectAddressModal
