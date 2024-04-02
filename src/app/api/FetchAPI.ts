import { options } from '@/app/api/auth/[...nextauth]/options'
import constraints from './constraints'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

async function fetchAPI(method: Method, url: string, body?: object, token?: string) {
    try {
        let headers: { [key: string]: string } = {
            'Content-Type': 'application/json',
        }
        if (token != null || token !== undefined) {
            token = token.replace(/(?:\\[rn]|[\r\n]+)+/g, '')
            headers['Authorization'] = `Bearer ${token}`
        }

        let options: RequestInit = {
            method: method,
            headers: headers,
        }

        // GET 메서드가 아닌 경우에만 body를 추가합니다.
        if (method !== 'GET' && body !== undefined) {
            options.body = JSON.stringify(body)
        }

        const response = await fetch(`${constraints.Server_Url}${url}`, options)
        console.log('response', response)
        return response.json()
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}
function GetAPI(url: string, params?: object, token?: string) {
    if (params != undefined) {
        const urlParams = new URLSearchParams().toString()

        url = `${url}?${urlParams}`
    }
    return fetchAPI('GET', url, undefined, token)
}
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

export { GetAPI, PostAPI, PutAPI, DeleteAPI, PatchAPI }
