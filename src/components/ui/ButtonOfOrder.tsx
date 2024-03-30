import Link from "next/link";

export default function ButtonOfOrder({amount}:{amount : number}){

    const addCommas = (number :number) => {
        let result = '';
        let numberToString = number.toString();
        var len = numberToString.length;
        for (var i = len - 1; i >= 0; i--) {
            result = numberToString.charAt(i) + result;
            if ((len - i) % 3 === 0 && i !== 0) {
                result = ',' + result;
            }
        }
        return result;
    }

    return(
        <>
            <Link href={"/order/complete"}>
                <div className="bg-[#ff5452] p-4 sticky right-0 left-0 bottom-0 z-10 text-center">
                    <span className="text-white font-normal">
                        <span className="font-bold">{addCommas(amount)}원</span> 결제하기
                    </span>
                </div>
            </Link>
        </>
    )
}