import React from 'react'
import ProductBottomHeader from './ProductBottomHeader'
import ProductDetail from './ProductDetail'
import Thumnail from './Thumbnail'

function Product() {
    return (
        <div>
            <Thumnail />

            <ProductDetail />

            <ProductBottomHeader />
        </div>
    )
}

export default Product
