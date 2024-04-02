'use client'
import { useState } from 'react'
import ChangeOrdererInformModal from '@/components/modal/ChangeOrdererInformModal'

export default function InformationOfOrderer() {
    const [changeOrdererInformModalOpen, setChangeOrdererInformModalOpen] = useState(false)

    return (
        <>
            <div className="bg-white m-4 p-4 rounded-xl tracking-[-0.3px]">
                <div className="flex justify-between mb-2">
                    <span className="text-lg font-bold">주문자 정보</span>
                    <button
                        className="border-[1px] px-2 text-xs border-[#d8d8d8]"
                        onClick={() => {
                            setChangeOrdererInformModalOpen(true)
                        }}
                    >
                        변경
                    </button>
                    <ChangeOrdererInformModal
                        modalOpen={changeOrdererInformModalOpen}
                        setModalOpen={setChangeOrdererInformModalOpen}
                    />
                </div>
                <div className="bg-white rounded-xl p-[10px 16px 20px 16px] ">
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>주문자명</span>
                        </dt>
                        <dd>
                            <span>{'홍길동'}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>연락처</span>
                        </dt>
                        <dd>
                            <span>{'010-0000-0000'}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>이메일</span>
                        </dt>
                        <dd>
                            <span>{'gildong@naver.com'}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>품절시 환불</span>
                        </dt>
                        <dd>
                            <span>{'주문 시 결제수단으로 환불받기'}</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    )
}
