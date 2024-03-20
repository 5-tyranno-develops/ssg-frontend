// PostcodeButton.js
'use client'
import React, { useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import HeaderTitle from '../ui/HeaderTitle'

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
        <div>
            <HeaderTitle title="배송지 관리" />
            <div style={{ backgroundColor: '#f8f8f8', padding: '15px 20px' }}>
                <h3>배송지 정보</h3>
            </div>
        </div>
    )
}

export default PostcodeButton
