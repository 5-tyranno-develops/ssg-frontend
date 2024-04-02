'use client'
import { getSession } from 'next-auth/react'

const GetToken = async () => {
    const session = await getSession()
    const token = session?.user
    return token?.result
}

export { GetToken }
