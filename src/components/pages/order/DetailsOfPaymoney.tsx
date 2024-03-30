export default function DetailsOfPaymoney(){

    return(
        <>
            <p className="flex justify-between text-[14px] my-1">
                <span className="text-[#666666]">
                    주문금액
                </span>
                <span className="text-[#222222]">
                    {"10,000"}원
                </span>
            </p>
            <p className="flex justify-between text-[14px] my-1" >
                <span className="text-[#666666]">
                    상품할인
                </span>
                <span className="text-[#222222]">
                    -{"1,000"}원
                </span>
            </p>
            <p className="flex justify-between text-[14px] my-1" >
                <span className="text-[#666666]">
                    배송비
                </span>
                <span className="text-[#222222]">
                    +{"0"}원
                </span>
            </p>
        </>
    )
}