import { AddaddressDataType } from '@/types/AddressDataType'
import { DeleteAPI, GetAPI, PostAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()

async function addDelivery(delivery: AddaddressDataType) {
    const response = await PostAPI('/api/v1/delivery', delivery, await token)
    return response
}
async function getDelivery() {
    const response = await GetAPI('/api/v1/delivery/list', undefined, await token)
    return response.result
}
async function getMainDelivery() {
    const response = await GetAPI('/api/v1/delivery/base-name', undefined, await token)
    return response.result
}
async function deleteDelivery(deliveryId: number) {
    const response = await DeleteAPI(`/api/v1/delivery/${deliveryId}`, undefined, await token)
    return response
}

export { addDelivery, getDelivery, getMainDelivery, deleteDelivery }
