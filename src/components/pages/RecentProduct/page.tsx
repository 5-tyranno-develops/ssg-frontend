'use client'
import React, { useState } from 'react'
import Image from 'next/image'
export default function EditButton() {
    const [deleted, setDeleted] = useState(false)
    const handleEditClick = () => {
        setDeleted(!deleted)
    }
    return (
        <>
            <button className="flex" onClick={handleEditClick}>
                {deleted ? (
                    <>
                        <p>취소</p>
                        <Image width="20" height="50" src="https://img.icons8.com/ios/50/cancel.png" alt="취소" />
                    </>
                ) : (
                    <>
                        <p>편집</p>
                        <Image width="20" height="30" src="https://img.icons8.com/ios/50/settings--v1.png" alt="편집" />
                    </>
                )}
            </button>
        </>
    )
}
