'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// import CategoryListModal from '@/components/modal/CategoryListModal';

export default function CategoryProductListToolBar() {
    // 카테고리 리스트 모달 상태 관리용 useState 선언
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [category, setCategory] = useState<string[]>([])
    const [Lcategory, setLCategory] = useState<string[]>([])

    // 뒤로가기 버튼 클릭용 useRouter 선언
    const router = useRouter()
    const searchParams = useSearchParams()
    const largeId = searchParams.get('largeId')
    const middleId = searchParams.get('middleId')
    // console.log(largeId, middleId)
    useEffect(() => {
        const getCategory1 = async () => {
            const data1 = await fetch(`https://tyrannoback.com/api/v1/category/`)
            if (data1) {
                const response = await data1.json()
                setLCategory(response[parseInt(`${largeId}`) - 1])
            }
        }
        getCategory1()
    }, [])
    console.log(Lcategory)

    useEffect(() => {
        const getCategory = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/category/middle/${largeId}`)
            if (data) {
                const response = await data.json()
                setCategory(response[parseInt(`${middleId}`) - 1])
            }
        }
        getCategory()
    }, [largeId])
    // console.log(category)

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
                    <Image width="30" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" />
                </Link>
            </div>
            <div className="pl-5 pr-3 items-center flex ">
                <div className="inline-flex flex-wrap content-center">
                    <p className="text-gray-600 text-sm text-ellipsis">{Lcategory.largeName}</p>
                </div>
                <div className="w-4 h-4 relative  ">
                    <Image
                        src="https://img.icons8.com/sf-ultralight/25/000000/back.png"
                        alt="back"
                        style={{ transform: 'rotate(180deg)' }}
                        fill
                    />
                </div>
                <button
                    onClick={() => setIsOpenModal(!isOpenModal)}
                    className="inline-flex h-8 justify-center items-center"
                >
                    <p className="text-sm font-bold overflow-hidden text-ellipsis">{category.middleName}</p>
                    <div className={` relative w-3 h-3 inline-block ml-1 ${isOpenModal ? 'rotate-180' : ''}`}>
                        <Image src="https://img.icons8.com/material-sharp/24/give-way--v2.png" alt="더보기" fill />
                    </div>
                </button>
            </div>
            <div className="flex-grow flex-shrink basis-0 justify-stretch self-stretch"></div>
            <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
                <button className="flex justify-center items-center">
                    <div className=" relative w-6 h-6 inline-block flex-shrink-0 align-middle">
                        <Image src="https://img.icons8.com/windows/32/like--v1.png" alt="좋아요" fill />
                    </div>
                </button>
            </div>
            <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
                <button className="flex">
                    <div className="  relative w-6 h-6 inline-block flex-shrink-0 align-middle">
                        <Image
                            src="https://img.icons8.com/fluency-systems-regular/48/share--v1.png"
                            alt="공유하기"
                            fill
                        />
                    </div>
                </button>
            </div>
            {/* {isOpenModal && <CategoryListModal />} */}
        </div>
    )
}
