'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function HeaderTitle({ title }: { title: string }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <div className="flex items-center h-10  border-b  border-gray-400">
            <div className="ml-4" onClick={back}>
                <div className=" relative  w-8  h-8">
                    <Image src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" fill />
                </div>
            </div>
            <p className="flex-grow font-bold text-lg text-center">{title}</p>
        </div>
    )
}
