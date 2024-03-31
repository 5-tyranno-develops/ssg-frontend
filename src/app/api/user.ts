'use client'

import { UserDataType } from '@/types/UserDataType'
import { PostAPI } from './FetchAPI'

async function validLoginId(loginId: string) {
    const response = await PostAPI('/api/v1/auth/id_check', { loginId: loginId })
    return response
}
async function signupAPI(requestData: UserDataType) {
    const response = PostAPI(`/api/v1/auth/signup`, requestData)
    return response
}

export { signupAPI, validLoginId }
