import { GetAPI } from './FetchAPI'

async function GetProductDataAPI(productId: string) {
    const response = await GetAPI(`/api/v1/product/detail/${productId}`, undefined)

    return response
}

// async function recentProductAPI(productId: string) {
//     const response = await PostAPI(`/api/v1/receent/${productId}`, undefined, await token)

//     return response
// }

export { GetProductDataAPI }
