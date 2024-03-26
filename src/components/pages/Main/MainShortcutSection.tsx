'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MainShortcutType } from '@/types/MainShortcutType'
import { mainShortcutData } from '@/lib/mainShortcutData'

export default function MainShortcutSection() {
    const [scrollPercent, setScrollPercent] = useState(20)

    const progress = (event: any) => {
        const { scrollLeft } = event.target
        console.log('scrollLeft >>', scrollLeft)

        // 스크롤한 비율 계산
        const percentScrolled = Math.ceil((scrollLeft / 320) * 100)
        // scrollPercent 상태 변수 업데이트
        console.log(percentScrolled, '%')
        console.log(screen.width)
        setScrollPercent(percentScrolled)
    }

    console.log('scrollPercent >>', scrollPercent)

    const lineBreak = (text: string) => {
        return <span dangerouslySetInnerHTML={{ __html: text.replace(/ /g, '<br />') }} />
    }

    return (
        <section>
            <ul onScroll={progress} className="pt-3 pr-3 flex justify-start items-start overflow-x-scroll">
                {mainShortcutData.map((item: MainShortcutType, idx) => {
                    return (
                        <ol key={idx} className="py-5 pl-3 pr text-xs text-center">
                            <div className="w-[64px] h-[102px] flex flex-col items-center">
                                <div className="mb-1">
                                    <Image
                                        className="rounded-full"
                                        alt={item.title1}
                                        src={item.src1}
                                        width={64}
                                        height={64}
                                        unoptimized={true}
                                    />
                                </div>
                                {lineBreak(item.title1)}
                            </div>
                            <div key={idx} className="w-[64px] h-[128px] pt-2 flex flex-col items-center">
                                <div className="overflow-hiddden mb-2">
                                    <Image
                                        className="rounded-full"
                                        alt={item.title2}
                                        src={item.src2}
                                        width={64}
                                        height={96}
                                    />
                                </div>
                                {lineBreak(item.title2)}
                            </div>
                        </ol>
                    )
                })}
            </ul>
            <div className="h-0.5 w-11/12 mx-auto my-2 bg-slate-300 ">
                <div className={`bg-black h-0.5 `} style={{ width: `${scrollPercent}%` }}></div>
            </div>
        </section>
    )
}
