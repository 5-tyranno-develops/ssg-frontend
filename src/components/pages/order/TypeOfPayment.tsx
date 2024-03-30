'use client'
import { useState } from 'react'

export default function TypeOfPayment() {
    const [payList, setPayList] = useState(false)

    return (
        <>
            <div className={payList ? 'bg-white m-4 p-2 rounded-xl h-96' : 'bg-white m-4 p-2 rounded-xl'}>
                <div className=" pb-2">
                    <span className="text-[18px] font-semibold my-5 mx-2">결제방법</span>
                </div>
                <hr className="bg-[#9b9b9b] h-[0.3px]" />
                <div className="my-4 ml-2">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            onClick={() => {
                                setPayList(true)
                            }}
                            className=" accent-red-500 border-[2px solid #ccc] w-4 h-4 rounded-full cursor-pointer peer"
                        />
                        <span className="ml-2 peer-checked:font-extrabold">일반결제</span>
                    </div>
                    {payList && <PayList />}
                </div>
            </div>
        </>
    )
}

function PayList() {
    return (
        <>
            <div className="h-60 bg-white w-full my-5 text-[14px]">
                <ul>
                    <div className="w-full flex">
                        <li className="m-1 flex-1 inline-block float-left ">
                            <input type="radio" id="select" className="hidden peer" name="paying" defaultChecked />
                            <label
                                htmlFor="select"
                                className="w-full border-[1px] min-h-[50px] flex justify-center items-center bg-white peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-center text-[13px] peer-checked:border-0"
                            >
                                신용카드
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select2" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select2"
                                className="w-full relative justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                SSG<span className="text-red-500">PAY.</span>
                                <span className="absolute text-[8px] bg-[#d8d8d8] px-1 top-0 left-0">APP</span>
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select3" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select3"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                kakaoPay
                            </label>
                        </li>
                    </div>
                    <div className="w-full flex">
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select4" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select4"
                                className="w-full justify-center text-red-700 font-bold items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[15px] peer-checked:border-0"
                            >
                                PAYCO
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select5" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select5"
                                className="w-full justify-center text-blue-900 font-bold items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                SAMSUNG <br />
                                Pay
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select6" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select6"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                휴대폰 소액결제
                            </label>
                        </li>
                    </div>
                    <div className="w-full flex">
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select7" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select7"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                무통장 입금
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select8" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select8"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                실시간 계좌이체
                            </label>
                        </li>
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select9" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select9"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                해외발급 신용카드
                            </label>
                        </li>
                    </div>
                    <div className="w-1/3 flex">
                        <li className="m-1 flex-1 inline-block float-left">
                            <input type="radio" id="select10" name="paying" className="hidden peer" />
                            <label
                                htmlFor="select10"
                                className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0"
                            >
                                Alipay
                            </label>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}
