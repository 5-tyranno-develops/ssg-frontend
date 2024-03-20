import Image from 'next/image'
import React from 'react'
import ProductBottomHeader from './_components/ProductBottomHeader'
import ProductDetail from './_components/ProductDetail'
import BackIcon from '@/images/back'
import CartIcon from '@/images/CartIcon.png'
import SearchIcon from '@/images/SearchIcon.png'
import Thumnail from './_components/Thumbnail'

function Product() {
    return (
        <div>
            <div className="fixed top-0 w-full flex items-center justify-between h-12 space-x-5 font-bold bg-white px-2">
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
            <Thumnail />

            <ProductDetail />

            <ProductBottomHeader />
        </div>
    )
}

export default Product
