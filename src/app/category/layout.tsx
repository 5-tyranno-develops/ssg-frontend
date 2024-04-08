'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <section>
            <div>
                <Link href={'/'}>
                    <img
                        className="m-3 "
                        src={
                            'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006'
                        }
                        alt="ssg 로고"
                        width={86}
                        height={40}
                    />
                </Link>
                <hr className="h-[2px] bg-gradient-to-r from-red-400 from-0% via-orange-500 to-purple-600" />
            </div>
            {children}
        </section>
    )
}
