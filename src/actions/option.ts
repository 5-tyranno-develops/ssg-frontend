import { GetAPI } from './FetchAPI'

async function GetOptionDataAPI(productId: string) {
    const response = await GetAPI(`/api/v1/option/${productId}`)

    return response
}

export { GetOptionDataAPI }
