import { GetAPI } from './FetchAPI'
import { GetToken } from './GetToken'
const token = GetToken()
async function getMyInfo() {
    const response = await GetAPI('/api/v1/users', undefined, await token)
    return response.result
}
export { getMyInfo }
