import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Pagination } from 'swiper/modules'

function Thumnail() {
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
                <SwiperSlide>
                    <img
                        className="w-full h-full"
                        src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg"
                        alt="상품이미지1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full"
                        src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_750.jpg"
                        alt="상품이미지2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full"
                        src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_750.jpg"
                        alt="상품이미지3"
                    />
                </SwiperSlide>
            </Swiper>
            <div className=" flex justify-center items-center">
                <div className="swiper-pagination   text-white text-xs bg-gray-300 rounded-full px-4 py-1  bg-opacity-70 "></div>
            </div>
        </div>
    )
}
export default Thumnail
