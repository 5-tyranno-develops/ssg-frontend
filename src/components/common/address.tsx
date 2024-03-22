// PostcodeButton.js
'use client'
import React, { useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import HeaderTitle from '../ui/HeaderTitle'

const PostcodeButton = ({ onAddressChange }: { onAddressChange: (fullAddress: string, zipCode: string) => void }) => {
    const [fullAddress, setFullAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')

    const handleComplete = (data: any) => {
        let fullAddress = data.address
        let zipCode = data.zonecode
        let extraAddress = ''

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
        }

        // fullAddress 값을 부모 컴포넌트로 전달
        onAddressChange(fullAddress, zipCode)
        setFullAddress(fullAddress)
        setZipCode(zipCode)
    }

    const handleClick = () => {
        open({ onComplete: handleComplete })
    }

    return (
        <button
            className=" mt-1 ml-2 h-10 w-28 text-sm  "
            style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
            onAbort={handleClick}
        >
            주소 찾기
        </button>
    )
}

export default PostcodeButton
