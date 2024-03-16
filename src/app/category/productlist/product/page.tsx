//https://m.ssg.com/item/itemView.ssg?itemId=1000581553919&siteNo=6009&salestrNo=1004참고
'use client'
import ShareIcon from '@/images/ShareSvg'
import React, { useState } from 'react'

function Product() {
    const [expanded, setExpanded] = useState(false)
    //임시 사진들
    const images = [
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i4_750.jpg',
        'https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i5_750.jpg',
    ]

    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const getImagesToShow = () => {
        if (expanded) {
            return images
        } else {
            return images.slice(0, 2)
        }
    }

    return (
        <div>
            <div>
                <img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg" alt="상품이미지1"></img>
            </div>
            <div className="m-4 ">
                <div className=" flex items-center justify-between border-b-2  ">
                    <span className=" text-xs font-bold mb-2 ml-2">
                        <p>신세계백화점</p>
                    </span>

                    <button type="button" className=" mr-3 mb-1">
                        <ShareIcon />
                    </button>
                </div>
                <div>
                    <div className="mt-2 mb-1">
                        <a
                            href="https://m.ssg.com/disp/brandShop.ssg?brandId=2011010806&ctgId=6000204818&_mpop=new"
                            className=" text-sm font-bold"
                        >
                            살로몬
                        </a>
                    </div>
                    <span className=" text-base ">
                        살로몬 남녀공용 레이스플래그 WP 자켓 [블랙] S241001SJK12 / LC2393200
                    </span>

                    <div>
                        <div className="mt-4">
                            <del className="line-through text-bases text-gray-500">
                                <p>320,000원</p>
                            </del>
                        </div>
                        <div className="flex space-x-2 text-2xl font-bold">
                            <div>
                                <span className=" text-red-600 ">5%</span>
                            </div>
                            <div>
                                <span>304,000원</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">카드혜택가</dt>
                            <dd className=" w-10/12 font-semibold">288,800원~</dd>
                        </dl>
                    </div>
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">무이자 할부</dt>
                            <dd className=" w-10/12 ">
                                <span className="border-b border-black">카드사별 무이자 혜택</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">쇼핑혜택</dt>
                            <dd className=" w-10/12">
                                <p className=" font-extrabold">멤버십은 SSG 상품권 3% 할인</p>
                                <p>지금 보는 상품에 즉시 사용 가능</p>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">이벤트</dt>
                            <dd className=" w-10/12">
                                <p className="font-extrabold">멤버십 반품비용 무료!</p>
                                <span>2024.03.04 ~ 2024.03.31</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">배송정보</dt>
                            <dd className=" w-10/12 font-bold">택배배송</dd>
                        </dl>
                    </div>
                    <div>
                        <dl className="flex justify-between text-sm mb-5">
                            <dt className="text-gray-500">포장안내</dt>
                            <dd className=" w-10/12">
                                선물하기로 주문 시 신세계백화점 쇼핑백이 동봉되며, 전용 선물박스로 배송됩니다.{' '}
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className=" bg-gray-100 h-4"></div>

                <div>
                    {getImagesToShow().map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`상품이미지${index + 1}`}
                                data-src={image}
                                data-ll-status="loaded"
                            ></img>
                        </div>
                    ))}
                    {!expanded && images.length > 2 && (
                        <div>
                            <button
                                type="button"
                                onClick={toggleExpand}
                                className=" w-full h-12 bg-white text-base text-center"
                            >
                                상세정보 펼쳐보기
                            </button>
                        </div>
                    )}
                    {expanded && (
                        <div>
                            <button
                                type="button"
                                onClick={toggleExpand}
                                className=" w-full h-12 bg-white text-base text-center"
                            >
                                상세정보 접기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product
