'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
import { useParams } from 'next/navigation'
import ProductSelect from './ProductSelect'
import { GetOptionDataAPI } from '@/actions/option'

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
    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState(Number)
    const [discount, setDiscount] = useState<number>()
    const [queryUrl, setQueryUrl] = useState<queryKeyType>({
        color: '',
        size: '',
        etc: '',
    } as queryKeyType)
    const [count, setCount] = useState(1)
    const handleCountChange = (newCount: number) => {
        if (newCount >= 1) {
            setCount(newCount)
        }
    }

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
        const getData = async () => {
            const response = await GetOptionDataAPI(productId)
            if (!response.isSuccess) {
                console.log('서버 오류')
            }
            console.log(response)
            setProductName(response.result[0].productName)
            setProductPrice(response.result[0].productPrice)
            setDiscount(response.result[0].discount)
        }

        getData()
    }, [productId])

    //    할지말지?
    //     for (let i = 0; i < newOptionList.length; i++) {
    //         if (newOptionList[i].name == 'color') {
    //             newOptionList[i].name = '색상'
    //         }
    //         if (newOptionList[i].name == 'size') {
    //             newOptionList[i].name = '사이즈'
    //         }
    //         if (newOptionList[i].name == 'etc') {
    //             newOptionList[i].name = '기타'
    //         }
    //     }
    useEffect(() => {}, [queryUrl])

    const handleModal = () => {
        setIsModal(false)
    }

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
                    {optionData.length === 0 && (
                        <div className="px-2">
                            <div className="mt-5 border py-2 w-full bg-gray-100  border-black rounded-md min-h-[90px] ">
                                <div className="flex text-sm ml-2">{productName}</div>
                                <div className="absolute ml-2  bg-white mt-2 w-20 flex items-center justify-center h-8">
                                    <button
                                        className=" text-4xl font-thin mb-2"
                                        onClick={() => handleCountChange(count - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-3  ">{count}</span>
                                    <button
                                        className=" text-4xl font-thin mb-2"
                                        onClick={() => handleCountChange(count + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className=" absolute  right-5 text-lg font-semibold mt-5">
                                    {(productPrice * (1 - (discount as number) / 100) * count).toLocaleString()}원
                                    {/* * (1 - {discount} / 100) * {count} */}
                                </div>
                            </div>
                        </div>
                    )}
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

                    <div className="flex justify-end py-6 p-2">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">
                            {' '}
                            {(productPrice * (1 - (discount as number) / 100) * count).toLocaleString()} 원
                        </p>
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
    const [selectedOption, setSelectedOption] = useState<string>(`선택하세요. (${item.name})`)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedOptionId, setSelectedOptionId] = useState(Number)
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
            <div className="px-2 py-1">
                <div
                    className={`${
                        item.isChecked ? '' : 'opacity-30 cursor-not-allowed'
                    }w-full border bg-white rounded-md  py-2 `}
                    onClick={item.isChecked ? () => setShowModal(true) : () => alert('선택할 수 없습니다.')}
                >
                    <div className="ml-2 text-sm ">{selectedOption}</div>
                </div>
                {selectedOptionId > 0 && (
                    <div className="mt-5 border py-2 w-full bg-gray-100  border-black rounded-md min-h-[90px]">
                        <ProductSelect
                            productId={productId}
                            queryUrl={queryUrl}
                            setSelectedOptionId={setSelectedOptionId}
                            selectedOptionId={selectedOptionId}
                        />
                    </div>
                )}
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
            />
        </>
    )
}
