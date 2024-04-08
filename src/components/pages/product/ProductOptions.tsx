'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import OptionModal from './OptionModal'
import ProductSelect from './ProductSelect'
import Link from 'next/link'

export interface LastOptionType {
    optionId: string
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
    discount: number
}
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
    const [optionData, setOptionData] = useState<LastOptionType>({} as LastOptionType)
    const [newOptionList, setNewOptionList] = useState<OptionListType[]>([] as OptionListType[])
    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<number>(0)
    const [productOptionId, setProductOptionId] = useState<string>('')
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
    const url = `https://tyrannoback.com/api/v1/option/${productId}?`

    const lastUrl =
        'color' + '=' + queryUrl.color + '&' + 'size' + '=' + queryUrl.size + '&' + 'etc' + '=' + queryUrl.etc

    useEffect(() => {
        const getLastData = async () => {
            const data1 = await fetch(`${url}${lastUrl}`, {
                cache: 'force-cache',
            })
            if (data1) {
                const res = await data1.json()
                const optionList: LastOptionType = res.result[0]
                setOptionData(optionList)
                const optionId: LastOptionType[] = res.result[0].optionId
                setProductOptionId(optionId.toString())
                // console.log(optionId, '????')
                // const optionList = res.
                // console.log(res.result[0][`${optionType}`], '??')
            }
        }
        getLastData()
    }, [productId, url, queryUrl])
    console.log(optionData)

    // console.log(productId, '상품아이디')

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
                    {optionData.color === null && optionData.size === null && optionData.etc === null ? (
                        <div className="px-2">
                            <div className="mt-5 border py-2 w-full bg-gray-100  border-black rounded-md min-h-[90px] ">
                                <div className="flex text-sm ml-2">{optionData.productName}</div>
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
                                    {(
                                        optionData.productPrice *
                                        (1 - (optionData.discount as number) / 100) *
                                        count
                                    ).toLocaleString()}{' '}
                                    원
                                </div>
                            </div>
                            <div className="flex justify-end py-6 p-2">
                                <p className="mr-2 font-bold">총 합계</p>
                                <p className=" text-red-500 font-bold  text-xl">
                                    {(
                                        optionData.productPrice *
                                        (1 - (optionData.discount as number) / 100) *
                                        count
                                    ).toLocaleString()}
                                    원
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-end py-6 p-2">
                            <p className="mr-2 font-bold">총 합계</p>
                            <p className=" text-red-500 font-bold  text-xl">
                                {(
                                    optionData.productPrice *
                                    (1 - (optionData.discount as number) / 100) *
                                    count
                                ).toLocaleString()}
                                원
                            </p>
                        </div>
                    )}
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
                <Link
                    href={{
                        pathname: '/order',
                        query: {
                            productId: productId,
                            optionId: productOptionId,
                            count: count,
                        },
                    }}
                    className="flex justify-center items-center bg-red-500 flex-grow h-12"
                >
                    <span className="  text-white">바로구매</span>
                </Link>
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
                    <div>
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
