'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function PhotoReview({ openModal }: { openModal: any }) {
    const items = new Array(10).fill(null) // 이 배열의 길이를 li 요소의 개수로 사용합니다.

    return (
        <div className="overflow-hidden">
            <ul className="overflow-x-auto whitespace-nowrap flex flex-nowrap gap-2 mx-[-20px] px-[20px]">
                {items.slice(0, 8).map((_, index) => (
                    <li key={index}>
                        <Link
                            href="#"
                            className="relative block w-[23vw] h-[23vw] bg-red-800 rounded-lg overflow-hidden"
                        ></Link>
                    </li>
                ))}
                {items.length > 8 && (
                    <li>
                        <button
                            onClick={openModal}
                            className="relative w-[23vw] h-[23vw] bg-zinc-200 rounded-lg overflow-hidden flex flex-col justify-center items-center text-[10px]"
                        >
                            <span className="block w-5 h-5 bg-sp_product bg-[position:-60px_-408px] bg-[length:524px_479px] mb-[2px] content-center"></span>
                            더보기
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
