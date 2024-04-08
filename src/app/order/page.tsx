'use client'
import { useEffect, useState } from 'react'
import { GetOptionDataAPI } from '@/actions/option'
import HeaderToBack from '@/components/ui/HeaderToBack'
import DeliveryAddress from '@/components/pages/order/DeliveryAddress'
import DeliveryRequest from '@/components/pages/order/DeliveryRequest'
import TypeOfPayment from '@/components/pages/order/TypeOfPayment'
import ExpectedPaymoney from '@/components/pages/order/ExpectedPaymoney'
import TermsOfService from '@/components/pages/order/TermsOfService'
import InformationOfOrderer from '@/components/pages/order/InformationOfOrderer'
import DeliveryItemList from '@/components/pages/order/DeliveryItemList'
import ButtonOfOrder from '@/components/ui/ButtonOfOrder'

export default function OrderPage() {
    return (
        <>
            <HeaderToBack title="결제하기" />
            <div className="bg-[#f5f5f5]">
                <DeliveryAddress />
                <DeliveryRequest />
                <TypeOfPayment />
                <ExpectedPaymoney />
                <TermsOfService />
                <InformationOfOrderer />
                <DeliveryItemList />
            </div>
        </>
    )
}
