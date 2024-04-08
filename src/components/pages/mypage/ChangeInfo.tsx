'use client'

import { getMyInfo } from '@/actions/mypage'
import Buttons from '@/components/ui/buttons'
import { MyInfo } from '@/types/MyInfoDataType'
import { useEffect, useState } from 'react'

export default function ChangeInfo() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showInputs, setShowInputs] = useState(false) // 입력 상태를 저장하는 상태 변수
    const [myInfo, setMyInfo] = useState<MyInfo>()
    const fetchData = async () => {
        try {
            const res = await getMyInfo()
            setMyInfo(res)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    // 변경 버튼 클릭 시 입력 상태를 토글하는 함수
    const handleButtonClick = () => {
        setShowInputs(!showInputs)
    }
    const parsePhoneNumber = (phoneNumber: string) => {
        const numberWithoutHyphen = phoneNumber.replace(/-/g, '')
        const phoneNumberWithout010 = numberWithoutHyphen.slice(3)
        return phoneNumberWithout010
    }

    return (
        <section className="px-3 bg-white">
            <div className="justify-between flex" style={{ borderBottom: '1px solid #c6e6e6' }}>
                <h3 className=" py-4 text-base font-bold">필수정보입력</h3>
                <span className="mt-6 leading-3" style={{ color: '#aaa', fontSize: '12px' }}>
                    <em className="text-red-600">*</em> 필수입력
                </span>
            </div>
            <div className="p-4 flex" style={{ borderBottom: '1px solid #c6e6e6' }}>
                <span
                    className="table-cell relative items-center w-1/4"
                    style={{ color: '#aaa', fontSize: '15px', verticalAlign: 'middle' }}
                >
                    <em className="text-red-600">*</em> 회원아이디
                </span>
                <div className="w-3/4">{myInfo?.loginId}</div>
            </div>
            <div className="p-4 flex" style={{ borderBottom: '1px solid #c6e6e6' }}>
                <span className="table-cell relative items-center w-1/4" style={{ color: '#aaa', fontSize: '15px' }}>
                    <em className="text-red-600">*</em> 이름
                </span>
                <div>{myInfo?.name}</div>
            </div>
            <div className="p-4 flex" style={{ borderBottom: '1px solid #c6e6e6' }}>
                <span className="table-cell relative items-center w-1/4" style={{ color: '#aaa', fontSize: '15px' }}>
                    <em className="text-red-600">*</em> 비밀번호
                </span>

                {showInputs === false ? (
                    <button
                        className=" mt-1 h-10 w-32 text-sm  "
                        style={{ backgroundColor: '#666', fontWeight: 'bold', color: '#fff' }}
                        onClick={handleButtonClick}
                    >
                        비밀번호 변경
                    </button>
                ) : (
                    <div className="w-3/4">
                        <input
                            type="password"
                            className="w-full h-10 my-2"
                            style={{ border: '1px solid #c6c6c6' }}
                            placeholder="새 비밀번호"
                        />
                        <input
                            type="password"
                            className="w-full h-10 my-2"
                            style={{ border: '1px solid #c6c6c6' }}
                            placeholder="새 비밀번호 확인"
                        />
                    </div>
                )}
            </div>
            <div className="p-4 flex" style={{ borderBottom: '1px solid #c6e6e6', fontSize: '13px' }}>
                <span className="table-cell relative items-center w-1/4" style={{ color: '#aaa', fontSize: '15px' }}>
                    <em className="text-red-600">*</em> 휴대폰
                </span>
                <div className="flex w-3/4">
                    <span className="w-20">
                        <select
                            name="휴대폰번호"
                            id="010"
                            className="inline-block h-10 w-30 pr-6 pl-3 "
                            style={{ border: '1px solid #c9c9c9' }}
                        >
                            <option value="DEFAULTE">010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select>
                    </span>
                    <input
                        type="tel"
                        placeholder="휴대폰 번호 뒷자리"
                        defaultValue={parsePhoneNumber(myInfo?.phoneNumber || '')}
                        className="w-full h-10 ml-5"
                        style={{ border: '1px solid #c9c9c9' }}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="p-4 flex" style={{ borderBottom: '1px solid #c6e6e6' }}>
                <span className="table-cell relative items-center w-1/4" style={{ color: '#aaa', fontSize: '15px' }}>
                    <em className="text-red-600">*</em> 이메일
                </span>
                <div className="w-3/4">
                    <input
                        className="w-full h-10"
                        type="email"
                        style={{ border: '1px solid #c6c6c6' }}
                        defaultValue={myInfo?.email}
                    />
                </div>
            </div>
            <div className="flex p-4">
                <div className="flex-grow">
                    <Buttons title="취소" href="/mypage" color="#e5e5e5" ftcolor="#222" />
                </div>
                <div className="flex-grow">
                    <Buttons title="정보수정" href="/mypage" />
                </div>
            </div>
        </section>
    )
}
