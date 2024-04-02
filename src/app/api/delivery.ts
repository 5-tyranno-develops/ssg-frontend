import { AddaddressDataType } from '@/types/AddressDataType'
import { PostAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()

async function addDelivery(delivery: AddaddressDataType) {
    const response = await PostAPI('/api/v1/delivery', delivery, await token)
    return response
}

export { addDelivery }
