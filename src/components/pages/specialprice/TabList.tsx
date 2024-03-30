'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import TabListUi from '@/components/ui/TabListUi'

interface TabListProps {
    TablistTitles: string[]
}

export default function TabList({ TablistTitles }: { TablistTitles: { title: string; subtitle?: string }[] }) {
    const [expandedTab, setExpandedTab] = useState<number | null>(0)

    return (
        <div className="w-full h-[76px]">
            <div className="w-full h-[76px] px-4">
                <div className="w-full h-full py-[10px]">
                    <ul className="w-full h-full flex justify-center items-center list-none text-[12px] gap-2">
                        {TablistTitles.map((item, index) => (
                            <TabListUi
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                titleUrl="/specialprice"
                                isExpanded={expandedTab === index}
                                onExpand={() => setExpandedTab(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
