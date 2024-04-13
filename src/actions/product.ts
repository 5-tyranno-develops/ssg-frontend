import { CartDataType } from '@/types/ProductDetailDataType'
import { GetAPI, PostAPI } from './FetchAPI'
import { GetToken } from './GetToken'
import { LIKEType } from '@/types/LikeType'

const token = GetToken()

async function GetProductDataAPI(productId: string) {
    const response = await GetAPI(
        `/api/v1/product/detail/${productId}`,
        {
            cache: 'force-cache',
        },
        undefined,
    )
    return response
}
// async function GetProductReviewAPI(productId: string) {
//     const response = await GetAPI(
//         `/api/v1/review/list/${productId}`,
//         {
//             cache: 'force-cache',
//         },
//         undefined,
//     )
//     return response
// }
async function cartClickAPI(data: CartDataType) {
    const response = await PostAPI('/api/v1/cart', data, await token)
    return response
}

async function getProductListAPI(productId: string) {
    const response = await GetAPI(`/api/v1/product/productInformation/${productId}`, undefined, await token)
    return response
}

async function LikeClickAPI(data: LIKEType) {
    const response = await PostAPI(`/api/v1/like`, data, await token)
    console.log('response is ', response)
    return response
}
async function getLikeAPI(productId: string) {
    const response = await GetAPI(
        `/api/v1/like/isLike/${productId}`,
        {
            cache: 'force-cache',
        },
        await token,
    )
    return response
}

async function recentProductAPI(productId: string) {
    const response = await PostAPI('/api/v1/recent/add', { productId: productId }, await token)

    return response
}

export { GetProductDataAPI, cartClickAPI, LikeClickAPI, getLikeAPI, getProductListAPI, recentProductAPI }
