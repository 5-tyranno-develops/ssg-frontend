'use client'

import { useState } from 'react'
import SelectAddressModal from '@/components/modal/SelectAddressModal'

export default function DeliveryAddress() {
    const [SelectAddressModalOpen, setSelectAddressModalOpen] = useState(false)

    return (
        <>
            <div className="bg-white m-4 p-4 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">배송지 : {'홍길동'}</h2>
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
                <div className="my-4 text-sm">{'[55555] 부산광역시 해운대구 센텀 리더스마크 4층'}</div>
                <div className="flex justify-between text-[#888888]">
                    <span className="text-xs">
                        {'홍길동'} / {'010-0000-0000'}
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
