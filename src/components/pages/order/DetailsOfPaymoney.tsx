'use client'

import { CartMoneyAtom } from '@/state/CartCheckedListAtom'
import { useRecoilValue } from 'recoil'

export default function DetailsOfPaymoney() {
    const data = useRecoilValue(CartMoneyAtom)
    const total = data.orderMoney + data.discountMoney
    return (
        <>
            <p className="flex justify-between text-[14px] my-1">
                <span className="text-[#666666]">주문금액</span>
                <span className="text-[#222222]">{(total - 3000).toLocaleString()}원</span>
            </p>
            <p className="flex justify-between text-[14px] my-1">
                <span className="text-[#666666]">상품할인</span>
                <span className="text-[#222222]">{data.discountMoney}원</span>
            </p>
            <p className="flex justify-between text-[14px] my-1">
                <span className="text-[#666666]">배송비</span>
                <span className="text-[#222222]">+{'3,000'}원</span>
            </p>
        </>
    )
}
