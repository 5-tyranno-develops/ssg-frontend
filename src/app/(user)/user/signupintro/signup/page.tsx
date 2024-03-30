'use client'
import HeaderTitle from '@/components/ui/HeaderTitle'
import './signup.css'
import { useState, useEffect } from 'react'
import Buttons from '@/components/ui/buttons'
import Postcode from '@/components/pages/address/Add'
import signupAPI from '@/app/api/user'

function signup() {
    const [loginId, setLoginId] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [addressBase, setAddressBase] = useState('')
    const [addressDetail, setAddressDetail] = useState('')
    const [zipCode, setZipCode] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState(0)
    const [birth, setBirth] = useState('')
    const [shinsegaeMarketingAgree, setShinsegaeMarketingAgree] = useState(99)
    const [shinsegaeOptionAgree, setShinsegaeOptionAgree] = useState(99)
    const [ssgMarketingAgree, setSsgMarketingAgree] = useState(99)

    // 유효성 검사 결과
    const [loginIdValue, setLoginIdValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirm, setpasswordConfirm] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    useEffect(() => {
        setName(localStorage.getItem('name') || '')
        setBirth(localStorage.getItem('birthday') || '')
        setPhoneNumber(localStorage.getItem('phoneNumberString') || '')
        setGender(Number(localStorage.getItem('gender')) || 1)
    }, [])

    const checkLoginId = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newId = event.target.value
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
        if (!regExp.test(newId)) {
            setLoginIdValue('아이디는 영어 또는 숫자 8~20자로 조합 되어야합니다.')
        } else {
            setLoginIdValue('')
            setLoginId(newId)
        }
    }
    const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
        if (!regExp.test(newPassword)) {
            setPasswordValue('비밀번호는 영어 숫자 8~20자로 조합 되어야합니다.')
        } else {
            setPasswordValue('')
            setpassword(newPassword)
        }
    }

    const checkPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPasswordCheck = event.target.value
        if (newPasswordCheck !== password) {
            setpasswordConfirm('비밀번호가 일치하지 않습니다.')
        } else {
            setpasswordConfirm('')
        }
    }
    const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value
        var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if (!regExp.test(newEmail)) {
            setEmailValue('이메일 형식이 올바르지 않습니다.')
        } else {
            setEmailValue('')
            setEmail(newEmail)
        }
    }
    const handleCheckboxChange = (type: string) => {
        const handlers: { [key: string]: () => void } = {
            shinsegaeMarketing: () => setShinsegaeMarketingAgree(11),
            shinsegaeOption: () => setShinsegaeOptionAgree(11),
            ssgMarketing: () => setSsgMarketingAgree(11),
        }

        const handler = handlers[type]
        if (handler) {
            handler()
        }
    }

    const sendUserApi = async () => {
        try {
            const requestData = {
                loginId: loginId,
                password: password,
                name: name,
                deliveryBase: addressBase,
                deliveryDetail: addressDetail,
                zipCode: parseInt(zipCode),
                phoneNumber: phoneNumber,
                email: email,
                gender: gender,
                birth: birth,
                shinsegaeMarketingAgree: shinsegaeMarketingAgree,
                shinsegaeOptionAgree: shinsegaeOptionAgree,
                ssgMarketingAgree: ssgMarketingAgree,
            }
            await signupAPI(requestData)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div>
            <Postcode
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                setFullAddress={setAddressBase}
                setDetailAddress={setAddressDetail}
                setZipCode={setZipCode}
            />
            <HeaderTitle title="신세계포인트 통합회원 가입" />
            <div style={{ backgroundColor: '#f8f8f8', padding: '15px 20px' }}>
                <h3>회원 정보</h3>
            </div>
            <div className="flex-col">
                <div className="box">
                    <dl>
                        <dt>
                            <span>
                                <span style={{ color: 'red' }}>*</span>
                                <label>아이디</label>
                            </span>
                        </dt>
                    </dl>
                    <input
                        name="loginId"
                        type="text"
                        // className=" mt-1 p-2 ml-7 h-10 w-full  border text-sm"
                        placeholder="영어 또는 숫자로 6~20자리"
                        onChange={checkLoginId}
                    />
                    <button
                        className=" mt-1 ml-2 h-10 w-28 text-sm  "
                        style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
                    >
                        중복확인
                    </button>
                </div>
                <div style={{ color: 'red', fontSize: '13px', padding: '10px', marginLeft: '100px' }}>
                    {loginIdValue}
                </div>
                <div className="box">
                    <dl className="cmem_ip">
                        <dt>
                            <span className="cmem_require">
                                <span style={{ color: 'red' }}>*</span>
                                <label>비밀번호</label>
                            </span>
                        </dt>
                    </dl>
                    <div className="flex-col w-full ">
                        <input
                            type="password"
                            placeholder="영문, 숫자 조합 8~20자리"
                            name="password"
                            onChange={checkPassword}
                        />
                        <div style={{ color: 'red', fontSize: '13px', padding: '10px' }}>{passwordValue}</div>
                        <input type="password" placeholder="비밀번호 재확인" onChange={checkPasswordConfirm} />
                        <div style={{ color: 'red', fontSize: '13px', padding: '10px' }}>{passwordConfirm}</div>
                    </div>
                </div>
                <div className="box">
                    <dl className="flex">
                        <dt>
                            <span style={{ color: 'red' }}>*</span>
                            <label>이름</label>
                        </dt>
                        <span className=" mt-1 p-2 ml-6 h-10  mb-1 text-sm ">{name}</span>
                    </dl>
                </div>
                <div className="box">
                    <dl>
                        <dt>
                            <span>
                                <span style={{ color: 'red' }}>*</span>
                                <label>주소</label>
                            </span>
                        </dt>
                    </dl>

                    <input type="text" value={zipCode} readOnly />

                    <button
                        className=" mt-1 ml-2 h-10 w-28 text-sm  "
                        style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        주소 찾기
                    </button>
                </div>
                <div className="ml-10">
                    <span className="flex">
                        <span className="terms-content">도로명</span>
                        <span className="ml-14">
                            {addressBase}
                            {addressDetail}
                        </span>
                    </span>
                    <span>
                        {addressBase} {addressDetail}
                    </span>
                </div>
                <div className="box">
                    <dl className="flex">
                        <dt>
                            <span style={{ color: 'red' }}>*</span>
                            <label>휴대폰번호</label>
                        </dt>
                        <span className=" mt-1 p-2 ml-6 h-10 mb-1 text-sm ">{phoneNumber}</span>
                    </dl>
                </div>
                <div className="box">
                    <dl className="cmem_ip">
                        <dt>
                            <span className="cmem_require">
                                <span style={{ color: 'red' }}>*</span>
                                <label>이메일주소</label>
                            </span>
                        </dt>
                    </dl>

                    <input type="text" placeholder="이메일 주소" onChange={checkEmail} />
                </div>
                <div style={{ color: 'red', fontSize: '13px', padding: '10px' }}>{emailValue}</div>
            </div>
            <div style={{ backgroundColor: '#f8f8f8', padding: '15px 20px' }}>
                <h3> 마케팅 정보 수신동의</h3>
            </div>
            <div>
                <h4 className="m-3 ml-5 font-semibold">신세게포인트</h4>
                <div className="terms-box">
                    <label>
                        <input type="checkbox" onChange={() => handleCheckboxChange('shinsegaeMarketing')} />
                        <span style={{ padding: '10px' }}>
                            {' '}
                            (선택) 마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의{' '}
                        </span>
                    </label>
                    <span className="terms-content">내용 보기</span>
                </div>
                <div className="terms-box">
                    <label>
                        <input type="checkbox" onChange={() => handleCheckboxChange('shinsegaeOption')} />
                        <span style={{ padding: '10px' }}>
                            {' '}
                            (선택) 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용동의{' '}
                        </span>
                    </label>
                    <span className="terms-content">내용 보기</span>
                </div>
                <h4 className="m-3 ml-5 font-semibold">SSG.COM</h4>
                <div className="terms-box">
                    <label>
                        <input type="checkbox" onChange={() => handleCheckboxChange('ssgMarketing')} />
                        <span style={{ padding: '10px' }}>
                            {' '}
                            (선택) 마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의{' '}
                        </span>
                    </label>
                    <span className="terms-content">내용 보기</span>
                </div>
                <p style={{ color: 'red', marginTop: '5px', marginLeft: '30px', fontSize: '13px' }}>
                    마케팅 정보 수신 동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다.
                </p>
            </div>
            <p style={{ color: '#666', marginTop: '10px', marginLeft: '10px', fontSize: '13px', marginBottom: '30px' }}>
                <strong>선택 항목에 동의하지 않더라도 SSG.COM회원가입 및 기본 서비스를 이용하실 수 있습니다.</strong>
            </p>

            <label className="w-full mb-7">
                <Buttons title="가입하기" href="/" click={sendUserApi} />
            </label>
        </div>
    )
}

export default signup
