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

function ProductSelect({
    productId,
    queryUrl,
    selectedOptionId,
    setSelectedOptionId,
}: {
    productId: string
    queryUrl: queryKeyType
    selectedOptionId: number
    setSelectedOptionId: React.Dispatch<React.SetStateAction<number>>
}) {
    const [option, setOption] = useState<any[]>([])
    const [count, setCount] = useState(1)
    const handleCountChange = (newCount: number) => {
        if (newCount >= 1) {
            setCount(newCount)
        }
    }

    const url = `https://tyrannoback.com/api/v1/option/${productId}?`
    const lastUrl =
        'color' + '=' + queryUrl.color + '&' + 'size' + '=' + queryUrl.size + '&' + 'etc' + '=' + queryUrl.etc
    useEffect(() => {
        const getLastData = async () => {
            const data1 = await fetch(`${url}${lastUrl}`)
            if (data1) {
                const res = await data1.json()
                const optionList: LastOptionType[] = res.result
                setOption(optionList)
                console.log(optionList, 555)
            }
        }

        getLastData()
    }, [productId, url, queryUrl])

    return (
        <>
            {option &&
                option
                    .filter((opt) => opt.optionId === selectedOptionId)
                    .map((opt: LastOptionType, index) => (
                        <div key={index}>
                            <div className="flex text-sm">
                                {opt.color && <div className="flex ml-2">color: {opt.color.color} </div>}
                                {opt.size && <div className="flex ml-2"> size: {opt.size.size}</div>}
                                {opt.etc && <div className="flex ml-2">etc: {opt.etc.additionalOption}</div>}
                            </div>
                            <div className="absolute ml-2 ">
                                <button className=" text-4xl font-thin  " onClick={() => handleCountChange(count - 1)}>
                                    -
                                </button>
                                <span className="mx-2  ">{count}</span>
                                <button className=" text-4xl font-thin " onClick={() => handleCountChange(count + 1)}>
                                    +
                                </button>
                            </div>
                            <div className=" absolute  right-5 text-lg font-semibold mt-5">
                                {(opt.productPrice * count).toLocaleString()}원
                            </div>
                        </div>
                    ))}
        </>
    )
}

export default ProductSelect
