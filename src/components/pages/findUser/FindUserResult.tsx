'use client'
import { useState, useEffect } from 'react'
export default function FindUserResult() {
    const [findid, setFindid] = useState('')
    useEffect(() => {
        setFindid(localStorage.getItem('findID') || '')
    }, [])
    console.log(findid)
    return (
        <p className="mt-3 text-sm text-gray-500">
            아이디
            <span className="ml-3 text-black">{findid}</span>
        </p>
    )
}
