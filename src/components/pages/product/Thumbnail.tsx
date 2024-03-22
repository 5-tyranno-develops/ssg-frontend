'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { ThumDataType } from '@/types/ThumDataType'
import { useEffect, useState } from 'react'

export async function GetProductData(): Promise<ThumDataType> {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/101`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: ThumDataType = await res.json()
    return data
}

function Thumnail() {
    const [productsThum, setProductSThum] = useState<ThumDataType | null>(null) 

    useEffect(() => {
        ;(async () => {
            try {
                const productData = await GetProductData()
                setProductSThum(productData)
            } catch (error) {
                console.error('Error fetching product data:', error)
            }
        })()
    }, [])

    return (
        <div>
            {productsThum && (
                <Swiper
                    loop={true}
                    pagination={{
                        type: 'fraction',
                        el: '.swiper-pagination',
                    }}
                    modules={[Pagination]}
                >
                    {productsThum.imageUrl.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full h-full" src={imageUrl} alt={`상품이미지${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className=" flex justify-center items-center">
                <div className="swiper-pagination   text-white text-xs bg-gray-300 rounded-full px-4 py-1  bg-opacity-70 "></div>
            </div>
        </div>
    )
}
export default Thumnail
