'use client'
import { SelectedOptionItemListAtom } from '@/state/SelectedOptionListAtom'
import { LastOptionListType } from '@/types/LastOptionType'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

export default function ProductSelect({ item }: { item: LastOptionListType }) {
    const [data, setData] = useRecoilState(SelectedOptionItemListAtom)

    const handleCountChange = (newCount: number) => {
        if (newCount >= 1) {
            const updatedData = data.map((optionItem: { productId: string; optionId: string }) => {
                if (optionItem.productId === item.productId && optionItem.optionId === item.optionId) {
                    return {
                        ...optionItem,
                        qty: newCount,
                    }
                }
                return optionItem
            })
            setData(updatedData)
        }
    }

    return (
        <div>
            <div className="mt-5 border py-2 w-full bg-gray-100  border-black rounded-md min-h-[90px] ">
                <div className="flex text-sm">
                    {item.color && <p className="flex ml-2">color: {item.color} </p>}
                    {item.size && <p className="flex ml-2"> size: {item.size}</p>}
                    {item.etc && <p className="flex ml-2">etc: {item.etc}</p>}
                </div>
                <div className="absolute ml-2 bg-white mt-2 w-20 flex items-center justify-center h-8">
                    <button className="text-4xl font-thin mb-2" onClick={() => handleCountChange(item.qty - 1)}>
                        -
                    </button>
                    <span className="mx-3">{item.qty}</span>
                    <button className="text-4xl font-thin mb-2" onClick={() => handleCountChange(item.qty + 1)}>
                        +
                    </button>
                </div>
                <div className=" absolute  right-5 text-lg font-semibold mt-5">
                    {(item.price * (1 - item.discount / 100) * item.qty).toLocaleString()}원
                </div>
            </div>
        </div>
    )
}
