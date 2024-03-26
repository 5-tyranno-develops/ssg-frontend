'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <div>
            {/* <div className="flex items-center ">
                <span onClick={back}>
                    <Image width="35" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" />
                </span>
                <p className="flex-grow  text-lg text-center font-bold">최근 본 상품</p>
                <EditButton />
            </div> */}
            {children}
        </div>
    )
}
