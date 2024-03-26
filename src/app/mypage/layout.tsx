'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <>
            <div className="flex items-center py-2  border  border-gray-200">
                <span className="ml-4" onClick={back}>
                    <Image width="50" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" />
                </span>
                <p className="flex-grow  text-2xl text-center">MY SSG</p>
                <Image
                    width="38"
                    height="38"
                    src="https://img.icons8.com/windows/32/shopping-cart.png"
                    alt="shopping-cart"
                    className="mr-3 "
                />
                <Image
                    width="32"
                    height="32"
                    src="https://img.icons8.com/windows/32/home.png"
                    alt="home"
                    className="mr-5"
                />
            </div>
            {children}
        </>
    )
}
