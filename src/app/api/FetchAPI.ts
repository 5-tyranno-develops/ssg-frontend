import constraints from './constraints'

type Method = 'POST' | 'PUT' | 'DELETE' | 'PATCH'

async function fetchAPI(method: Method, url: string, body?: object, token?: string) {
    try {
        let headers: { [key: string]: string } = {
            'Content-Type': 'application/json',
        }

        // 토큰이 존재하는 경우에만 헤더에 추가합니다.
        if (token != null || token !== undefined) {
            token = token.replace(/(?:\\[rn]|[\r\n]+)+/g, '')
            headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(`${constraints.Server_Url}${url}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        })
        console.log('response', response)
        return response.json()
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}
// function GetAPI(url: string, params?: Record<string, string | number>) {
//     if (params != undefined) {
//         const urlParams = new URLSearchParams().toString()

//         url = `${url}?${urlParams}`
//     }
//     return fetchAPI('GET', url, undefined)
// }
function PostAPI(url: string, body?: object, token?: string) {
    console.log('body', body)
    // console.log(GetToken())
    return fetchAPI('POST', url, body, token)
}
function PutAPI(url: string, body: object, token?: string) {
    return fetchAPI('PUT', url, body, token)
}
function DeleteAPI(url: string, body?: object, token?: string) {
    return fetchAPI('DELETE', url, body, token)
}
function PatchAPI(url: string, body: object, token?: string) {
    return fetchAPI('PATCH', url, body, token)
}

export { PostAPI, PutAPI, DeleteAPI, PatchAPI }
