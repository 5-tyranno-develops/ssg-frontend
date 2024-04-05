import { GetAPI } from './FetchAPI'

async function GetProductDataAPI(productId: string) {
    const response = await GetAPI(`/api/v1/product/detail/${productId}`, undefined)

    return response
}

export { GetProductDataAPI }
