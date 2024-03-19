import Image from 'next/image'
import React from 'react'
import ProductBottomHeader from './_components/ProductBottomHeader'
import ProductInformation from './_components/ProductInformation'
import ProductDetail from './_components/ProductDetail'
import BackIcon from '@/images/back'
import CartIcon from '@/images/CartIcon.png'
import SearchIcon from '@/images/SearchIcon.png'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

function Product() {
    return (
        <div>
            <div className="fixed top-0 w-full flex items-center h-12 space-x-5 font-bold bg-white">
                <span className="ml-2">
                    <BackIcon />
                </span>

                <p>상세</p>
                <p>리뷰</p>
                <p>Q&A</p>

                <Image src={CartIcon} alt="장바구니아이콘"></Image>

                <Image src={SearchIcon} alt="검색아이콘"></Image>
            </div>

            <ProductInformation />
            <ProductDetail />
            <ProductBottomHeader />
        </div>
    )
}

export default Product
