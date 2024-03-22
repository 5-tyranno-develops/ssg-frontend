'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from 'swiper/modules'
import { mainEventImageData } from '@/lib/mainEventImageData'
import Image from 'next/image'

export default function MainEventSection() {
    const [backgroundImage, setBackgroundImage] = useState(mainEventImageData[0].src)

    const handleSlideChange = (slide: any) => {
        const currentSlideIndex: number = slide.realIndex
        setBackgroundImage(mainEventImageData[currentSlideIndex].src)
    }

    return (
        <section className=" overflow-hidden pb-bottom ">
            <div
                className="absolute overflow-hidden top-0 right-0 bottom-[50px] left-0 bg-cover border-solid border-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    filter: 'blur(5px)',
                    transition: 'background-image 1s ease-in-out',
                }}
            ></div>
            <div className="absolute left-4 right-4 bottom-0 top-4 overflow-hidden block">
                <Swiper
                    className="relative w-full h-full"
                    slidesPerView={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    onSlideChange={handleSlideChange}
                >
                    {mainEventImageData.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className="absolute w-full h-full duration-150">
                                    <Image src={item.src} fill alt="aaa" />
                                </div>
                                <div className="flex justify-center items-end w-full h-full">
                                    <div className="flex flex-col items-center z-[1] max-w-[(100%-60px)] mb-[52px]">
                                        <h3 className="flex flex-col items-center text-2xl font-bold text-white">
                                            <span>{item.title1}</span>
                                            <span>{item.title2}</span>
                                        </h3>
                                        <div className="mt-[10px] text-sm font-semibold text-white">
                                            <span className="overflow-hidden text-ellipsis text-center">
                                                {item.subTitle}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
