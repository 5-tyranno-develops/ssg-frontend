'use client'
import { useState } from 'react'
import Image from 'next/image'
import StillPinIcon from '@/images/StillPinIcon.png'
import StillRedPinIcon from '@/images/StillRedPinIcon.png'
import trash from '@/images/Trash.png'

export default function Recent() {
    const productData = [
        {
            productId: 1,
            vendorName: '노브랜드',
            name: '상품1',
            productPrice: 10000,
            discount: 0,    
            imageUrl: 'https://sitem.ssgcdn.com/89/11/90/item/1000043901189_i1_750.jpg',
        },
        {
            productId: 12,
            vendorName: '노브랜드',
            name: '상품2',
            productPrice: 20000,
            discount: 10,
            imageUrl: 'https://sitem.ssgcdn.com/89/11/90/item/1000043901189_i1_750.jpg',
        },
    ]
    return <></>
}
