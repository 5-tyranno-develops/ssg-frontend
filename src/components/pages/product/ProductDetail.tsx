'use client'
import React, { useState, useEffect } from 'react'
import { ProductDataType } from '@/types/ProductDataType'
import ShareIcon from '@/images/ShareSvg'
import Image from 'next/image'
import DetailIcon from '@/images/DetailIcon.png'

function ProductInformation() {
    const [expanded, setExpanded] = useState(false)

    const productsDetail: ProductDataType[] = [
        {
            productId: 1,
            vendor: '살로몬',
            productName: ' 살로몬 남녀공용 레이스플래그 WP 자켓 [블랙] S241001SJK12 / LC2393200',
            price: 320000,
            discount: 5,
            detailContent: `
            <div className="cdtl_detail_img">
            <img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_1200.jpg" alt="상품이미지1" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i2_1200.jpg" alt="상품이미지2" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i3_1200.jpg" alt="상품이미지3" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i4_1200.jpg" alt="상품이미지4" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i5_1200.jpg" alt="상품이미지5" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i6_1200.jpg" alt="상품이미지6" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i7_1200.jpg" alt="상품이미지7" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i8_1200.jpg" alt="상품이미지8" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i9_1200.jpg" alt="상품이미지9" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"><img src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i10_1200.jpg" alt="상품이미지10" onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=1200&amp;h=1200&amp;t=2ca8e91106bfe8f410b8440ea403e5acdc70084a'"></div>`,
        },
    ]

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    const getImagesToShow = () => {
        const images = productsDetail[0].detailContent.match(/src="([^"]+)"/g)?.map((match) => match.slice(5, -1)) || []
        if (expanded) {
            return images
        } else {
            return images.slice(0, 2)
        }
    }
    return (
        <div>
            {productsDetail.map((product) => (
                <div key={product.productId}>
                    <div className=" flex items-center justify-between border-b-2  ">
                        <span className=" text-xs font-bold mb-2 ml-2">
                            <p>신세계백화점</p>
                        </span>

                        <button type="button" className=" mr-3 mb-1">
                            <ShareIcon />
                        </button>
                    </div>
                    <div className="m-4 ">
                        <div className="mt-2 mb-1">
                            <a
                                href="https://m.ssg.com/disp/brandShop.ssg?brandId=2011010806&ctgId=6000204818&_mpop=new"
                                className=" text-sm font-bold"
                            >
                                {product.vendor}
                            </a>
                        </div>
                        <span className=" text-base ">{product.productName}</span>

                        <div>
                            <div className="mt-4">
                                <del className="line-through text-bases text-gray-500">
                                    <p>{product.price}원</p>
                                </del>
                            </div>
                            <div className="flex space-x-2 text-2xl font-bold">
                                <div>
                                    <span className=" text-red-600 ">{product.discount}%</span>
                                </div>
                                <div>
                                    <span>{product.price * (1 - product.discount / 100)}원</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500  min-w-20">카드혜택가</dt>
                                    <dd className=" w-10/12 font-semibold">288,800원~</dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500 min-w-20">무이자 할부</dt>
                                    <dd className=" w-10/12 ">
                                        <span className="border-b border-black">카드사별 무이자 혜택</span>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500 min-w-20">쇼핑혜택</dt>
                                    <dd className=" w-10/12">
                                        <p className=" font-extrabold">멤버십은 SSG 상품권 3% 할인</p>
                                        <p>지금 보는 상품에 즉시 사용 가능</p>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500 min-w-20">이벤트</dt>
                                    <dd className=" w-10/12">
                                        <p className="font-extrabold">멤버십 반품비용 무료!</p>
                                        <span>2024.03.04 ~ 2024.03.31</span>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500 min-w-20">배송정보</dt>
                                    <dd className=" w-10/12 font-bold">택배배송</dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="flex justify-between text-sm mb-5">
                                    <dt className="text-gray-500 min-w-20">포장안내</dt>
                                    <dd className=" w-10/12">
                                        선물하기로 주문 시 신세계백화점 쇼핑백이 동봉되며, 전용 선물박스로 배송됩니다.{' '}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-4 mb-2"></div>

                    {getImagesToShow().map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`상품이미지${index + 1}`} className="w-full" />{' '}
                        </div>
                    ))}

                    {!expanded && getImagesToShow().length > 1 && (
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={toggleExpand}
                                className=" w-full h-32 bg-white text-base text-center flex justify-center items-center"
                                style={{ boxShadow: '0px -100px 30px rgba(255,255,255,0.7)' }}
                            >
                                상세정보 펼쳐보기
                                <Image src={DetailIcon} alt="장바구니아이콘" className="  w-6 h-8"></Image>
                            </button>
                        </div>
                    )}
                    {expanded && (
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={toggleExpand}
                                className="w-full h-32 bg-white text-base text-center flex justify-center items-center"
                            >
                                상세정보 접기{' '}
                                <Image
                                    src={DetailIcon}
                                    alt="장바구니아이콘"
                                    className="w-6 h-8  transform rotate-180"
                                ></Image>
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
export default ProductInformation
