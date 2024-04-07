import { AddaddressDataType } from '@/types/AddressDataType'
import { DeleteAPI, GetAPI, PostAPI, PutAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()

async function addDelivery(delivery: AddaddressDataType) {
    const response = await PostAPI('/api/v1/delivery', delivery, await token)
    return response.result
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
    return response.result
}
async function changeMainDelivery(deliveryId: number) {
    const response = await PutAPI('/api/v1/delivery/change-base', { deliveryId }, await token)
    return response.result
}

async function getModifyDelivery(deliveryId: number) {
    const response = await GetAPI(`/api/v1/delivery/modify-view/${deliveryId}`, undefined, await token)
    return response.result
}

async function modifyDelivery(delivery: AddaddressDataType) {
    const response = await PutAPI('/api/v1/delivery', delivery, await token)
    return response.result
}
async function getMainDeliveryAPI() {
    const response = await GetAPI('/api/v1/delivery/base', undefined, await token)
    return response.result
}

export {
    addDelivery,
    getDelivery,
    getMainDelivery,
    deleteDelivery,
    changeMainDelivery,
    getModifyDelivery,
    modifyDelivery,
    getMainDeliveryAPI,
}
