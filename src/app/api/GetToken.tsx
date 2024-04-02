'use client'
import { getSession } from 'next-auth/react'

interface tokenType {
    code: number
    exp: number
    iat: number
    isSuccess: boolean
    jti: string
    message: string
    result: string
}

const GetToken = async () => {
    const session = await getSession()
    console.log('session', session)
    const token = session?.user as tokenType
    return token.result
}

export { GetToken }
