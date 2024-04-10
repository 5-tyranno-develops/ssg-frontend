'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

function Thumbnail({ data }: { data: string[] }) {
   
    return (
        <div className="relative">
            {data && (
                <Swiper
                    loop={true}
                    pagination={{
                        type: 'fraction',
                        el: '.swiper-pagination',
                    }}
                    modules={[Pagination]}
                >
                    {data.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full h-full" src={imageUrl} alt={`상품이미지${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className="flex justify-center">
                <div className="swiper-pagination  absolute bottom-3 z-10 text-white text-xs bg-gray-300 rounded-full px-4 py-1  bg-opacity-70   "></div>
            </div>
        </div>
    )
}
export default Thumbnail
