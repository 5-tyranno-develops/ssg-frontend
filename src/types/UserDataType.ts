export interface UserDataType {
    loginId: string
    password: string
    name: string
    deliveryBase: string
    deliveryDetail: string
    zipCode: number
    phoneNumber: string
    email: string
    gender: number
    birth: string
    shinsegaeMarketingAgree: number
    shinsegaeOptionAgree: number
    ssgMarketingAgree: number
}

export interface authCode {
    phoneNumber: string
    randomNumber: string
}
