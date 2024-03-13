import HeaderTitle from '@/components/ui/HeaderTitle'
import React from "react";

function Login() {
    return (
        <main>
            <HeaderTitle title="로그인" />
            <div>
                <form className='  p-8 flex flex-col  '>
                    <div className=' mb-1'>
                        <input type="text" placeholder="아이디" className=' mt-1 p-2 w-full h-12  border text-sm '/>
                        <input type="text" placeholder="비밀번호" className='p-2 w-full h-12  border text-sm'/>

                    </div>

                    <div>
                        <span className='ml-3'>
                            <input type="checkbox" value="" className=' rounded-full checked:bg-red-500'></input>
                            <label  className="ml-1  text-sm">아이디 저장</label>
                        </span>
                    </div>
                    <div>
                        <button
                            type="submit" className='mt-5 w-full  h-12  text-white  bg-red-500 font-bold' >
                            로그인
                        </button>
                    </div>

                    <div className=' flex justify-center mt-4 space-x-1 text-xs'>
                        <a>아이디 찾기</a>
                        <span >|</span>
                        <a>비밀번호 찾기</a>
                        <span >|</span>
                        <a>회원가입</a>
                    </div>
                </form>
          

                <ul className=' flex justify-center mt-4 space-x-5 text-xs'>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>네이버</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>카카오</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>애플</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>토스</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>휴대폰</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>
                                <span></span>
                            </span>
                            <span>네이버</span>
                        </a>
                    </li>
                </ul>

                <div className=' p-4 mt-20 '>
                    
                    <button type="submit" className='relative w-full  h-12  bg-black text-white text-sm font-bold'>
                        휴대폰 간편 로그인
                        <span className=' absolute top-0 right-2 text-white text-xs'>AD</span>
                        <span className='text-gray-400 text-xs ml-1 '>광고</span>
                    </button>
                </div>

                <a className=' flex mt-10 '>
                    <span className='flex justify-center w-full  h-10  text-gray-400 text-xs' >비회원 조회하기</span>
                </a>
            </div>
        </main>
    )
}
export default Login
