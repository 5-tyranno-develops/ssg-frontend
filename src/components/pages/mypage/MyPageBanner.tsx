'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

function MyPageBanner() {
    const MyPageAd = [
        { id: 1, src: 'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png', alt: '광고1' },
        { id: 2, src: 'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png', alt: '광고2' },
    ]

    return (
        <section className="p-4">
            <div className="relative ">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 3500 }}
                    pagination={{
                        type: 'fraction',
                        el: '.swiper-pagination',
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {MyPageAd.map((ad) => (
                        <SwiperSlide key={ad.id}>
                            <img className="w-full h-full rounded-lg" src={ad.src} alt={ad.alt}></img>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute bottom-0 right-0 z-10 text-white text-sm bg-black  px-3 py-1  bg-opacity-80  rounded ">
                    <div className="swiper-pagination  "></div>
                </div>
            </div>
        </section>
    )
}

export default MyPageBanner
