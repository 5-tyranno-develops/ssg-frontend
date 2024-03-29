import { Inter } from 'next/font/google'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'
// import middleware from 'next-auth/middleware'

export { default } from 'next-auth/middleware'

// export function middleware(req: NextRequest) {
//     return NextResponse.redirect(new URL('/user/login', req.url))
// }
export const config = {
    matcher: ['/mypage'],
}

// export default withAuth({
//     callbacks: {
//         // jwt 콜백 함수로부터 반환 받은 token 객체의 userRole이 "admin" 인 경우, 접근 허용
//         authorized: ({ token }) => {
//             if (token) {
//                 return true
//             }
//             return false
//         },
//     },
// })

// const withAuth = (req: NextRequest, accessToken: boolean) => {
//     const url = req.nextUrl.clone()
//     const { pathname } = req.nextUrl

//     if (!accessToken) {
//         url.pathname = '/user/login'
//         url.search = `callbackUrl=${pathname}`
//         return NextResponse.redirect(url)
//     }
// }
// const withOutAuth = async (req: NextRequest, token: boolean) => {
//     const url = req.nextUrl.clone()
//     const { pathname } = req.nextUrl

//     if (token) {
//         url.pathname = '/mypage'
//         url.search = ''

//         return NextResponse.redirect(url)
//     }
// }
// const withAuthList = ['/mypage'] // 로그인 되어있을때 접근 가능한 pathname
// const withOutAuthList = ['user/login', '/signupintro'] // 로그인 되어있지 않을때 로그인,회원가입페이지 접근가능
// export async function middleware(req: NextRequest) {
//     const token = await getToken({ req, secret: process.env.SECRET })
//     const { pathname } = req.nextUrl
//     const isWithAuth = withAuthList.includes(pathname)
//     const isWithOutAuth = withOutAuthList.includes(pathname)
//     if (isWithAuth) return withAuth(req, !!token) // 로그인 여부에 따라 redirect 하는 함수
//     else if (isWithOutAuth) return withOutAuth(req, !!token)
// }
// // 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
// export const config = {
//     mathcher: [...withAuthList, ...withOutAuthList],
// }
