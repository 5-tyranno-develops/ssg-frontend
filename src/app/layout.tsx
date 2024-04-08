import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/Footer'
import { RecoilRoot } from 'recoil'
import RecoilProvider from '@/providers/RecoilProvider'

import AuthProvider from '@/providers/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '믿고 사는 즐거움 SSG.COM',
    description: '믿고 사는 즐거움 SSG.COM',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <AuthProvider>
            <html lang="ko">
                <body className={inter.className}>
                    <RecoilProvider>
                        {children} <Footer />
                    </RecoilProvider>
                </body>
            </html>
        </AuthProvider>
    )
}
