'use client'

import { OptionDataType } from '@/types/OptionDataType'
import { useState, useEffect } from 'react'

interface props {
    open: boolean
    close: () => void
}

export default function OptionColorModal({ open, close }: props) {
    const [colorList, setColorList] = useState<OptionDataType[]>([])
    const [selectedColor, setSelectedColor] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tyrannoback.com/api/v1/option/101')
                if (!response.ok) {
                    throw new Error('Failed to fetch options')
                }
                const data = await response.json()
                setColorList(data.result.filter((option: OptionDataType) => option.color !== null))
            } catch (error) {
                console.error('Error fetching options:', error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = (color: string) => {
        setSelectedColor(color)
        console.log(color)
        close()
    }

    return (
        <div className="open fixed bottom-0 ">
            <div
                className=" bg-white p-4  w-screen rounded-t-xl h-auto "
                style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
            >
                <button className="close  w-full h-5  flex items-center justify-center mb-2 " onClick={close}>
                    닫기
                </button>
                <div className="w-full border p-2 bg-white rounded-md py-3 ">선택하세요. (색상)</div>
                {colorList.map((option) => (
                    <div key={option.optionId} onClick={() => handleSubmit(option.color.color)}>
                        <p className="p-2">{option.color.color}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
