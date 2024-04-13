'use client'
import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import { ProductDataType } from '@/types/ProductDetailDataType'
import ProductFooter from '@/components/ui/ProductFooter'
import ProductReview from '@/components/pages/review/ProductReview'
import { GetProductDataAPI, recentProductAPI } from '@/actions/product'
import { useEffect } from 'react'

async function GetProductData(productId: string) {
    const response = await GetProductDataAPI(productId)
    if (!response.isSuccess) {
        console.log('서버 오류')
    }

    return response.result
}
// async function GetProductReview(productId: string) {
//     const response = await GetProductReviewAPI(productId)
//     // console.log(response)
//     if (!response.isSuccess) {
//         console.log('서버 오류')
//     }

//     return response.result
// }
async function fetchRecentProduct(productId: string) {
    const response = await recentProductAPI(productId)
    console.log(response)
    return response
}
export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data: ProductDataType = await GetProductData(productId)
    await fetchRecentProduct(productId)

    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
            <ProductFooter data={data} />
            <ProductReview />
        </main>
    )
}
