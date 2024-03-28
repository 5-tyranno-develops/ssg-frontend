import { ThumDataType } from '@/types/ThumDataType'

export async function GetProductData(): Promise<ThumDataType> {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/102`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: ThumDataType = await res.json()
    return data
}
