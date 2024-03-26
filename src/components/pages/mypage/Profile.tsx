'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

function Profile() {
    const MyPageAd = [
        { id: 1, src: 'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png', alt: '광고1' },
        { id: 2, src: 'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png', alt: '광고2' },
    ]

    return (
        <section className="p-4">
            <div>
                <h1 className="text-3xl">신세계 님</h1>
                <h2 className="font-extrabold text-2xl mt-4">SSG에서 즐거운 쇼핑 되세요!</h2>
            </div>

            <div className="flex text-center space-x-2 mt-4 mb-4">
                <div className="flex-1 border border-gray-300 rounded-lg p-3">
                    <p className=" text-lg mb-1">쿠폰</p>
                    <p className=" text-lg">0장</p>
                    <div className=" flex justify-center">
                        <p className="mt-3 py-0.5 w-20 h-7 bg-black rounded font-bold text-white  text-center">
                            쿠폰함
                        </p>
                    </div>
                </div>
                <div className="flex-1  border border-gray-300 rounded-lg p-3">
                    <p className="text-lg mb-1">SSG MONEY</p>
                    <p className=" text-lg">0원</p>
                    <div className="flex mt-3 space-x-1  justify-center items-center">
                        <p className=" py-0.5 w-20 h-7 bg-red-500 rounded font-bold text-white ">상품권</p>
                        <p className=" py-0.5 w-16 h-7 bg-black rounded font-bold text-white ">계좌</p>
                        <p className=" py-0.5 w-20 h-7 bg-gray-600 rounded font-bold text-white  ">포인트</p>
                    </div>
                </div>
                <div className=" flex-1 border border-gray-300 rounded-lg p-3">
                    <p className="text-lg mb-1">신세계포인트</p>
                    <p className=" text-lg">0p</p>
                </div>
            </div>
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
export default Profile
