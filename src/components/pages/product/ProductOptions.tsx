'use client'

import { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
import { useParams } from 'next/navigation'

interface OptionListType {
    idx: number
    name: string
    isChecked: boolean
}

export interface queryKeyType {
    color: string
    size: string
    etc: string
}

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
    const [newOptionList, setNewOptionList] = useState<OptionListType[]>([] as OptionListType[])

    const [queryUrl, setQueryUrl] = useState<queryKeyType>({
        color: '',
        size: '',
        etc: '',
    } as queryKeyType)

    useEffect(() => {
        const getOptionData = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/option/string/${productId}`, {
                cache: 'force-cache',
            })
            if (data) {
                const res = await data.json()
                setOptionData(res.result)

                const newData = res.result.map((opt: string, idx: number) => {
                    return {
                        idx: idx,
                        name: opt,
                        isChecked: idx === 0 ? true : false,
                    }
                })
                setNewOptionList(newData)
            }
        }
        getOptionData()
    }, [productId])

    useEffect(() => {}, [queryUrl])

    // for (let i = 0; i < optionData.length; i++) {
    //     if (optionData[i] == 'color') {
    //         optionData[i] = '색상'
    //     }
    //     if (optionData[i] == 'size') {
    //         optionData[i] = '사이즈'
    //     }
    //     if (optionData[i] == 'extra') {
    //         optionData[i] = '추가'
    //     }
    //     if (optionData[i] == 'etc') {
    //         optionData[i] = '기타'
    //     }
    // }
    // console.log(optionData)

    const handleModal = () => {
        setIsModal(false)
    }

    return (
        <>
            <div
                className={`${
                    isModal ? 'bottom-8 ease-in-out ' : '-bottom-[400px] easy-out-in'
                } fixed transition-all delay-150 z-[10] w-full`}
            >
                <div
                    className=" bg-white  rounded-t-xl min-h-[200px]"
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className="close  w-full h-5 p-4 flex items-center justify-center mb-2 " onClick={handleModal}>
                        닫기
                    </p>

                    {newOptionList &&
                        newOptionList.map((item: OptionListType, index) => (
                            <OptionSelecter
                                key={index}
                                item={item}
                                productId={productId}
                                setNewOptionList={setNewOptionList}
                                newOptionList={newOptionList}
                                queryUrl={queryUrl}
                                setQueryUrl={setQueryUrl}
                            />
                        ))}
                    <div className="flex justify-end py-5">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">0 원</p>
                    </div>
                </div>
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

const OptionSelecter = ({
    item,
    productId,
    setNewOptionList,
    newOptionList,
    queryUrl,
    setQueryUrl,
}: {
    item: OptionListType
    productId: string
    newOptionList: OptionListType[]
    setNewOptionList: React.Dispatch<React.SetStateAction<OptionListType[]>>
    queryUrl: queryKeyType
    setQueryUrl: React.Dispatch<React.SetStateAction<queryKeyType>>
}) => {
    const [selectedOption, setSelectedOption] = useState<string>(`선택하세요. ${item.name}`)
    const [showModal, setShowModal] = useState<boolean>(false)
    // const [selectedOptionType, setSelectedOptionType] = useState<string>('')

    useEffect(() => {
        setNewOptionList(
            newOptionList.map((opt: OptionListType) => {
                if (opt.idx === item.idx + 1 && opt.idx !== newOptionList.length - 1) {
                    return {
                        ...opt,
                        isChecked: true,
                    }
                } else if (opt.idx === item.idx + 1 && opt.idx === newOptionList.length - 1) {
                    return {
                        ...opt,
                        isChecked: true,
                    }
                }
                return opt
            }),
        )
    }, [selectedOption])

    return (
        <>
            <div
                className={`${
                    item.isChecked ? '' : 'opacity-30 cursor-not-allowed'
                }w-full border bg-white rounded-md mb-2 py-1`}
                onClick={item.isChecked ? () => setShowModal(true) : () => alert('선택할 수 없습니다.')}
            >
                <div className="ml-2 text-sm ">{selectedOption}</div>
            </div>
            <OptionModal
                last={item.idx >= newOptionList.length - 1 ? true : false}
                showModal={showModal}
                optionType={item.name}
                setShowModal={setShowModal}
                setSelectedOption={setSelectedOption}
                productId={productId}
                queryUrl={queryUrl}
                setQueryUrl={setQueryUrl}
            />
        </>
    )
}
