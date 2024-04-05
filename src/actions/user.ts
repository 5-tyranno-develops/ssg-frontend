import { FindUserDataType } from '../types/FindUserDataType'
import { UserDataType, authCode } from '@/types/UserDataType'
import { PostAPI, PutAPI } from './FetchAPI'
import { ChangePasswordDataType } from '@/types/ChangePassword'

async function validLoginId(loginId: string) {
    const response = await PostAPI('/api/v1/auth/id-check', { loginId: loginId })
    return response
}
async function signupAPI(requestData: UserDataType) {
    const response = await PostAPI(`/api/v1/auth/signup`, requestData)
    return response
}
async function findIdAPI(authForm: FindUserDataType) {
    const response = await PostAPI('/api/v1/auth/find-id', authForm)
    return response
}

async function changePasswordAPI(idPW: ChangePasswordDataType) {
    const response = await PutAPI('/api/v1/auth/change_pw', idPW)
    return response
}
async function sendTextAPI(phoneNumber: string) {
    const response = await PostAPI('/api/v1/auth/text/send', { phoneNumber: phoneNumber })
    return response
}
async function checkAuthCodeAPI(verifyCode: authCode) {
    const response = await PostAPI('/api/v1/auth/text/verify', verifyCode)
    return response
}
export { signupAPI, validLoginId, findIdAPI, changePasswordAPI, sendTextAPI, checkAuthCodeAPI }
