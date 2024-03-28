'use client'
import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    console.log('AuthProvider')
    return <SessionProvider>{children}</SessionProvider>
}
