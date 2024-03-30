import { NextResponse, type NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
// import middleware from 'next-auth/middleware'

export { default } from 'next-auth/middleware'

console.log('middleware ')
export async function middleware(request: NextRequest) {
    let cookie = request.cookies.get('next-auth.session-token')

    if (cookie === undefined) {
        if (request.nextUrl.pathname.startsWith('/mypage')) {
            const redirectUrl = new URL('/user/login', request.nextUrl.origin)
            return NextResponse.redirect(redirectUrl.toString())
        }
    } else {
        if (request.nextUrl.pathname.startsWith('/user/login')) {
            const redirectUrl = new URL('/mypage', request.nextUrl.origin)
            return NextResponse.redirect(redirectUrl.toString())
        }
    }
}
