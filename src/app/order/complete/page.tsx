"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import HeaderToHome from "@/components/ui/HeaderToHome";
import DetailsOfPaymoney from "@/components/pages/order/DetailsOfPaymoney";

export default function Complete(){

    const [toggle, setToggle] = useState(false);

    return(
        <>  
            <HeaderToHome title="주문완료"/>

            <div>
                <h1 className="text-center text-xl font-bold h-20 flex justify-center items-center">주문이 완료되었습니다.</h1>
            </div>
            <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]"/>
            <div className="m-3">
                <h2 className="font-bold text-md mb-3">받는 분 정보</h2>
                <p className="flex justify-between text-[14px]">
                    <span className="font-bold">
                        {"홍길동"} / {"010-0000-0000"}
                    </span>
                </p>
                <p className="text-[14px]">
                    {"[555555] 부산광역시 해운대구 센텀리더스마크 4층"}
                </p>
            </div>
            <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]"/>

            <div className="m-3">
                <div className="flex justify-between">
                    <span className="font-bold text-[18px]">
                        결제금액 : {"10,000"}원
                    </span>
                    <div
                    onClick={()=>{ setToggle(!toggle)} }
                    >
                    { toggle ? <FontAwesomeIcon icon={faAngleUp}/>  :  <FontAwesomeIcon icon={faAngleDown} />}
                    </div>
                </div>
                { toggle ?  <DetailsOfPaymoney /> : null }
            </div>
            <hr className="border-[#f5f5f5] h-[10px]" />
            <div className="m-3">
                <div className="flex justify-between font-bold text-[16px]">
                    <span>무통장입금</span>
                    <div >
                        <span>{"10,000"}원</span>
                        <span className="font-normal text-[#ff5452]">(입금대기)</span>
                    </div>
                </div>
                <div className="flex justify-between text-[14px] my-1">
                    <span className="text-[#666666]">{"농협중앙회"}</span>
                    <span className="text-[#222222]">{"00000000000000"}</span>
                </div>
                <div className="flex justify-between text-[14px] my-1">
                    <span className="text-[#666666]">입금 기한일</span>
                    <span className="text-[#222222]">{"2024년 03월 25일"}</span>
                </div>
                <div className="flex justify-between text-[14px] my-1">
                    <span className="text-[#666666]">입금자</span>
                    <span className="text-[#222222]">{"홍길동"}</span>
                </div>
                <div className="text-[13px] tracking-[-0.3px] font-normal">
                    <p >
                        ※ (주)에스에스지닷컴으로 발급되는 가상계좌로, 상품구매목적 이외의 입금은 불가합니다.
                    </p>
                    <p>
                        ※ 입금 기한일까지 미 입금 시 자동 주문취소
                    </p>
                </div>
            </div>
            <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]"/>
            <div className="m-3 ">
                <span className="font-bold">더 많은 혜택을 누리시려면</span>
                <Image 
                alt="유니버스 클럽 가입하기" 
                src={"https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/order/mnodr_universe_type_banner01.png&w=750"} 
                width={500}
                height={500}
                className="mx-auto mt-[12px]"
                />
            </div>

            <div className="m-3 mt-[30px] h-[44px] mb-32">
                <Link href={"#"}>
                    <button className="w-1/2 bg-black text-white text-[14px] px-2 h-full rounded-full">계속 쇼핑하기</button>
                </Link>
                <Link href={"#"}>
                    <button className="w-1/2 text-[14px] text-[#444444] border-[1px] px-2 h-full rounded-full border-[#e5e5e5]">주문상품 상세보기</button>
                </Link>
            </div>
        </>
    )
}
