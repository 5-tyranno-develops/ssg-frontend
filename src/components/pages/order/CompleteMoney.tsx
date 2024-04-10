'use client'

import { CartMoneyAtom } from '@/state/CartCheckedListAtom'
import { useRecoilValue } from 'recoil'

export default function CompleteMoney() {
    const data = useRecoilValue(CartMoneyAtom)
    const total = data.orderMoney + data.discountMoney

    return (
        <div>
            <span>{total.toLocaleString()}원</span>
            <span className="font-normal text-[#ff5452]">(입금대기)</span>
        </div>
    )
}
