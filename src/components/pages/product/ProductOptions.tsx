'use client'

import { useState } from 'react'
import OptionColorModal from '@/components/modal/product/OptionColorModal'

interface props {
    option: any
}

export default function ProductOptions({ option }: props) {
    for (let i = 0; i < option.length; i++) {
        if (option[i] == 'color') {
            option[i] = '색상'
        }
        if (option[i] == 'size') {
            option[i] = '사이즈'
        }
        if (option[i] == 'extra') {
            option[i] = '추가'
        }
        if (option[i] == 'etc') {
            option[i] = '기타'
        }
    }
    console.log(option)

    return (
        <>
            <div className="open  fixed bottom-0 ">
                <div
                    className=" bg-white p-4  w-screen rounded-t-xl h-auto "
                    style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                >
                    <button className="close  w-full h-5  flex items-center justify-center mb-2 ">닫기</button>
                    {option && (
                        <div className="w-full border p-2 bg-white rounded-md py-3 ">선택하세요. {option[0]}</div>
                    )}
                    <div className="flex  justify-end py-5">
                        <p className="mr-2 font-bold">총 합계</p>
                        <p className=" text-red-500 font-bold  text-xl">0 원</p>
                    </div>
                </div>
                <div className="flex items-center h-12">
                    <button className="flex justify-center items-center bg-black flex-grow h-12">
                        <span className="  text-white">장바구니</span>
                    </button>
                    <button className="flex justify-center items-center bg-red-500 flex-grow h-12">
                        <span className="  text-white">바로구매</span>
                    </button>
                </div>
            </div>
        </>
    )
}
