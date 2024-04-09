'use client'
import Image from 'next/image'
import HeartIcon from '@/images/HeartIcon.png'
import RedHeartIcon from '@/images/RedHeartIcon.png'
import { useState } from 'react'
import ProductOptions from '../pages/product/ProductOptions'
import { useParams } from 'next/navigation'
import { ProductDataType } from '@/types/ProductDetailDataType'

function ProductFooter({ data }: { data: ProductDataType }) {
    const params = useParams<{ productId: string }>()
    // console.log(params.productId)
    const [isModal, setIsModal] = useState<boolean>(false)
    const [like, setLike] = useState<number>(99)
    const handleLike = (islike: number) => {
        setLike(islike)
    }
    console.log(like)
    return (
        <section>
            <div className="fixed bottom-0 w-screen z-[10] ">
                <ul className="flex items-center h-12 w-full">
                    {like === 99 ? (
                        <button
                            onClick={() => handleLike(11)}
                            className=" flex justify-center items-center w-14 bg-white h-12"
                        >
                            <Image src={HeartIcon} alt="안좋아요"></Image>
                        </button>
                    ) : (
                        <button
                            onClick={() => handleLike(99)}
                            className=" flex justify-center items-center w-14 bg-white h-12"
                        >
                            <Image src={RedHeartIcon} alt="좋아요" />
                        </button>
                    )}
                    <button
                        className="flex justify-center items-center font-semibold text-white bg-red-500 flex-grow h-12"
                        onClick={() => setIsModal(true)}
                    >
                        구매하기
                    </button>
                </ul>
            </div>

            <ProductOptions isModal={isModal} setIsModal={setIsModal} productId={params.productId} productData={data} />
        </section>
    )
}
export default ProductFooter
