'use client'
import BackIcon from '@/images/back'
import { useRouter } from 'next/navigation'
export default function HeaderTitle({ title }: { title: string }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <div className="flex items-center h-10  border-b  border-gray-400">
            <span className="ml-4" onClick={back}>
                <BackIcon />
            </span>
            <p className="flex-grow font-bold text-lg text-center">{title}</p>
        </div>
    )
}
