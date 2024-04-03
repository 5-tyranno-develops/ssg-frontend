'use client'
import { changePasswordAPI } from '@/actions/user'
import Buttons from '@/components/ui/buttons'
import { ChangePasswordDataType } from '@/types/ChangePassword'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ChangePassword() {
    const [findid, setFindid] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [doubleCheck, setDoubleCheck] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setFindid(localStorage.getItem('findID') || '')
    }, [])
    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const changePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordCheck(event.target.value)
    }
    const handleSubmitChangePassword = async (e: any) => {
        console.log(password, passwordCheck)
        if (password != passwordCheck) {
            alert('비밀번호가 다릅니다')
        } else {
            setDoubleCheck(true)
            try {
                const idPW: ChangePasswordDataType = {
                    loginId: findid,
                    newPassword: password,
                }
                const response = await changePasswordAPI(idPW)
            } catch (error) {
                console.log(error)
            }
            alert('비밀번호가 변경되었습니다')
            router.push('/user/login')
        }
    }
    return (
        <form>
            <div className=" ">
                <span className=" text-gray-500 text-xs">
                    <label>비밀번호</label>
                </span>
                <input
                    type="password"
                    placeholder="숫자, 영어 조합으로 8~20자리 입력해주세요."
                    className=" mt-1 p-3 w-full h-12  border text-sm "
                    onChange={changePassword}
                />
                <span className=" text-gray-500 text-xs">
                    <label>비밀번호 확인</label>
                </span>
                <input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    className=" mt-1 p-3 w-full h-12  border text-sm"
                    onChange={changePasswordCheck}
                />
            </div>
            <div>
                {doubleCheck ? (
                    <Buttons title="확인" href="/" click={handleSubmitChangePassword} />
                ) : (
                    <Buttons title="확인" href="/user/login" click={handleSubmitChangePassword} />
                )}
            </div>
        </form>
    )
}
