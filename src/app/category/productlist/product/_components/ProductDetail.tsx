'use client'
import Image from 'next/image'
import { ProductDataType } from '@/types/productDataType'
import React, { useState } from 'react'
import DetailIcon from '@/images/DetailIcon.png'

export default function ProductDetail() {
    const [expanded, setExpanded] = useState(false)
    //임시 사진들
    const productData: ProductDataType[] = [
        {
            id: 1,
            imageUrl: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_750.jpg',
        },
        {
            id: 3,
            imageUrl: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_750.jpg',
        },
        {
            id: 4,
            imageUrl: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i4_750.jpg',
        },
        {
            id: 5,
            imageUrl: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i5_750.jpg',
        },
    ]

    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const getImagesToShow = () => {
        if (expanded) {
            return productData.map((item) => item.imageUrl)
        } else {
            return productData.slice(0, 2).map((item) => item.imageUrl)
        }
    }
    return (
        <main className='className="mb-12"'>
            {getImagesToShow().map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`상품이미지${index + 1}`}
                        data-src={image}
                        data-ll-status="loaded"
                        className="w-full"
                    ></img>
                </div>
            ))}
            {!expanded && productData.length > 2 && (
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        onClick={toggleExpand}
                        className=" w-full h-12 bg-white text-base text-center "
                        style={{ boxShadow: '0px -100px 30px rgba(255,255,255,0.7)' }}
                    >
                        상세정보 펼쳐보기
                    </button>
                    <Image src={DetailIcon} alt="장바구니아이콘" className="w-6 h-8"></Image>
                </div>
            )}
            {expanded && (
                <div>
                    <button
                        type="button"
                        onClick={toggleExpand}
                        className=" w-full h-12 bg-white text-base text-center"
                    >
                        상세정보 접기
                    </button>
                </div>
            )}
        </main>
    )
}
