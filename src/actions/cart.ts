import { options } from '@/app/api/auth/[...nextauth]/options'
import { cartCountDataType, clickDeleteDataType, isKeepDataType } from '@/types/CartDataType'
import { DeleteAPI, GetAPI, PostAPI, PutAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()
async function getCartListAPI() {
    const response = await GetAPI('/api/v1/cart', undefined, await token)
    return response.result
}
async function deleteCartIdAPI(cart_id: number) {
    const response = await DeleteAPI(`/api/v1/cart/${cart_id}`, { cart_id }, await token)
    return response.result
}
async function deleteClickAPI(cart_ids: clickDeleteDataType[]) {
    const response = await DeleteAPI('/api/v1/cart', cart_ids, await token)
    return response.result
}
async function countCartAPI(cartCount: cartCountDataType) {
    const response = await PutAPI('/api/v1/cart/count', cartCount, await token)
    return response.result
}
async function isKeepAPI(isKeep: isKeepDataType) {
    const response = await PutAPI('/api/v1/cart/keep', isKeep, await token)
    return response.result
}
async function getOptionsAPI(option_id: number) {
    const response = await GetAPI(`/api/v1/option/names/${option_id}`, { option_id }, await token)
    return response.result
}
export { getCartListAPI, deleteCartIdAPI, countCartAPI, isKeepAPI, deleteClickAPI, getOptionsAPI }
