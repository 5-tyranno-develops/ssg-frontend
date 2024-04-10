'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'

import ShareIcon from '@/images/ShareSvg'
import Image from 'next/image'
import DetailIcon from '@/images/DetailIcon.png'
import { ProductDataType } from '@/types/ProductDetailDataType'

function ProductInformation({ data }: { data: ProductDataType }) {
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const params = useParams<{ productId: string }>()
    const kakaoShare = () => {
        const { Kakao, location } = window;
        Kakao.Share.sendCustom({
            templateId: 106857,
            templateArgs: {
                PRODUCT_IMG: data.imageUrl[0],
                PRODUCT_NAME: data.productName,
                PRODUCT_PRICE: data.price,
                PRODUCT_DISCOUNT: data.discount,
                PRODUCT_DISPRICE: data.price * (1 - data.discount / 100),
               PRODUCT_VENDER: data.vendor ? data.vendor.vendorName : " " , //null
                PRODUCT_PATH: `product/${params.productId}`
            },
          });
        
    };

    return (
        <div>
            {data && (
                <div>
                    <div className=" flex items-center justify-between border-b-2 my-4 ">
                        <span className=" text-xs font-bold mb-2 ml-2">
                            <p>신세계백화점</p>
                        </span>

                        <button
                        onClick={()=>kakaoShare()} className="flex">
                            <div className="  relative w-6 h-6 inline-block flex-shrink-0 align-middle mr-3">
                                <Image
                                    src="https://img.icons8.com/fluency-systems-regular/48/share--v1.png"
                                    alt="공유하기"
                                    fill
                                />
                            </div>
                        </button>
                    </div>
                    <div className="m-4 ">
                        <div className="mt-2 mb-1 font-bold"> {data.vendor && data.vendor.vendorName}</div>
                        <span className=" text-base ">{data.productName}</span>

                        <div>
                            <div className="mt-4">
                                <del className="line-through text-bases text-gray-500">
                                    <p>{data.price.toLocaleString()}원</p>
                                </del>
                            </div>
                            <div className="flex space-x-2 text-2xl font-bold">
                                <div>
                                    <span className=" text-red-600 ">{data.discount}%</span>
                                </div>
                                <div>
                                    <span>{(data.price * (1 - data.discount / 100)).toLocaleString()}원</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
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
                                        <span>2024.04.01 ~ 2024.04.30</span>
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
                    <div className=" bg-gray-100 h-4 mb-5 "></div>

                    {!expanded && (
                        <div className=" ">
                            <div className="flex  justify-center ">
                                <Image src={data.imageUrl[0]} alt="상품미리보기" width={700} height={500} />
                            </div>
                            <div
                                className="mt-4 border-t-2 -3xl"
                                style={{ boxShadow: '0px -8px 10px 0px rgba(0, 0, 0, 0.1)' }}
                            >
                                <button
                                    type="button"
                                    onClick={toggleExpand}
                                    className="w-full h-12 bg-white text-base text-center flex justify-center items-center"
                                >
                                    상세정보 펼쳐보기
                                    <Image src={DetailIcon} alt="더보기" className="  w-6 h-8" />
                                </button>
                            </div>
                        </div>
                    )}
                    {expanded && (
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: data.detailContent }} />
                            <div className="flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={toggleExpand}
                                    className="w-fulll h-32 bg-white text-base text-center flex justify-center items-center"
                                >
                                    상세정보 접기
                                    <Image
                                        src={DetailIcon}
                                        alt="더보기"
                                        className="w-6 h-8  transform rotate-180"
                                    ></Image>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default ProductInformation
