'use client'

import { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
import { useParams } from 'next/navigation'

interface OptionListType {
    name: string,
    isChecked: boolean
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

    

    const [selectedOptionType, setSelectedOptionType] = useState<string>('')

    useEffect(() => {

        const getOptionData = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/option/string/${productId}`, { cache: 'force-cache' })
            if(data) {
                const res = await data.json()
                setOptionData(res.result)
                const newData = res.result.map((opt: string, idx:number) =>{
                    return {
                        name: opt,
                        isChecked: idx === 0 ? true : false
                    }
                })
                console.log(newData)
                setNewOptionList(newData)
            }
        }
        getOptionData()    
    }, [productId])


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
    console.log(optionData)

    const handleModal = () => {
        setIsModal(false)
    }

    const handleClickOption = (optionType: string) => {
       
        setSelectedOptionType(optionType)
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

                    {newOptionList &&
                        newOptionList.map((item: OptionListType, index) => (
                            <div
                                key={index}
                                className={`${item.isChecked ? '' : 'opacity-30 cursor-not-allowed'}w-full border  bg-white rounded-md mb-2 py-1`}
                                onClick={
                                    item.isChecked ?
                                    () => handleClickOption(item.name) : () => alert('선택할 수 없습니다.')
                                }
                            >
                                <div className="ml-2 text-sm"> 선택하세요. ({item.name})</div>
                            </div>
                        ))}
                    <div className="flex justify-end py-5">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">0 원</p>
                    </div>
                </div>
                <OptionModal
                    showOption={selectedOptionType !== ''}
                    optionType={selectedOptionType}
                    setShowOption={() => setSelectedOptionType('')}
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
