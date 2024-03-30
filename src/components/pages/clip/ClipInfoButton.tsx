import { useState } from 'react'
import Tooltip from '../../ui/Tooltip'

export default function ClipInfoButton() {
    const [isClickInfo, setIsClickInfo] = useState(false)
    return (
        <button className="relative flex flex-col gap-1 justify-center" onClick={() => setIsClickInfo(!isClickInfo)}>
            <div className="sticky top-0 flex flex-row gap-1 items-center">
                상품 안내
                <div className="rounded-full w-[14px] h-[14px] border border-zinc-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 64 64"
                    >
                        <g>
                            <path
                                fill="#A1AAA1"
                                d="M 25.5,7.5 C 34.3239,5.43992 41.1572,8.10658 46,15.5C 46.8538,19.6251 46.5204,23.6251 45,27.5C 42,30.5 39,33.5 36,36.5C 34.9562,38.7148 34.2895,41.0481 34,43.5C 32,44.8333 30,44.8333 28,43.5C 27.5082,38.6397 28.8416,34.3063 32,30.5C 42.0731,23.89 41.9064,17.89 31.5,12.5C 29.4595,13.2357 27.4595,14.0691 25.5,15C 24.2921,17.2503 22.9587,19.417 21.5,21.5C 18.5604,22.8589 16.8937,21.8589 16.5,18.5C 17.7084,13.2982 20.7084,9.63158 25.5,7.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                fill="#A1AAA1"
                                d="M 28.5,48.5 C 34.1581,47.6794 35.8248,49.846 33.5,55C 27.741,56.1387 26.0744,53.972 28.5,48.5 Z"
                            />
                        </g>
                    </svg>
                </div>
            </div>
            {isClickInfo && (
                <Tooltip
                    className="absolute top-[100%]  w-52 bg-[rgba(0,0,0,0.9)] text-white col-start-1 col-end-3"
                    text="좋아요에 담긴 상품은 최대 5년 보관합니다."
                />
            )}
        </button>
    )
}
