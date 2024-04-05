'use client'
import HeaderTitle from '@/components/ui/HeaderTitle'
import React from 'react'
import Link from 'next/link'
import EasyIcon from '@/components/ui/easyIcon'
import Buttons from '@/components/ui/buttons'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import options from '@/app/api/auth/[...nextauth]/options'

interface UserType {
    isSuccess: boolean
    message: string
    code: number
    result?: string
}
function Login() {
    const [loginId, setLoginId] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()
    const handleLoginId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginId(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        await signIn('credentials', {
            loginId,
            password,
            redirect: false,
        })

        const session = await getSession(options)
        const sessionUser = session?.user as UserType
        if (sessionUser.isSuccess === true) {
            router.push('/')
        } else {
            alert(sessionUser.message)
        }
    }

    return (
        <div>
            <HeaderTitle title="로그인" />
            <div>
                <form className=" p-8 flex flex-col ">
                    <div className=" mb-1">
                        <input
                            type="text"
                            id="loginId"
                            placeholder="아이디"
                            className=" mt-1 p-2 w-full h-11  border text-sm "
                            onChange={handleLoginId}
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호"
                            className="p-2 w-full h-11  border text-sm"
                            onChange={handlePassword}
                            required
                        />
                    </div>

                    <div>
                        <span className="ml-3">
                            <input type="checkbox" value="Y" className=" checked:bg-red-500 checked:border-0"></input>
                            <label className="ml-1  text-sm">아이디 저장</label>
                        </span>
                    </div>
                    <div className="mt-6">
                        <Buttons title="로그인" href="/" click={handleSumbit} />
                    </div>
                </form>

                <div className=" flex justify-center mt-4 space-x-1 text-xs">
                    <Link href="/user/findidform" passHref>
                        아이디 찾기
                    </Link>
                    <span>|</span>
                    <Link href="/user/findidform " passHref>
                        비밀번호 찾기
                    </Link>
                    <span>|</span>
                    <Link href="/user/signupintro">회원가입</Link>
                </div>
                <EasyIcon />

                <div className=" p-4 mt-20 ">
                    <button type="submit" className="relative w-full  h-12  bg-black text-white text-sm font-bold">
                        휴대폰 간편 로그인
                        <span className=" absolute top-0 right-2 text-white text-xs">AD</span>
                        <span className="text-gray-400 text-xs ml-1 ">광고</span>
                    </button>
                </div>

                <Link href="/user/nonuser" className=" flex mt-10 justify-center w-full  h-10  text-gray-400 text-xs">
                    비회원 조회하기
                </Link>
            </div>
        </div>
    )
}
export default Login
