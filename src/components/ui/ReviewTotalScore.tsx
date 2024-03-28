import React from 'react'

export default function ReviewTotalScore() {
    return (
        <div className="w-full h-[105px] px-4 pt-[25px] pb-[34px] flex items-center justify-center">
            <span className="text-[44px] text-ellipsis line-clamp-2 font-bold pr-5">4.9</span>
            <div className="w-[110px] h-[44.8px] flex flex-col justify-center">
                <span className="relative w-full h-[22px]">
                    <span className="absolute w-[75%] h-[22px] bg-sp_product bg-[position:0px_-198px] bg-[length:524px_479px] inline-block"></span>
                    <span className="absolute top-0 left-0 w-[110px] h-[22px] bg-sp_product bg-[position:-113px_-162px] bg-[length:524px_479px] inline-block"></span>
                </span>
                <span className="text-[14px] text-left mt-[2px]">335166건 리뷰</span>
            </div>
        </div>
    )
}
