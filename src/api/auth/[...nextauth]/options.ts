// import { NextAuthOptions } from 'next-auth'
// import NextAuth, { Session } from 'next-auth'
// import { JWT } from 'next-auth/jwt'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import KakaoProvider from 'next-auth/providers/kakao'

// export const options: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 loginId: { label: 'LoginId', type: 'text', placeholder: 'SSG' },
//                 password: { label: 'Password', type: 'password' },
//             },
//             async authorize(credentials, req) {
//                 if (!credentials?.loginId || !credentials?.password) {
//                     return null
//                 }

//                 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         loginId: credentials.loginId,
//                         password: credentials.password,
//                     }),
//                 })
//                 if (res.ok) {
//                     const user = await res.json()
//                     console.log(user)

//                     return user
//                 }

//                 return null
//             },
//         }),
//     ],
//     callbacks: {
//         async signIn({ user, profile }) {
//             if (profile) {
//                 console.log(profile)
//                 // 회원인지 아닌지 확인
//                 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         oauthId: user.id,
//                     }),
//                 })
//                 console.log(res)
//                 if (res.ok) {
//                     const user = await res.json()
//                     console.log('ssg user', user)
//                     // this.session.update({user})
//                     // 회원정보를 받아서 세션에 저장
//                 }

//                 console.log('not ssg user', user)
//                 // 회원이 아니면 회원가입 페이지로 이동

//                 //
//             }

//             return true
//         },

//         async jwt({ token, user }) {
//             return { ...token, ...user }
//         },

//         async session({ session, token }: { session: Session; token: JWT }) {
//             session.user = token as any
//             return session
//         },

//         async redirect({ url, baseUrl }) {
//             return url.startsWith(baseUrl) ? url : baseUrl
//         },
//     },
//     pages: {
//         signIn: '/user/login',
//         error: '/user/login',
//     },
//     secret: process.env.AUTH_SECRET,
// }

// export default NextAuth(options)
