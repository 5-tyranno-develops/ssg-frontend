'use client'
import Buttons from '@/components/ui/buttons'
import React, { useEffect, useState } from 'react'
export default function Authphone() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState<number>()
    const [birthday, setBirthday] = useState('')
    const [phoneNumberString, setPhoneNumberString] = useState('')
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)

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

    const genderHandler = (genderType: number) => {
        setGender(genderType)
    }

    useEffect(() => {
        // 모든 필드가 채워져 있는지 확인합니다.
        const allFieldsFilled =
            name.trim() !== '' && gender !== undefined && birthday.trim() !== '' && phoneNumberString.trim() !== ''

        // 버튼 활성화 상태를 설정합니다.
        setIsButtonEnabled(allFieldsFilled)
    }, [name, gender, birthday, phoneNumberString])
    const handleButtonClick = () => {
        localStorage.setItem('name', name)
        localStorage.setItem('birthday', birthday)
        localStorage.setItem('phoneNumberString', phoneNumberString)
        localStorage.setItem('gender', gender?.toString() || '')
    }

    return (
        <>
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
                    <span className="tag-group">
                        <div className={`tag ${gender === 1 ? 'checked' : ''}`} onClick={() => genderHandler(1)}>
                            <input type="radio" name="sex" value="1" />
                            <label>남</label>
                        </div>
                        <div className={`tag ${gender === 2 ? 'checked' : ''}`} onClick={() => genderHandler(2)}>
                            <input type="radio" name="sex" value="2" />
                            <label>여</label>
                        </div>
                    </span>
                </span>
                <span className="inp_txt">
                    <input
                        type="text"
                        className="input-content"
                        name="birthday"
                        placeholder="생년월일 8자리(예. 20100101)"
                        onChange={settingBirthday}
                    />

                    <select id="currency" name="foriegn" style={{ fontSize: '14px', color: '#000', width: '10%' }}>
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
                {/* {checkedItem.length === terms.length ? (
                        <Buttons
                            title="인증번호 받기"
                            href="/user/signupintro/signup"
                            click={handleButtonClick}
                        ></Buttons>
                    ) : (
                        <Buttons
                            title="인증번호 받기"
                            color="#f0f0f0"
                            href="/user/signupintro/signup"
                            ftcolor="black"
                            click={handleButtonClick}
                        />
                    )} */}

                {!(name && birthday && phoneNumberString && gender) && (
                    <div>
                        <Buttons
                            title="인증번호 받기"
                            href="/user/signupintro/auth"
                            click={() => alert('모든 항목을 체크해주세요')}
                        ></Buttons>
                    </div>
                )}

                {name && birthday && phoneNumberString && gender && (
                    <Buttons title="인증번호 받기" href="/user/signupintro/signup" click={handleButtonClick}></Buttons>
                )}
            </span>
        </>
    )
}
