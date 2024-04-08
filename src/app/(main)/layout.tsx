import MainHeader from '@/components/ui/MainHeader'
import MainFooterNav from '@/components/pages/Main/MainFooterNav'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <MainHeader />

            {children}
            <MainFooterNav />
        </>
    )
}
