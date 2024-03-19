//https://m.ssg.com/item/itemView.ssg?itemId=1000581553919&siteNo=6009&salestrNo=1004참고
'use client'

import React, { useState } from 'react'
import ProductTopHeader from './ProductTopHeader'
import ProductBottomHeader from './ProductBottomHeader'
import Thumnail from './Thumbnail'
import ProductInformation from './ProductInformation'

function Product() {
    const [expanded, setExpanded] = useState(false)
    //임시 사진들
    const images = [
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i4_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i5_750.jpg',
    ]

    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const getImagesToShow = () => {
        if (expanded) {
            return images
        } else {
            return images.slice(0, 2)
        }
    }

    return (
        <div>
            <div className="fixed top-0 w-full">
                <ProductTopHeader />
            </div>

            <Thumnail />
            <ProductInformation />

            <div>
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
                {!expanded && images.length > 2 && (
                    <div>
                        <button
                            type="button"
                            onClick={toggleExpand}
                            className=" w-full h-12 bg-white text-base text-center "
                            style={{ boxShadow: '0px -30px 15px rgba(0, 0, 0, 0.1)' }}
                        >
                            상세정보 펼쳐보기
                        </button>
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
            </div>

            <div className="fixed bottom-0 w-full">
                <ProductBottomHeader />
            </div>
        </div>
    )
}

export default Product
