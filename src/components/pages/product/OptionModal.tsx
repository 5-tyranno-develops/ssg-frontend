'use client'

import { useEffect, useState } from 'react'
import { queryKeyType } from './ProductOptions'

export interface LastOptionType {
    optionId: number
    productName: string
    productPrice: number
    color: {
        id: number
        color: string
    }
    size: {
        id: number
        size: string
    }
    extra: any | null
    etc: {
        id: number
        additionalOption: string
    }
}

export default function OptionModal({
    showModal,
    optionType,
    productId,
    setShowModal,
    setSelectedOption,
    queryUrl,
    setQueryUrl,
    last,
    lastUrl,
    setLastUrl,
}: {
    last: boolean
    showModal: boolean
    optionType: string
    productId: string
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
    queryUrl: queryKeyType
    setQueryUrl: React.Dispatch<React.SetStateAction<queryKeyType>>
    lastUrl: string
    setLastUrl: React.Dispatch<React.SetStateAction<string>>
}) {
    const handleModal = () => {
        setShowModal(false)
    }

    const [optionData, setOptionData] = useState<any[]>([])
    // const [lastOptionData, setLastOptionData] = useState<>()
    const url = `https://tyrannoback.com/api/v1/option/${productId}?`

    lastUrl = 'color' + '=' + queryUrl.color + '&' + 'size' + '=' + queryUrl.size + '&' + 'etc' + '=' + queryUrl.etc
    // console.log(lastUrl, '!!!!!!!!!!!!')

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
                    const optionList: LastOptionType[] = res.result[0]
                    // console.log(optionList, '????')
                    // setOptionData(optionList)
                    // const optionList = res.
                    // console.log(res.result[0][`${optionType}`], '??')
                }
            }
            getLastData()
        }
    }, [optionType, productId, last, url, queryUrl])

    const handleColorSelection = (select: string, data: string, option: string) => {
        setSelectedOption(select)
        // console.log(queryUrl, option, select)

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
                                onClick={() =>
                                    handleColorSelection(opt[`${optionType}`], opt[`${optionType}Id`], optionType)
                                }
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
