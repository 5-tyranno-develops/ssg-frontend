'use client'

import Image from 'next/image'
import { useState } from 'react'
import HeaderToBackInModal from '../ui/HeaderToBackInModal'

interface props {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}

export default function DeliveryRequestModal({ modalOpen, setModalOpen }: props) {
    const [messageLength, setMessageLength] = useState(0)

    const countLength = (e: any) => {
        setMessageLength(e.target.value.length)
    }

    return modalOpen ? (
        <div>
            <div className="bg-black/60 absolute inset-0 z-50">
                <div className="fixed inset-x-0 top-0 bottom-0 flex flex-col border  bg-white">
                    <HeaderToBackInModal title="수령위치 선택" setModalOpen={setModalOpen} />

                    <div className="my-[20px] px-[16px]">
                        <h1 className="text-[18px] tracking-[-0.3px] font-bold">택배배송 요청사항</h1>
                        <ul>
                            <li className="flex items-center my-2">
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px] mr-2 peer accent-red-500"
                                    name="requestList"
                                />
                                <span className="text-[13px] peer-checked:font-bold tracking-[-0.3px]">
                                    부재 시 경비실에 맡겨주세요
                                </span>
                            </li>
                            <li className="flex items-center my-2">
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px] mr-2 peer accent-red-500"
                                    name="requestList"
                                />
                                <span className="text-[13px] peer-checked:font-bold tracking-[-0.3px]">
                                    부재 시 문 앞에 놓아주세요
                                </span>
                            </li>
                            <li className="flex items-center my-2">
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px] mr-2 peer accent-red-500"
                                    name="requestList"
                                />
                                <span className="text-[13px] peer-checked:font-bold tracking-[-0.3px]">
                                    직접 받겠습니다
                                </span>
                            </li>
                            <li className="flex items-center my-2">
                                <input
                                    type="radio"
                                    className="w-[18px] h-[18px] mr-2 peer accent-red-500"
                                    name="requestList"
                                />
                                <span className="text-[13px] peer-checked:font-bold tracking-[-0.3px]">
                                    배송 전에 연락주세요
                                </span>
                            </li>
                            <li className="flex items-center my-2">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        className="w-[18px] h-[18px] mr-2 peer accent-red-500"
                                        name="requestList"
                                    />
                                    <span className="text-[13px] peer-checked:font-bold tracking-[-0.3px] ">
                                        직접 입력
                                    </span>
                                    <br />
                                    <textarea
                                        className="border-[1px] border-black hidden static peer-checked:block text-[12px] w-[90vw] h-16 p-[10px] m-2"
                                        cols={30}
                                        rows={2}
                                        maxLength={50}
                                        placeholder="메세지를 입력해 주세요"
                                        onChange={countLength}
                                    ></textarea>
                                    <span className="absolute top-[75px] text-[11px] right-5 text-[#888888] hidden peer-checked:block">
                                        {messageLength} / 50
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="my-[20px] px-[16px]">
                        <p className="flex items-center">
                            <input type="checkbox" className="w-[18px] h-[18px] accent-red-500" />
                            <span className="ml-2 text-red-500 font-bold tracking-[-0.3px]">
                                다음 배송에도 계속 사용할게요
                            </span>
                        </p>
                        <span className="text-[12px] tracking-[-0.3px] text-[#888888]">
                            편리한 배송을 위해 배송 목적에 한해 사용하겠습니다
                        </span>
                    </div>

                    <button
                        className="bottom-0 left-0 right-0 fixed h-14 z-50 bg-[#ff5452] text-white font-semibold"
                        onClick={() => {
                            setModalOpen(false)
                        }}
                    >
                        변경하기
                    </button>
                </div>
            </div>
        </div>
    ) : null
}
