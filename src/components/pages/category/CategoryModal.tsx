'use client'
import { useEffect, useState } from 'react'
export interface CategoryMiddleType {
    middleId: string
    middleName: string
}
function CategoryModal({ largeId }: { largeId: number }) {
    const [categoryMiddle, setCategoryMiddle] = useState<CategoryMiddleType[]>([] as CategoryMiddleType[])
    console.log(largeId)
    useEffect(() => {
        const GetCategoryMiddle = async () => {
            const data = await fetch(`https://tyrannoback.com/api/v1/category/middle/${largeId}`)
            if (data) {
                const response = await data.json()
                setCategoryMiddle(response)
            }
        }
        GetCategoryMiddle()
    }, [largeId])
    return (
        <section className="grid grid-cols-2 gap-x-4 ">
            <li className="flex text-xs min-h-[38px] pl-3 pr-[13px]"> 전체보기</li>
            {categoryMiddle &&
                categoryMiddle.map((opt: CategoryMiddleType, idx) => (
                    <div key={idx}>
                        <ul className="flex text-xs min-h-[38px] pl-3 pr-[13px]">
                            <li className="min-h-[38px]">{opt.middleName}</li>
                        </ul>
                    </div>
                ))}
        </section>
    )
}
export default CategoryModal
