'use client'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import TermsModal from '@/components/modal/TermsModal'

export default function TermsOfService() {
    const [agreement, setAgreement] = useState(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <>
            <div className="bg-white m-4 rounded-xl text-center">
                <div className="items-center p-4">
                    <div className="flex justify-between items-center">
                        <span className="text-xs">주문정보 및 서비스 약관에 동의합니다.</span>
                        <button
                            onClick={() => {
                                setAgreement(!agreement)
                            }}
                        >
                            {agreement ? (
                                <FontAwesomeIcon icon={faCaretUp} className="text-[#969696]" />
                            ) : (
                                <FontAwesomeIcon icon={faCaretDown} className="text-[#969696]" />
                            )}
                        </button>
                    </div>
                    {agreement && (
                        <div className="flex text-xs justify-between pt-2">
                            <div>
                                <span className="text-[#b8b8b8]">└</span> 전자금융거래 이용약관
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setModalOpen(true)
                                    }}
                                    className="underline text-[#969696]"
                                >
                                    약관보기
                                </button>
                                <TermsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                            </div>
                        </div>
                    )}
                </div>
                <button className="bg-[#ff5452] w-full rounded-b-xl text-white h-[50px] font-bold">결제하기</button>
            </div>
        </>
    )
}
