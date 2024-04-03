'use client'

import { useEffect, useState } from 'react'

export default function OptionModal({
    showOption,
    optionType,
    productId,
    setShowOption,
}: {
    showOption: boolean
    optionType: string
    productId: string
    setShowOption: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleModal = () => {
        setShowOption(false)
    }

    const [optionData, setOptionData] = useState<any[]>([])
    const [selectedColor, setSelectedColor] = useState<string>('')

    useEffect(() => {
        const getOptionData = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/option/list/${productId}`, {
                cache: 'force-cache',
            })

            if (data) {
                const res = await data.json()
                const optionList = res.result[0][`${optionType}List`]
                setOptionData(optionList)
                console.log(optionList, 'options')
            }
        }
        getOptionData()
    }, [optionType, productId])

    const handleColorSelection = (selectColor: string) => {
        setSelectedColor(selectColor)
        console.log(selectColor, '선택된것')
        setShowOption(false)
    }

    return (
        <>
            <div
                className={`${
                    showOption ? 'bottom-10 ease-in-out ' : '-bottom-[400px] easy-out-in'
                } fixed transition-all delay-150 z-[13]`}
            >
                <div
                    className=" bg-white p-4  w-screen rounded-t-xl min-h-[300px]"
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className="close  w-full h-5  flex items-center justify-center mb-2 " onClick={handleModal}>
                        닫기
                    </p>
                    <div className="w-full border  bg-white rounded-md  mb-2 py-1">
                        <p className="ml-2 text-sm"> 선택하세요. </p>
                    </div>

                    {optionData &&
                        optionData.map((opt: any, index) => (
                            <div
                                key={index}
                                className="w-full bg-white mb-2 text-sm ml-2"
                                onClick={() => handleColorSelection(opt.color)}
                            >
                                {optionType === 'color'
                                    ? opt.color
                                    : optionType === 'size'
                                    ? opt.size
                                    : optionType === 'etc'
                                    ? opt.additionalOption
                                    : optionType === 'extra'
                                    ? opt.extraName
                                    : ''}
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
