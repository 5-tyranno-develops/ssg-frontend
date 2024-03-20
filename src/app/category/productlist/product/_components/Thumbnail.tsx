'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

function Thumnail() {
    const productSThum = [
        { id: 1, src: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg', alt: '상품이미지1' },
        { id: 2, src: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_750.jpg', alt: '상품이미지2' },
        { id: 3, src: 'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_750.jpg', alt: '상품이미지3' },
    ]
    return (
        <div>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction',
                    el: '.swiper-pagination',
                }}
                modules={[Pagination]}
            >
                {productSThum.map((product) => (
                    <SwiperSlide key={product.id}>
                        <img className="w-full h-full" src={product.src} alt={product.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className=" flex justify-center items-center">
                <div className="swiper-pagination   text-white text-xs bg-gray-300 rounded-full px-4 py-1  bg-opacity-70 "></div>
            </div>
        </div>
    )
}
export default Thumnail
