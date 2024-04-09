'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function ProductHeader() {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <section>
            <div className="fixed top-0 w-full flex items-center justify-between h-12  font-bold bg-white px-2 z-[900]">
                <div className="items-center h-full">
                    <button className="h-full flex flex-wrap justify-center items-center  " onClick={back}>
                        <div className=" relative  w-8  h-8">
                            <Image src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" fill />
                        </div>
                    </button>
                </div>

                <div className="flex justify-center flex-grow space-x-5">
                    <p>상세</p>
                    <p>리뷰</p>
                    <p>Q&A</p>
                </div>
                <Image src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" width={26} height={26} />
                <Link href={'/cart'} className="m-2">
                    <Image
                        width={32}
                        height={32}
                        src="https://img.icons8.com/windows/32/shopping-cart.png"
                        alt="shopping-cart"
                    />
                </Link>
            </div>
        </section>
    )
}
export default ProductHeader
