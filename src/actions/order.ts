import { GetAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()
async function getItemsOrderAPI(productId: number) {
    const response = await GetAPI(`/api/v1/product/productInformation/${productId}`, undefined, await token)
    return response.result
}

export { getItemsOrderAPI }
