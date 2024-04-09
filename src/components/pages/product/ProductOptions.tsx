'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
// import ProductSelect from './ProductSelect'
import Link from 'next/link'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { LastOptionType } from '@/types/LastOptionType'
import { SelectedOptionItemListAtom } from '@/state/SelectedOptionListAtom'
import { ProductDataType } from '@/types/ProductDetailDataType'
import { LastOptionListType } from '@/types/LastOptionType'
import ProductSelect from './ProductSelect'

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
    productData,
}: {
    isModal: boolean
    productId: string
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    productData: ProductDataType
}) {
    const [optionData, setOptionData] = useState<LastOptionType>({} as LastOptionType)
    const [newOptionList, setNewOptionList] = useState<OptionListType[]>([] as OptionListType[])
    const [queryUrl, setQueryUrl] = useState<queryKeyType>({
        color: '',
        size: '',
        etc: '',
    } as queryKeyType)
    const [selectedOptionId, setSelectedOptionId] = useState<number>(0)
    const [selectedOptionList, setSelectedOptionList] = useRecoilState(SelectedOptionItemListAtom)
    const [count, setCount] = useState(1)
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

    useEffect(() => {
        const getOptionDataByOptionId = async () => {
            const res = await fetch(`https://tyrannoback.com/api/v1/option/names/${selectedOptionId}`)
            if (res) {
                const data = await res.json()
                // console.log(data)
                if (data.isSuccess) {
                    setSelectedOptionList([
                        ...selectedOptionList,
                        {
                            productId: productId,
                            optionId: selectedOptionId,
                            productName: productData.productName,
                            price: productData.price,
                            discount: productData.discount,
                            color: data.result?.color,
                            size: data.result?.size,
                            etc: data.result?.additional_option,
                            qty: count,
                        },
                    ])
                }
            }
        }
        getOptionDataByOptionId()
    }, [selectedOptionId])
    // console.log(selectedOptionList)

    // console.log(productId, '상품아이디')

    const handleModal = () => {
        setIsModal(false)
    }

    const totalCount = selectedOptionList.reduce((sum: number, item: LastOptionListType) => {
        return sum + item.qty
    }, 0)

    // console.log(totalCount)
    // console.log(selectedOptionId)
    return (
        <>
            <div
                className={`${
                    isModal ? 'bottom-8 ease-in-out ' : '-bottom-[400px] easy-out-in'
                } fixed transition-all delay-150 z-[10] w-full `}
            >
                <div
                    className=" bg-white  rounded-t-xl min-h-[200px]"
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className=" w-full h-5 p-4 flex items-center justify-center mb-2 " onClick={handleModal}>
                        <Image
                            width={20}
                            height={20}
                            src="https://img.icons8.com/ios-glyphs/30/back.png"
                            alt="back"
                            style={{ transform: 'rotate(270deg)' }}
                        />
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
                                productData={productData}
                                selectedOptionId={selectedOptionId}
                                setSelectedOptionId={setSelectedOptionId}
                                selectedOptionList={selectedOptionList}
                            />
                        ))}

                    {selectedOptionList.length > 0 &&
                        selectedOptionList.map((item: LastOptionListType, idx: number) => (
                            <div key={idx} className="p-3">
                                <ProductSelect item={item} />
                            </div>
                        ))}

                    <div className="flex justify-end py-6 p-2">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">
                            {(productData.price * (1 - productData.discount / 100) * totalCount).toLocaleString()}원
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isModal ? 'bottom-0 z-[10]' : '-bottom-[200px] delay-300 '
                } transition-all flex items-center h-12 fixed w-full`}
            >
                <button className="flex justify-center items-center bg-black flex-grow h-12 ">
                    <span className="  text-white">장바구니</span>
                </button>
                <button className="flex-grow">
                    <Link href={'/order'} className="flex justify-center items-center bg-red-500  h-12 ">
                        <span className="  text-white">바로구매</span>
                    </Link>
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
    productData,
    selectedOptionId,
    setSelectedOptionId,
    selectedOptionList,
}: {
    item: OptionListType
    productId: string
    newOptionList: OptionListType[]
    setNewOptionList: React.Dispatch<React.SetStateAction<OptionListType[]>>
    queryUrl: queryKeyType
    setQueryUrl: React.Dispatch<React.SetStateAction<queryKeyType>>
    productData: ProductDataType
    selectedOptionId: number
    setSelectedOptionId: React.Dispatch<React.SetStateAction<number>>
    selectedOptionList: LastOptionListType[]
}) => {
    const [selectedOption, setSelectedOption] = useState<string>(`선택하세요. (${item.name})`)
    const [showModal, setShowModal] = useState<boolean>(false)
    // const [selectedOptionId, setSelectedOptionId] = useState<number>(0)
    // const [selectedOptionList, setSelectedOptionList] = useRecoilState(SelectedOptionItemListAtom)
    // const [selectedOptionType, setSelectedOptionType] = useState<string>('')
    const resetSelectedOptionList = useResetRecoilState(SelectedOptionItemListAtom)

    useEffect(() => {
        return () => {
            resetSelectedOptionList()
        }
    }, [])
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

    // console.log(selectedOptionId)

    return (
        <>
            <div className="px-3 py-1">
                <div
                    className={`${
                        item.isChecked ? '' : 'opacity-30 cursor-not-allowed'
                    }w-full border bg-white rounded-md  py-2 `}
                    onClick={item.isChecked ? () => setShowModal(true) : () => alert('선택할 수 없습니다.')}
                >
                    <div className="ml-2 text-sm ">{selectedOption}</div>
                </div>
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
                setSelectedOptionId={setSelectedOptionId}
                selectedOptionId={selectedOptionId}
            />
        </>
    )
}
