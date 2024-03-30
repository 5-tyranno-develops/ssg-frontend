'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TabListUi({ title, subtitle, titleUrl, isExpanded, onExpand }: { title: string, subtitle?: string, titleUrl: string, isExpanded: boolean, onExpand: () => void }) {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        onExpand();
    };

    return (
        <li className='w-full'>
            <Link
                href={titleUrl} onClick={handleClick}
                className={`flex justify-center items-center ${isExpanded ? 'border-2 border-black font-bold' : ''}`}>
                <p className='py-[8px] text-center'>{title}<br/>{subtitle}</p>
            </Link>
        </li>
    )
}
