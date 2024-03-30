'use client'
// import LargeCategorySlideButton from '@/components/layouts/LargeCategorySlideButton'
// import SpecailPrice from '@/components/widgets/SpecailPrice'
import TabList from '@/components/pages/specialprice/TabList'
import React, { useState } from 'react'

export default function page() {
    const TablistTitles = [
        { title: '전체', subtitle: '보기' },
        { title: '쓱~', subtitle: '특가' },
        { title: '오늘의', subtitle: '장보기' },
    ]

    const handleClose = () => {
        // 여기에 닫기 버튼을 눌렀을 때 수행할 작업을 추가할 수 있습니다.
    }

    return (
        <div className="w-full h-100">
            <TabList TablistTitles={TablistTitles} />
            {/* <LargeCategorySlideButton />
            <LargeCategoryList onClose={handleClose}/>
            <SpecailPrice /> */}
        </div>
    )
}
