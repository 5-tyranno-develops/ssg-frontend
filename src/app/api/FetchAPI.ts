'use client'
// import GetToken from './GetToken'
import constraints from './constraints'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

async function fetchAPI(method: Method, url: string, body?: object) {
    // const token = GetToken()
    try {
        const response = await fetch(`${constraints.Server_Url}${url}`, {
            method: `${method}`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(`${body}`),
        })
        return response.json()
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

function GetAPI(url: string, params?: Record<string, string | number>) {
    if (params != undefined) {
        const urlParams = new URLSearchParams().toString()

        url = `${url}?${urlParams}`
    }
    return fetchAPI('GET', url, undefined)
}
function PostAPI(url: string, body: object) {
    return fetchAPI('POST', url, body)
}
function PutAPI(url: string, body: object) {
    return fetchAPI('PUT', url, body)
}
function DeleteAPI(url: string) {
    return fetchAPI('DELETE', url)
}
function PatchAPI(url: string, body: object) {
    return fetchAPI('PATCH', url, body)
}

export { GetAPI, PostAPI, PutAPI, DeleteAPI, PatchAPI }