'use client'
import React, { useState } from 'react'
export default function Agree() {
    const [terms, setTerms] = useState([
        { id: 1, title: '개인정보 이용 및 제공 동의' },
        { id: 2, title: '통신사 이용약관 동의' },
        { id: 3, title: '고유식별정보 처리 동의' },
        { id: 4, title: '서비스 이용약관 동의' },
    ])

    const [allChecked, setAllChecked] = useState(false)
    const [checkedItem, setCheckedItem] = useState<number[]>([])
    const checkItemhandler = (id: number, ischecked: boolean) => {
        console.log(id, ischecked)
        if (ischecked) {
            setCheckedItem((prev) => [...prev, id])
        } else {
            setCheckedItem(checkedItem.filter((item) => item !== id))
        }
    }
    const handleAllChecked = (checked: boolean) => {
        setAllChecked(checked)
        const updatedTerms = terms.map((item) => ({
            ...item,
            checked: checked,
        }))
        setTerms(updatedTerms)
        if (checked) {
            setCheckedItem(updatedTerms.map((item) => item.id))
        } else {
            setCheckedItem([])
        }
    }
    return (
        <>
            {terms.map((item) => (
                <div key={item.id} className="terms-box">
                    <label>
                        <input
                            type="checkbox"
                            key={item.id}
                            onChange={() => checkItemhandler(item.id, !checkedItem.includes(item.id) ? true : false)}
                            checked={checkedItem.includes(item.id)}
                        />
                        <span style={{ padding: '10px' }}>{item.title}</span>
                    </label>
                    <span className="terms-content">내용 보기</span>
                </div>
            ))}

            <div className="terms-box">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleAllChecked(!allChecked)}
                        checked={checkedItem.length === terms.length ? true : false}
                    />
                    <span style={{ padding: '10px', color: 'red' }}>전체 동의</span>
                </label>
            </div>
        </>
    )
}
