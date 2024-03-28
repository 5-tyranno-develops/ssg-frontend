import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import { ProductDataType } from '@/types/ProductDataType'

async function GetProductData(productId: string) {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`,{cache: 'force-cache'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: ProductDataType = await res.json()
    return data
}

export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data = await GetProductData(productId)

    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
        </main>
    )
}
