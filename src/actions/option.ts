import { GetAPI } from './FetchAPI'

async function GetOptionDataAPI(productId: string) {
    const response = await GetAPI(`/api/v1/option/${productId}`)

    return response
}

async function GetOptionNameAPI(optionId: string) {
    const response = await GetAPI(`https://tyrannoback.com/api/v1/option/names/${optionId}`)
    return response
}
export { GetOptionDataAPI, GetOptionNameAPI }
