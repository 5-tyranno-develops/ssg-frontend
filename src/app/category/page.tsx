'use client'

import { lCategoryDummy } from '@/lib/lCategoryDummy'
import { largeCategoryType } from '@/types/largeCategoryType'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CategoryPage() {
    const [selectedLCategory, setSelectedLCategory] = useState<number>(0)

    const [isOpen, setIsOpen] = useState<Boolean[]>(Array(lCategoryDummy.length).fill(false))

    const handleOpen = (e: React.MouseEvent<HTMLLIElement>) => {
        const role = e.currentTarget.getAttribute('role')
        if (role) {
            const index = parseInt(role)
            if (!isOpen[index]) {
                setIsOpen((prev) => {
                    return prev.map((item, idx) => {
                        return index === idx ? !item : false
                    })
                })
            }
        }
    }

    return (
        <div>
            <div className="h-screen">
                <div className="pt-[15px] pr-[10px] pb-[25px] pl-[10px]">
                    {lCategoryDummy
                        .reduce((acc: largeCategoryType[][], item, index) => {
                            const groupIndex = Math.floor(index / 5)
                            if (!acc[groupIndex]) {
                                acc[groupIndex] = []
                            }
                            acc[groupIndex].push(item)
                            return acc
                        }, [])
                        .map((group, groupIndex) => (
                            <div className="py-2 min-h-[80px]" key={groupIndex}>
                                <GroupNav
                                    group={group}
                                    gx={groupIndex}
                                    handleOpen={(e) => {
                                        handleOpen(e)
                                        setSelectedLCategory(parseInt(e.currentTarget.getAttribute('value') ?? '0'))
                                    }}
                                    selectedLCategory={selectedLCategory}
                                    isOpen={isOpen[groupIndex]}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export const GroupNav = ({
    group,
    gx,
    handleOpen,
    isOpen,
    selectedLCategory,
}: {
    group: largeCategoryType[]
    gx: number
    handleOpen: React.MouseEventHandler<HTMLLIElement>

    isOpen: Boolean
    selectedLCategory: number
}) => {
    return (
        <div className="relative left-0 overflow-hidden w-full ">
            <ul className={isOpen ? 'grid grid-cols-5 h-full relative' : 'grid grid-cols-5 relative'}>
                {group.map((item) => (
                    <NavItem key={item.id} item={item} value={item.id} handleOpen={handleOpen} gx={gx} />
                ))}
            </ul>
            {isOpen && (
                <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 my-[5px] box-border">
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/all'} passHref>
                                상품 전체보기
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/1'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/2'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/3'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/4'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/5'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/6'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                        <p>
                            <Link href={'/category/7'} passHref>
                                중분류명
                            </Link>
                        </p>
                    </li>
                    {/* {중분류 데이터.map((item, idx) => {
              return (
                <li key={idx} className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                  <p>
                    <Link
                      href={{
                        pathname: `/category/sub`,
                        query: { lCtg: selectedLCategory, mCtg: item.id }
                      }} // 중분류 페이지로 이동하기 위한 query 설정
                      passHref>
                      중분류명
                    </Link>
                  </p>
                </li>
              )
            })
            } */}
                </ul>
            )}
        </div>
    )
}

export const NavItem = ({
    item,
    value,
    handleOpen,
    gx,
}: {
    item: largeCategoryType
    value: largeCategoryType['id']
    handleOpen: React.MouseEventHandler<HTMLLIElement>
    gx: number
}) => {
    return (
        <li
            className="relative flex flex-col justify-center items-center"
            onClick={handleOpen}
            role={gx.toString()}
            value={value}
        >
            <Image src={item.img_url} alt={item.title} width={64} height={64} priority={true} />
            <p className="text-[10px] text-gray-500">{item.title}</p>
        </li>
    )
}
