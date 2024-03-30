'use client'

import { UserDataType } from '@/types/UserDataType'
import Server_Url from './constraints'
import { PostAPI } from './FetchAPI'
// async function signupAPI(requestData: UserDataType) {
//     try {
//         console.log('Request to server:', requestData)
//         const response = await fetch(`${constraints.Server_Url}/api/v1/auth/signup`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(requestData),
//         })

//         const data = await response.json()
//         console.log('Response from server:', data)
//         return data // Optionally return data if needed
//     } catch (error) {
//         console.error('Error:', error)
//         // Rethrow the error for handling in the caller function
//     }
// }

// async function validLoginId(loginId: string) {
//     try {
//         const response = await fetch(`${constraints.Server_Url}/api/v1/auth/id_check`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ loginId: loginId }),
//         })
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.error('Error:', error)
//     }
// }
async function validLoginId(loginId: string) {
    try {
        const response = await PostAPI('/api/v1/auth/id_check', { loginId: loginId })
        return response
    } catch (error) {
        console.error('Error:', error)
    }
}
async function signupAPI(requestData: UserDataType) {
    try {
        const response = PostAPI(`/api/v1/auth/signup`, requestData)
        return response
    } catch (error) {
        console.error('Error:', error)
    }
}
export { signupAPI, validLoginId }
