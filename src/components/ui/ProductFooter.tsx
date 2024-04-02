'use client'
import Image from 'next/image'
import HeartIcon from '@/images/HeartIcon.png'
import { useState } from 'react'
import ProductOptions from '../pages/product/ProductOptions'
import { useParams } from 'next/navigation'

function ProductFooter() {
    const params = useParams<{ productId: string }>()
    console.log(params.productId)
    const [isModal, setIsModal] = useState<boolean>(false)

    return (
        <section>
            <div className="fixed bottom-0 w-screen z-[10] ">
                <ul className="flex items-center h-12">
                    <li className=" flex justify-center items-center w-14 bg-white h-12">
                        <Image src={HeartIcon} alt="하트아이콘"></Image>
                    </li>
                    <button
                        className="flex justify-center items-center font-semibold text-white bg-red-500 flex-grow h-12"
                        onClick={() => setIsModal(true)}
                    >
                        구매하기
                    </button>
                </ul>
            </div>

            <ProductOptions isModal={isModal} setIsModal={setIsModal} productId={params.productId} />
        </section>
    )
}
export default ProductFooter
