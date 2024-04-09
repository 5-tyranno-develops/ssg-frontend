import ProductFooter from '@/components/ui/ProductFooter'
import ProductHeader from '@/components/ui/ProductHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProductHeader />
            {children}
        </>
    )
}
