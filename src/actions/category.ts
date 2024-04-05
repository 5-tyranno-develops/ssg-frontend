import { GetAPI } from './FetchAPI'

async function GetCategoryAPI() {
    const response = await GetAPI(`https://tyrannoback.com/api/v1/category/`, undefined)

    return response
}

export { GetCategoryAPI }
