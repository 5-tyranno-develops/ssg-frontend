import Thumbnail from '@/components/pages/product/Thumbnail'
import ProductDetail from '@/components/pages/product/ProductDetail'
import ProductOptions from '@/components/pages/product/ProductOptions'

import { ProductDataType } from '@/types/ProductDetailDataType'
import { OptionStringDataType } from '@/types/OptionStringDataType'

async function GetProductData(productId: string) {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`, { cache: 'force-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: ProductDataType = await res.json()

    return data
}

async function GetOptionStringData(productId: string) {
    const res = await fetch(`https://tyrannoback.com/api/v1/option/string/${productId}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const option: OptionStringDataType = await res.json()
    return option
}

export default async function Page({ params }: { params: { productId: string } }) {
    const productId: string = params.productId
    const data = await GetProductData(productId)
    const option = await GetOptionStringData(productId)

    const apple = option.result
    console.log(apple)
    return (
        <main>
            <Thumbnail data={data.imageUrl} />
            <ProductDetail data={data} />
            <ProductOptions option={apple} />
        </main>
    )
}
