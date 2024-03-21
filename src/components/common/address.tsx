// PostcodeButton.js
'use client'
import React, { useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'

const PostcodeButton = ({ onAddressChange }) => {
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
            type="button"
            onClick={handleClick}
            className=" mt-1 ml-2 h-10 w-28 text-sm bg-stone-500 text-white "
            style={{
                backgroundColor: '#666666',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            우편번호
        </button>
    )
}

export default PostcodeButton
