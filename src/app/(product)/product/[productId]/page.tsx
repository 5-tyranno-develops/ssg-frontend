import { ProductDataType } from '@/types/ProductDataType'

async function GetProductData(productId: string): Promise<ProductDataType> {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: ProductDataType = await res.json()
    return data
}
