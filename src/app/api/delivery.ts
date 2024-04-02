import { AddaddressDataType } from '@/types/AddressDataType'
import { GetAPI, PostAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()

async function addDelivery(delivery: AddaddressDataType) {
    const response = await PostAPI('/api/v1/delivery', delivery, await token)
    return response
}
async function getDelivery() {
    const response = await GetAPI('/api/v1/delivery/list', undefined, await token)
    console.log('response', response.result)
    return response.result
}

export { addDelivery, getDelivery }
