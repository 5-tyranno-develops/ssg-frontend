import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import { ProductDataType } from '@/types/ProductDetailDataType'
import { GetProductDataAPI } from '@/actions/product'

async function GetProductData(productId: string) {
    // const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`, { cache: 'no-store' })
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }
    // const data = await res.json()

    // return data.result
    const response = await GetProductDataAPI(productId)
    if (!response.isSuccess) {
        console.log('서버 오류')
    }
    
    return response.result
}

export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data: ProductDataType = await GetProductData(productId)

    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
        </main>
    )
}
