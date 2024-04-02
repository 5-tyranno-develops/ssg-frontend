'use client'

import { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
import { useParams } from 'next/navigation'

export default function ProductOptions({
    isModal,
    productId,
    setIsModal,
}: {
    isModal: boolean
    productId: string
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    // console.log(isModal, productId)
    const params = useParams<{ productId: string }>()
    const [optionData, setOptionData] = useState<string[]>([] as string[])

    const [showColorOption, setShowColorOption] = useState<boolean>(false)
    const [showSizeOption, setShowSizeOption] = useState<boolean>(false)
    const [showEtcOption, setShowEtcOption] = useState<boolean>(false)
    const [showExtraOption, setShowExtraOption] = useState<boolean>(false)

    useEffect(() => {
        fetch(`https://tyrannoback.com/api/v1/option/string/${productId}`, { cache: 'force-cache' })
            .then((res) => res.json())
            .then((data) => {
                setOptionData(data.result)
                console.log(data.result, 'option')
            })
    }, [])

    console.log(optionData)

    for (let i = 0; i < optionData.length; i++) {
        if (optionData[i] == 'color') {
            optionData[i] = '색상'
        }
        if (optionData[i] == 'size') {
            optionData[i] = '사이즈'
        }
        if (optionData[i] == 'extra') {
            optionData[i] = '추가'
        }
        if (optionData[i] == 'etc') {
            optionData[i] = '기타'
        }
    }
    console.log(optionData)

    const handleModal = () => {
        setIsModal(false)
    }
    return (
        <>
            <div
                className={`${
                    isModal ? 'bottom-8 ease-in-out ' : '-bottom-[400px] easy-out-in'
                } fixed transition-all delay-150 z-[10]`}
            >
                <div
                    className=" bg-white p-4  w-screen rounded-t-xl "
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className="close  w-full h-5  flex items-center justify-center mb-2 " onClick={handleModal}>
                        닫기
                    </p>

                    {optionData &&
                        optionData.map((opt: string, index) => (
                            <div
                                key={index}
                                className="w-full border  bg-white rounded-md  mb-2 py-1"
                                onClick={() => {
                                    if (opt === '색상') {
                                        setShowColorOption(true)
                                    } else if (opt === '사이즈') {
                                        setShowSizeOption(true)
                                    }
                                    else if (opt === '추가') {
                                        setShowEtcOption(true)
                                    }
                                    else if (opt === '기타') {
                                        setShowExtraOption(true)
                                    }
                                }}
                            >
                                <div className="ml-2 text-sm"> 선택하세요. ({opt})</div>
                            </div>
                        ))}
                    <div className="flex justify-end py-5">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">0 원</p>
                    </div>
                </div>
                <OptionModal
                    showOption={showColorOption}
                    optionType="color"
                    setShowOption={setShowColorOption}
                    productId={params.productId}
                />
                <OptionModal
                    showOption={showSizeOption}
                    optionType="size"
                    setShowOption={setShowSizeOption}
                    productId={params.productId}
                />
                <OptionModal
                    showOption={showEtcOption}
                    optionType="etc"
                    setShowOption={setShowEtcOption}
                    productId={params.productId}
                />
                <OptionModal
                    showOption={showExtraOption}
                    optionType="extra"
                    setShowOption={setShowExtraOption}
                    productId={params.productId}
                />
            </div>
            <div
                className={`${
                    isModal ? 'bottom-0 z-[10]' : '-bottom-[200px] delay-300 '
                } transition-all flex items-center h-12 fixed  w-full  `}
            >
                <button className="flex justify-center items-center bg-black flex-grow h-12 ">
                    <span className="  text-white">장바구니</span>
                </button>
                <button className="flex justify-center items-center bg-red-500 flex-grow h-12">
                    <span className="  text-white">바로구매</span>
                </button>
            </div>
        </>
    )
}
