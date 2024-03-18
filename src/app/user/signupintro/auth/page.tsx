'use client'
import HeaderTitle from '@/components/ui/HeaderTitle'
import './terms.css'
import React, { useState } from 'react'
import Buttons from '@/components/ui/buttons'

function Auth() {
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
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phoneNumberString, setPhoneNumberString] = useState('')

    const settingName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const settingBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value)
    }
    const parsingPhoneNumber = (num: string) => {
        return num
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            .replace(/(-{1,2})$/g, '')
    }
    const submitHandler = () => {
        console.log(name, birthday, phoneNumberString)
    }

    return (
        <div>
            <HeaderTitle title="신세계포인트 통합회원 가입" />
            <div className="non-header">
                {terms.map((item) => (
                    <div key={item.id} className="terms-box">
                        <label>
                            <input
                                type="checkbox"
                                key={item.id}
                                onChange={() =>
                                    checkItemhandler(item.id, !checkedItem.includes(item.id) ? true : false)
                                }
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
                <div className="auth_user" style={{ marginTop: '30px' }}>
                    <span className="inp_txt">
                        <input
                            className="input-content"
                            type="text"
                            id="userName"
                            name="name"
                            placeholder="이름"
                            onChange={settingName}
                        />
                        {/* <div className="tag-group">
                            <input type="radio" name="sex" value="1" />
                            <label>남</label>
                        </div> */}

                        {/* <label className="userName"></label> */}
                    </span>
                    <span className="inp_txt">
                        <input
                            type="text"
                            className="input-content"
                            name="birthday"
                            placeholder="생년월일 8자리(예. 20100101)"
                            onChange={settingBirthday}
                        />

                        <select
                            id="currency"
                            name="foriegn"
                            style={{ fontSize: '14px', color: '#000', marginLeft: '65%' }}
                        >
                            <option>내국인</option>
                            <option>외국인</option>
                        </select>
                    </span>
                    {/* </div> */}
                    <span className="inp_txt">
                        <label htmlFor="currency" className="" />
                        <select
                            id="currency"
                            name="phone-type"
                            style={{ fontSize: '14px', color: '#000' }}
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                        >
                            <option>SKT</option>
                            <option>KT</option>
                            <option>LG U+</option>
                            <option>SKT 알뜰폰</option>
                            <option>KT 알뜰폰</option>
                            <option>LG U+ 알뜰폰</option>
                        </select>
                    </span>
                    <span className="inp_txt">
                        <input
                            className="input-content"
                            type="tel"
                            value={phoneNumberString}
                            maxLength={13}
                            onChange={(e) => setPhoneNumberString(parsingPhoneNumber(e.target.value))}
                            placeholder="-없이 휴대폰번호 입력"
                        />
                    </span>
                    <label className="userName"></label>
                </div>
                <span>
                    {checkedItem.length === terms.length ? (
                        <Buttons title="인증번호 받기" href="/user/signupintro/signup" />
                    ) : (
                        <Buttons
                            title="인증번호 받기"
                            color="#f0f0f0"
                            href="/user/signupintro/signup"
                            ftcolor="black"
                            click={submitHandler}
                        />
                    )}
                    {/* <Buttons title="인증번호 받기" href="/user/signupintro/signup" /> */}
                    {/* <Link href={{ pathname: '/user/signupintro/signup', query: { name: 'test' } }}> 클릭</Link> */}
                </span>
                <div className="m_auth_section">
                    <ul className="noti_list">
                        <li className="text-sm">본인 명의의 휴대폰 정보를 정확히 입력하여 주시기 바랍니다.</li>
                        <li className="text-sm">
                            타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌(3년 이하의 징역형 또는
                            1천만원 이하의 벌금형) 받을수 있습니다.
                        </li>
                        <li className="text-sm">인증문의 : (주)KCB고객센터(02-708-1000)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Auth
