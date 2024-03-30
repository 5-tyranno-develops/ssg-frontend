'use client'

import { useState } from 'react'
import OptionColorModal from '@/components/modal/product/OptionColorModal'

interface props {
    open: boolean
    close: () => void
}

export default function OptionModal({ open, close }: props) {
    const [selected, setSelected] = useState<boolean>(false)
    function openModal() {
        setSelected(true)
    }

    function closeModal() {
        setSelected(false)
    }

    return (
        <>
            {!selected && (
                <div className="open  fixed bottom-0">
                    <div
                        className=" bg-white p-4  w-screen rounded-t-xl h-auto "
                        style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                    >
                        <button className="close  w-full h-5  flex items-center justify-center mb-2 " onClick={close}>
                            닫기
                        </button>

                        <div className="w-full border p-2 bg-white rounded-md py-3 " onClick={openModal}>
                            선택하세요. (색상)
                        </div>
                        <div className="w-full border p-2 bg-white rounded-md py-3 mt-3">선택하세요. (사이즈)</div>
                        <div className="flex  justify-end py-5">
                            <p className="mr-2 font-bold">총 합계</p>
                            <p className=" text-red-500 font-bold  text-xl">0 원</p>
                        </div>
                    </div>
                    <div className="flex items-center h-12">
                        <button className="flex justify-center items-center bg-black flex-grow h-12">
                            <span className="  text-white">장바구니</span>
                        </button>
                        <button className="flex justify-center items-center bg-red-500 flex-grow h-12">
                            <span className="  text-white">바로구매</span>
                        </button>
                    </div>
                </div>
            )}
            {selected && <OptionColorModal open={selected} close={closeModal}></OptionColorModal>}
        </>
    )
}
