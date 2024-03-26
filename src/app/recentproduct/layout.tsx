'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <div className=" bg-gray-100 p-4">
            <div className="flex items-center ">
                <span className="ml-4" onClick={back}>
                    <Image width="50" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" />
                </span>
                <p className="flex-grow  text-2xl text-center font-bold">최근 본 상품</p>
                <p className="text-xl">편집</p>
                <Image width="30" height="30" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" />
            </div>
            {children}
        </div>
    )
}
