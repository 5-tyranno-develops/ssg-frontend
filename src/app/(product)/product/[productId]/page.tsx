import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import { ProductDataType } from '@/types/ProductDetailDataType'

async function GetProductData(productId: string) {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return data.result
}

export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data: ProductDataType = await GetProductData(productId)
    console.log(data)

    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
        </main>
    )
}
