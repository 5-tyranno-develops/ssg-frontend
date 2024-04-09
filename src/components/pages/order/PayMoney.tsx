'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import DetailsOfPaymoney from '@/components/pages/order/DetailsOfPaymoney'
import { useRecoilValue } from 'recoil'
import { CartMoneyAtom } from '@/state/CartCheckedListAtom'

export default function PayMoney() {
    const [toggle, setToggle] = useState(false)
    const data = useRecoilValue(CartMoneyAtom)
    const total = data.orderMoney + data.discountMoney
    return (
        <div className="m-3">
            <div
                className="flex justify-between"
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                <span className="font-bold text-[18px]">결제금액 : {total.toLocaleString()}원</span>
                <div>{toggle ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</div>
            </div>
            {toggle ? <DetailsOfPaymoney /> : null}
        </div>
    )
}
