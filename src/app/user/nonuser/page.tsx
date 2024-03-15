import HeaderTitle from '@/components/ui/HeaderTitle'
import React from 'react'
import Link from 'next/link'

function Nonuser() {
    return (
        <div>
            <HeaderTitle title="비회원 조회하기" />

            <div>
                <form className="p-8 ">
                    <div>
                        <input type="text" placeholder="주문자명" className=" text-sm h-11 border w-full p-2" />

                        <input
                            type="text"
                            placeholder="휴대폰 번호( - 없이 입력)"
                            className=" text-sm  mt-3 h-11 border w-full p-2 "
                        />

                        <input
                            type="text"
                            placeholder="주문번호( - 없이 입력)"
                            className="text-sm  mt-3 h-11 border w-full p-2"
                        />

                        <div className=" flex mt-5 justify-center ">
                            <Link href="">
                                <button type="submit" className="  w-96 h-12  bg-white border border-black">
                                    취소
                                </button>
                            </Link>
                            <Link href="">
                                <button type="submit" className=" w-96 h-12 text-white bg-black">
                                    조회하기
                                </button>
                            </Link>
                        </div>
                        <div className="mt-6 text-gray-400">
                            <ul>
                                <li>- 상품 주문 시 입력한 주문자 정보로 조회가 가능합니다.</li>
                                <li>- 여행 상품은 [여행 예약 조회]에서 확인하실 수 있습니다.</li>
                                <li>- 주문번호를 모르시는 경우 고객센터(1577-3419)로 문의해주세요.</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default Nonuser
