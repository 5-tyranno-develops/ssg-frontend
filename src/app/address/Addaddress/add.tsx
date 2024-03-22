'use client'
import HeaderTitle from '@/components/ui/HeaderTitle'
import React, { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { useRouter } from 'next/navigation'

interface AddaddressProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    setFullAddress: (value: string) => void
    setDetailAddress: (value: string) => void
    setZipCode: (value: string) => void
}
const Postcode = ({ modalOpen, setModalOpen, setFullAddress, setDetailAddress, setZipCode }: AddaddressProps) => {
    const [fullAddr, setFullAddr] = useState('')
    const [detailAddr, setDetailAddr] = useState('')
    const [zCode, setzCode] = useState('')

    const settingDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetailAddr(e.target.value)
    }
    let zonecode = ''
    let full = ''
    let extraAddress = ''

    const handleComplete = (data: any) => {
        zonecode = data.zonecode
        full = data.address
        extraAddress = ''

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
            }
            full += extraAddress !== '' ? ` (${extraAddress})` : ''
        }
        setFullAddr(full)
        setzCode(zonecode)
        setFullAddress(full)
        setZipCode(zonecode)
        console.log(full, detailAddr, zonecode) // detailAddress 출력
    }
    const closeModal = () => {
        // setFullAddr(full)
        setDetailAddr(detailAddr)
        // setzCode(zonecode)

        // setFullAddress(full)
        setDetailAddress(detailAddr)

        setModalOpen(false)
        console.log(full, detailAddr, zonecode) // detailAddress 출력
    }

    return (
        modalOpen && (
            <div className="bg-white top-0 left-0 right-0 bottom-0" style={{ zIndex: '1000', position: 'fixed' }}>
                <HeaderTitle title="배송지 추가" />
                <div className="p-10">
                    <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false} />
                </div>
                <div className="flex justify-center">{zCode}</div>
                <div className="flex justify-center">{fullAddr}</div>

                <input
                    type="text"
                    className="w-full h-10"
                    style={{ border: '1px solid ' }}
                    onChange={settingDetailAddress}
                />

                <button
                    className="w-full h-10"
                    onClick={() => {
                        closeModal()
                    }}
                >
                    확인
                </button>
            </div>
        )
    )
}

export default Postcode
