import constraints from '@/app/api/constraints'
import { NextAuthOptions } from 'next-auth'
import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                loginId: { label: 'LoginId', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.loginId || !credentials?.password) {
                    return null
                }

                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        loginId: credentials.loginId,
                        password: credentials.password,
                    }),
                })
                console.log('res', res)
                if (res.ok) {
                    const user = await res.json()
                    return user
                } else {
                    console.log('error')
                }
                // return res
            },
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID || '',
            clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
        }),
    ],
    callbacks: {
        async signIn({ user, profile }) {
            return true
        },

        async jwt({ token, user }) {
            return { ...token, ...user }
        },

        async session({ session, token }: { session: Session; token: JWT }) {
            session.user = token as any
            return session
        },

        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl
        },
    },
    pages: {
        signIn: '/user/login',
        error: '/',
    },
    secret: process.env.AUTH_SECRET,
}

export default NextAuth(options)
