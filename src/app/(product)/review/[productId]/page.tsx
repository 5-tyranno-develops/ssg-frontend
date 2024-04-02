'use client'
import ReviewTotalScore from '@/components/ui/ReviewTotalScore'
import Review from '@/components/ui/Review'
import React, { useState } from 'react'
// import SimpleHeader from '@/components/layouts/SimpleHeader'
import Link from 'next/link'
import PhotoReview from '@/components/pages/review/PhotoReview'
import SmallArrowIcon from '@/images/SmallArrowIcon'
import Modal from '@/components/ui/Modal'

export default function page() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isListVisible, setListVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState('전체')
    const [selectedItem2, setSelectedItem2] = useState('')
    const [isListVisible2, setListVisible2] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <div className="w-full h-full">
            {isModalOpen && <Modal closeModal={closeModal} />}
            {/* <SimpleHeader title="리뷰 전체 보기" /> */}
            <ReviewTotalScore />
            <div className="w-full h-[148px] mt-5 px-4">
                <div className="w-full h-[21px] mb-4 flex justify-between items-center">
                    <span className="font-bold">포토 리뷰</span>
                    <span className="flex text-xs whitespace-nowrap text-gray-400" onClick={openModal}>
                        더보기<span>(3658)</span>
                        <div className="w-[16px] h-[14px]">
                            <span>
                                <SmallArrowIcon />
                            </span>
                        </div>
                    </span>
                </div>
                <PhotoReview openModal={openModal} />
            </div>
            <div className="w-full h-[51.3px] px-5 border-t-[10px] border-zinc-100 border-solid mt-[60px]">
                <div className="border-b-2 border-zinc-100">
                    <div className="text-[12px] flex justify-between items-center pt-4 pb-[15px]">
                        <ul className="list-none">
                            <li className="w-full h-full relative">
                                <div className="">
                                    <Link
                                        href="#"
                                        className="w-full h-full pr-[15px] relative"
                                        onClick={() => setListVisible(!isListVisible)}
                                    >
                                        {selectedItem}
                                        <span className="absolute w-4 h-4 bg-sp_product bg-no-repeat bg-[position:-323px_-408px] bg-[length:524px_479px]"></span>
                                    </Link>
                                    {isListVisible && (
                                        <ul className="absolute items-center justify-center font-sans">
                                            {/* 리스트 아이템을 여기에 추가하세요. */}
                                            <li
                                                className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
                                                    selectedItem === '전체'
                                                        ? 'bg-black text-white'
                                                        : 'bg-white text-black'
                                                }`}
                                                onClick={() => {
                                                    setSelectedItem('전체')
                                                    setListVisible(false)
                                                }}
                                            >
                                                전체
                                            </li>
                                            <li
                                                className={`w-[119px] h-[41.5px] py-[11px] px-[10px] ${
                                                    selectedItem === '포토'
                                                        ? 'bg-black text-white'
                                                        : 'bg-white text-black'
                                                }`}
                                                onClick={() => {
                                                    setSelectedItem('포토')
                                                    setListVisible(false)
                                                }}
                                            >
                                                포토
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        </ul>
                        <div className="relative">
                            <Link
                                href="#"
                                className="w-full h-full pr-[15px] relative"
                                onClick={() => setListVisible2(!isListVisible2)}
                            >
                                {selectedItem2 ? selectedItem2 : '추천순'}
                                <span className="absolute w-4 h-4 bg-sp_product bg-no-repeat bg-[position:-361px_-374px] bg-[length:524px_479px]"></span>
                            </Link>
                            {isListVisible2 && (
                                <ul className="absolute items-center justify-cente right-0 text-zinc-400 font-sans z-20">
                                    {/* 리스트 아이템을 여기에 추가하세요. */}
                                    <li
                                        className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
                                            selectedItem2 === '추천순' ? 'bg-black text-white' : 'bg-white text-black'
                                        }`}
                                        onClick={() => {
                                            setSelectedItem2('추천순')
                                            setListVisible2(false)
                                        }}
                                    >
                                        추천순
                                    </li>
                                    <li
                                        className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
                                            selectedItem2 === '최신순' ? 'bg-black text-white' : 'bg-white text-black'
                                        }`}
                                        onClick={() => {
                                            setSelectedItem2('최신순')
                                            setListVisible2(false)
                                        }}
                                    >
                                        최신순
                                    </li>
                                    <li
                                        className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
                                            selectedItem2 === '평점높은순'
                                                ? 'bg-black text-white'
                                                : 'bg-white text-black'
                                        }`}
                                        onClick={() => {
                                            setSelectedItem2('평점높은순')
                                            setListVisible2(false)
                                        }}
                                    >
                                        평점높은순
                                    </li>
                                    <li
                                        className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
                                            selectedItem2 === '평점낮은순'
                                                ? 'bg-black text-white'
                                                : 'bg-white text-black'
                                        }`}
                                        onClick={() => {
                                            setSelectedItem2('평점낮은순')
                                            setListVisible2(false)
                                        }}
                                    >
                                        평점낮은순
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Review />
        </div>
    )
}
