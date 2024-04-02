'use client'

import { useEffect, useState } from 'react'
import OptionColorModal from '@/components/modal/product/OptionColorModal'
import { OptionStringDataType } from '@/types/OptionStringDataType'


export default function ProductOptions({ 
    isModal, productId, setIsModal
}:{
    isModal: boolean,
    productId: string,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}) {

    console.log(isModal, productId)

    const [optionData, setOptionData] = useState<string[]>([] as string[])

    useEffect(() => {
        fetch(`https://tyrannoback.com/api/v1/option/string/${productId}`, { cache: 'force-cache' })
        .then(res => res.json())
        .then(data => {
            setOptionData(data.result)
            console.log(data.result)
        })
    },[])

    const handleModal = () => {
        setIsModal(false)
    }
    return (
        <>
            <div className={`${isModal ? 'bottom-0 ease-in-out' : '-bottom-[400px] easy-out-in'} fixed transition-all delay-150 z-[900]`}>
                <div
                    className=" bg-white p-4  w-screen rounded-t-xl min-h-[300px]"
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p 
                    className="close  w-full h-5  flex items-center justify-center mb-2 "
                    onClick={handleModal}
                    >
                        닫기
                    </p>

                    {optionData&& optionData.map((opt:string, index) => (
                        <div key={index} className="w-full border p-2 bg-white rounded-md py-3">
                            선택하세요. ({opt})
                        </div>
                    ))}
                    <div className="flex  justify-end py-5">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">0 원</p>
                    </div>
                </div>
                
            </div>
            <div className={`${isModal ? 'bottom-0' : '-bottom-[100px] delay-300'} transition-all flex items-center h-12 fixed bottom-0 z-[910] w-full`}>
                    <button className="flex justify-center items-center bg-black flex-grow h-12">
                        <span className="  text-white">장바구니</span>
                    </button>
                    <button className="flex justify-center items-center bg-red-500 flex-grow h-12">
                        <span className="  text-white">바로구매</span>
                    </button>
            </div>
        </>
    )
}
