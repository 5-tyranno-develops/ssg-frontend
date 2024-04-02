import ClipHeader from '@/components/pages/clip/ClipHeader'
import ClipMain from '@/components/pages/clip/ClipMain'
import ClipNavbar from '@/components/pages/clip/ClipNavbar'
import React from 'react'

async function getClipItemIds(memberId: number) {
    try {
        const res = await fetch('https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                memberId: memberId,
            }),
            next: { tags: ['clip', 'clipCancle', 'manyClipCancle'] },
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            // return data.itemIds
            return [1, 2, 3, 4] //예시
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

async function getClipNums(memberId: number) {
    try {
        const res = await fetch('https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                memberId: memberId,
            }),
            next: { tags: ['clip', 'clipCancle', 'manyClipCancle'] },
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            return data.clipNums
            /**
       // return 예시
       {
          item: 4,
          brand: 0,
          category: 0,
        }
       * */
        } else {
            return {}
        }
    } catch (error) {
        console.log(error)
        return {}
    }
}

export default async function ClipPage() {
    //memberId는 쿠키 또는 세션에서 가져오기
    // -> use client 써야할경우 데이터 페칭 함수를 각 컴포넌트 안으로 넣기
    const itemIds = await getClipItemIds(1)
    const clipNums = await getClipNums(1)
    console.log(clipNums)
    //Header 추가하기
    return (
        <>
            <ClipHeader />
            <ClipNavbar clipNums={clipNums} />
            <ClipMain itemIds={itemIds} />
        </>
    )
}
