// import HeartIcon from '@/images/svgs/HeartIcon';
// import LargeArrowIcon from '@/images/svgs/LargeArrowIcon';
// import ShareIcon from '@/images/svgs/ShareIcon';
// import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
// import TriangleIcon from '@/images/svgs/TriangleIcon';
// 아이콘 각 팀에서 쓰시는 걸로 수정하시고 필요할 것 같은거 있으면 불러주세여ㅕ
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import CategoryListModal from '@/components/modal/CategoryListModal';

export default function CategoryProductListToolBar() {
    // 카테고리 리스트 모달 상태 관리용 useState 선언
    const [isOpenModal, setIsOpenModal] = useState(false)

    // 뒤로가기 버튼 클릭용 useRouter 선언
    const router = useRouter()

    return (
        <div className="flex flex-row w-full h-[46px] bg-white items-center pl-3 pr-3 sticky top-0 z-10">
            <div className="items-center h-full">
                <Link
                    href="#"
                    className="h-full flex flex-wrap justify-center items-center"
                    onClick={(e) => {
                        e.preventDefault()
                        router.back()
                    }}
                >
                    <span className="w-[1px] h-[1px] -mx-[1px] -my-[1px] p-0 overflow-hidden text-nowrap absolute">
                        이전 페이지
                    </span>
                    <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">{/* <LargeArrowIcon /> */}</div>
                </Link>
            </div>
            <div className="pl-5 pr-3 items-center flex">
                <div className="inline-flex flex-wrap content-center">
                    <p className="text-gray-600 text-sm text-ellipsis">대/중/소분류</p>
                </div>
                <div className="w-3 h-3 inline-block flex-shrink-0 align-middle mx-1">{/* <SmallArrowIcon /> */}</div>
                <button
                    onClick={() => setIsOpenModal(!isOpenModal)}
                    className="inline-flex h-8 justify-center items-center"
                >
                    <p className="text-sm font-bold overflow-hidden text-ellipsis">
                        중/소/세부분류
                        <span className="w-[1px] h-[1px] overflow-hidden text-nowrap absolute p-0 -ms-[1px] -me-[1px]">
                            열기
                        </span>
                    </p>
                    <div className={`w-4 h-4 inline-block ${isOpenModal ? 'rotate-180' : ''}`}>
                        {/* <TriangleIcon /> */}
                    </div>
                </button>
            </div>
            <div className="flex-grow flex-shrink basis-0 justify-stretch self-stretch"></div>
            <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
                <button className="flex justify-center items-center">
                    <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">{/* <HeartIcon /> */}</div>
                </button>
            </div>
            <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
                <button className="flex">
                    <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">{/* <ShareIcon /> */}</div>
                </button>
            </div>
            {/* {isOpenModal && <CategoryListModal />} */}
        </div>
    )
}
