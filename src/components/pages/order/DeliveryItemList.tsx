import Image from "next/image";

export default function DeliveryItemList(){
    return(
        <>
            <div className="bg-white rounded-xl m-4 mb-20">
                <div className="flex justify-between pt-[15px] px-[16px]">
                    <span className="text-lg font-semibold">택배배송</span>
                </div>
                <div className="flex px-[16px] py-[15px]">
                    <div className="flex justify-between">
                        <Image src={"https://sitem.ssgcdn.com/74/87/78/item/1000531788774_i1_140.jpg"} alt="한우" width={150} height={150} style={{width:"80px", height:"80px"}} />
                    </div>
                    <div className="flex flex-col justify-between text-xs mx-2">
                        <div>
                            <span>{"이마트몰"}</span>
                            <span className="text-[#666666]">{" 주식회사 태성축산유통"}</span>
                        </div>
                        <div>
                            <span className="font-extrabold mr-1">{"구미우"}</span>
                            <span>{"[냉장]1++No9등급 투뿔 한우 특수부위 구이용 300g (안창살or치마살or제비추리or토시살)"}</span>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <span className="line-through mr-2 text-[#666666]">{"59,700"}원</span>
                                <span className="font-extrabold">{"35,820"}원</span>
                            </div>
                            <span className="text-[#666666]">수량{"1"}개</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="flex px-[16px] py-[15px]">
                    <div className="flex justify-between">
                        <Image src={"https://sitem.ssgcdn.com/98/64/67/item/1000036676498_i1_140.jpg"} alt="치즈쁘띠" width={150} height={150} style={{width:"80px", height:"80px"}} />
                    </div>
                    <div className="flex flex-col justify-between text-xs mx-2">
                        <div>
                            <span>{"신세계몰"}</span>
                            <span className="text-[#666666]">{" 우리마을"}</span>
                        </div>
                        <div>
                            <span className="font-extrabold mr-1">{"참다올"}</span>
                            <span>{"수제로 만든 치즈쁘띠"}</span>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <span className="line-through mr-2 text-[#666666]">{"3,000"}원</span>
                                <span className="font-extrabold">{"2,940"}원</span>
                            </div>
                            <span className="text-[#666666]">수량{"1"}개</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}