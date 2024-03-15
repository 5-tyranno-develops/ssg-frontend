import HeaderTitle from '@/components/ui/HeaderTitle'
import React from 'react'
import Link from 'next/link'
import NaverIcon from '@/images/NaverSvg'
import KakaoIcon from '@/images/KakaoSvg'
import AppleIcon from '@/images/AppleSvg'
import TossIcon from '@/images/TossSvg'
import PhoneIcon from '@/images/PhoneSvg'

function Login() {
    return (
        <div>
            <HeaderTitle title="로그인" />
            <div>
                <form className=" p-8 flex flex-col  ">
                    <div className=" mb-1">
                        <input type="text" placeholder="아이디" className=" mt-1 p-2 w-full h-12  border text-sm " />
                        <input type="text" placeholder="비밀번호" className="p-2 w-full h-12  border text-sm" />
                    </div>

                    <div>
                        <span className="ml-3">
                            <input type="checkbox" value="Y" className=" checked:bg-red-500 checked:border-0"></input>
                            <label className="ml-1  text-sm">아이디 저장</label>
                        </span>
                    </div>
                    <div>
                        <button type="submit" className="mt-5 w-full  h-12  text-white  bg-red-500 font-bold">
                            로그인
                        </button>
                    </div>

                    <div className=" flex justify-center mt-4 space-x-1 text-xs">
                        <Link href="/user/findid" passHref>
                            아이디 찾기
                        </Link>
                        <span>|</span>
                        <Link href="/user/findpw " passHref>
                            비밀번호 찾기
                        </Link>
                        <span>|</span>
                        <a>회원가입</a>
                    </div>
                </form>

                <ul className=" flex justify-center mt-4 space-x-7 text-xs">
                    <li>
                        <a>
                            <span>
                                <NaverIcon />
                            </span>
                            <span className="m-2 ">네이버</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <KakaoIcon />
                            </span>
                            <span className="m-2">카카오</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <AppleIcon />
                            </span>
                            <span className="m-3">애플</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <TossIcon />
                            </span>
                            <span className="m-3">토스</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <PhoneIcon />
                            </span>
                            <span className="m-2">휴대폰</span>
                        </a>
                    </li>
                </ul>

                <div className=" p-4 mt-20 ">
                    <button type="submit" className="relative w-full  h-12  bg-black text-white text-sm font-bold">
                        휴대폰 간편 로그인
                        <span className=" absolute top-0 right-2 text-white text-xs">AD</span>
                        <span className="text-gray-400 text-xs ml-1 ">광고</span>
                    </button>
                </div>

                <a className=" flex mt-10 ">
                    <Link href="/user/nonuser" className="flex justify-center w-full  h-10  text-gray-400 text-xs">
                        비회원 조회하기
                    </Link>
                </a>
            </div>
        </div>
    )
}
export default Login
