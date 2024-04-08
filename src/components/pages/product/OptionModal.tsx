'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { queryKeyType } from './ProductOptions'

export interface LastOptionType {
    optionId: number
    productName: string
    productPrice: number
    color: {
        id: string
        color: string
    }
    size: {
        id: string
        size: string
    }
    extra: any | null
    etc: {
        id: string
        additionalOption: string
    }
    stock: number
}

export default function OptionModal({
    showModal,
    optionType,
    productId,
    setShowModal,
    setSelectedOption,
    setSelectedOptionId,
    queryUrl,
    setQueryUrl,
    last,
}: {
    last: boolean
    showModal: boolean
    optionType: string
    productId: string
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
    setSelectedOptionId: React.Dispatch<React.SetStateAction<number>>
    queryUrl: queryKeyType
    setQueryUrl: React.Dispatch<React.SetStateAction<queryKeyType>>
}) {
    const handleModal = () => {
        setShowModal(false)
    }

    const [optionData, setOptionData] = useState<any[]>([])
    // const [lastOptionData, setLastOptionData] = useState<>()
    const url = `https://tyrannoback.com/api/v1/option/${productId}?`

    const lastUrl =
        'color' + '=' + queryUrl.color + '&' + 'size' + '=' + queryUrl.size + '&' + 'etc' + '=' + queryUrl.etc

    useEffect(() => {
        // console.log('isLastDepth?', last, 'location', optionType)
        if (!last) {
            // console.log(optionType, 'optionType')
            const getOptionData = async () => {
                const data = await fetch(`https://tyrannoback.com/api/v1/option/list/${productId}`, {
                    cache: 'force-cache',
                })

                if (data) {
                    const res = await data.json()
                    // console.log(res, 'res')
                    const optionList = res.result[0][`${optionType}List`]
                    // console.log(optionList, '1번')
                    setOptionData(optionList)
                    // console.log(optionList, 'options')
                }
            }

            getOptionData()
        } else if (last) {
            const getLastData = async () => {
                const data1 = await fetch(`${url}${lastUrl}`)
                if (data1) {
                    const res = await data1.json()
                    const optionList: LastOptionType[] = res.result
                    setOptionData(optionList)
                    // console.log(optionList, '????')

                    // const optionList = res.
                    // console.log(res.result[0][`${optionType}`], '??')
                }
            }
            getLastData()
        }
    }, [optionType, productId, last, url, queryUrl])

    const handleColorSelection = (select: string, data: string, option: string, optionId: number) => {
        let updatedQueryUrl: queryKeyType = {
            color: queryUrl.color,
            size: queryUrl.size,
            etc: queryUrl.etc,
        }

        switch (option) {
            case 'color':
                updatedQueryUrl.color = data
                break
            case 'size':
                updatedQueryUrl.size = data
                break
            case 'etc':
                updatedQueryUrl.etc = data
                break
            default:
                break
        }

        setQueryUrl(updatedQueryUrl)

        setSelectedOption(select)
        setSelectedOptionId(optionId)

        setShowModal(false)
    }

    return (
        <>
            <div
                className={`${
                    showModal ? 'bottom-10 ease-in-out ' : '-bottom-[400px] easy-out-in'
                } fixed transition-all delay-150 z-[13] w-full `}
            >
                <div
                    className=" bg-white  p-4 rounded-t-xl min-h-[300px]"
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className=" w-full h-5  flex items-center justify-center mb-3 " onClick={handleModal}>
                        <Image
                            width={20}
                            height={20}
                            src="https://img.icons8.com/ios-glyphs/30/back.png"
                            alt="back"
                            style={{ transform: 'rotate(270deg)' }}
                        />
                    </p>
                    <div className="w-full border  bg-white rounded-md  mb-2 py-1">
                        <p className="ml-2 text-sm"> 선택하세요.</p>
                    </div>

                    {optionData &&
                        !last &&
                        optionData.map((opt: any, index) => (
                            <div
                                key={index}
                                className="w-full bg-white mb-2 text-sm ml-2"
                                onClick={() =>
                                    handleColorSelection(
                                        optionType === 'color'
                                            ? opt.color
                                            : optionType === 'size'
                                            ? opt.size
                                            : optionType === 'etc'
                                            ? opt.additionalOption
                                            : optionType === 'extra'
                                            ? opt.extraName
                                            : '',
                                        opt[`${optionType}Id`],
                                        optionType,
                                        0,
                                    )
                                }
                            >
                                {optionType === 'color'
                                    ? opt.color
                                    : optionType === 'size'
                                    ? opt.size
                                    : optionType === 'etc'
                                    ? opt.additionalOption
                                    : ''}
                            </div>
                        ))}
                    {optionData &&
                        last &&
                        optionData.map((opt: LastOptionType, index) => (
                            <div
                                key={index}
                                className="flex w-full bg-white mb-2 text-sm ml-2"
                                onClick={() =>
                                    opt.stock !== 0 &&
                                    handleColorSelection(
                                        optionType === 'color'
                                            ? opt.color.color
                                            : optionType === 'size'
                                            ? opt.size.size
                                            : optionType === 'etc'
                                            ? opt.etc.additionalOption
                                            : '',
                                        optionType === 'color'
                                            ? opt.color.id
                                            : optionType === 'size'
                                            ? opt.size.id
                                            : optionType === 'etc'
                                            ? opt.etc.id
                                            : '',
                                        optionType,
                                        opt.optionId,
                                    )
                                }
                            >
                                {opt.stock !== 0 && (
                                    <div className="">
                                        {optionType === 'color' && opt.color ? opt.color.color : ''}
                                        {optionType === 'size' && opt.size ? opt.size.size : ''}
                                        {optionType === 'etc' && opt.etc ? opt.etc.additionalOption : ''}
                                    </div>
                                )}
                                {opt.stock === 0 && (
                                    <div className="flex text-gray-400">
                                        {optionType === 'color' && opt.color ? opt.color.color : ''}
                                        {optionType === 'size' && opt.size ? opt.size.size : ''}
                                        {optionType === 'etc' && opt.etc ? opt.etc.additionalOption : ''}
                                        <p className="flex mx-2 ">(품절)</p>
                                        <p className=" absolute right-8 border border-black text-black px-3 ">
                                            입고알림
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
