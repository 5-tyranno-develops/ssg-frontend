import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import { ProductDataType } from '@/types/ProductDetailDataType'
import { GetProductDataAPI } from '@/actions/product'
import ProductFooter from '@/components/ui/ProductFooter'
import ProductReview from '@/components/pages/review/ProductReview'

async function GetProductData(productId: string) {
    const response = await GetProductDataAPI(productId)
    console.log(response)
    if (!response.isSuccess) {
        console.log('서버 오류')
    }

    return response.result
}

export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data: ProductDataType = await GetProductData(productId)
    console.log(data)
    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
            <ProductFooter data={data} />
            <ProductReview />
        </main>
    )
}
