'use client'
import Image from 'next/image'
import BackIcon from '@/images/Back'
import CartIcon from '@/images/CartIcon.png'
import SearchIcon from '@/images/SearchIcon.png'
import HeartIcon from '@/images/HeartIcon.png'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [showModal, setShowModal] = useState(false)
    const [selectedColor, setSelectedColor] = useState('')

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value)
    }

    const handleSubmit = () => {
        console.log(selectedColor)
        closeModal()
    }

    return (
        <>
            <div className="fixed top-0 w-full flex items-center justify-between h-12  font-bold bg-white px-2 z-[900]">
                <span className="ml-4">
                    <BackIcon />
                </span>

                <div className="flex justify-center flex-grow space-x-5">
                    <p>상세</p>
                    <p>리뷰</p>
                    <p>Q&A</p>
                </div>

                <span className="mr-2">
                    <Image src={CartIcon} alt="장바구니아이콘" width={24} height={24} />
                </span>

                <span>
                    <Image src={SearchIcon} alt="검색아이콘" width={24} height={24} />
                </span>
            </div>
            {children}
            <div className="fixed bottom-0 w-screen z-[900]">
                {!showModal && (
                    <ul className="flex items-center h-12">
                        <li className=" flex justify-center items-center w-14 bg-white h-12">
                            <Image src={HeartIcon} alt="하트아이콘"></Image>
                        </li>
                        <button
                            className="flex justify-center items-center bg-red-500 flex-grow h-12"
                            onClick={openModal}
                        >
                            <span className=" font-semibold text-white">구매하기</span>
                        </button>{' '}
                    </ul>
                )}

                {showModal && (
                    <div>
                        <div
                            className="fixed bottom-12 bg-white p-4  w-screen rounded-t-xl h-auto "
                            style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
                        >
                            <button className=" w-full h-7 flex items-center justify-center mb-2" onClick={closeModal}>
                                닫기
                            </button>

                            <select
                                className="w-full border p-2 bg-white rounded-md py-3 "
                                value={selectedColor}
                                onChange={handleColorChange}
                            >
                                <option value="">선택하세요. (색상)</option>
                                <option value="red">빨강</option>
                                <option value="blue">파랑</option>
                                <option value="green">초록</option>
                            </select>
                        </div>
                        <div className="flex items-center h-12">
                            <button
                                className="flex justify-center items-center bg-black flex-grow h-12"
                                onClick={handleSubmit}
                            >
                                <span className=" font-semibold text-white">장바구니</span>
                            </button>
                            <button
                                className="flex justify-center items-center bg-red-500 flex-grow h-12"
                                onClick={handleSubmit}
                            >
                                <span className=" font-semibold text-white">바로구매</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
