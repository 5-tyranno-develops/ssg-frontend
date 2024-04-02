import FindUserResult from '@/components/pages/findUser/FindUserResult'
import HeaderTitle from '@/components/ui/HeaderTitle'
import Link from 'next/link'

function Findid() {
    return (
        <div>
            <HeaderTitle title="아이디 찾기 결과" />

            <div className="m-0 p-0 bg-gray-100 flex-col">
                <div className=" p-5 ">
                    <ul className=" border  border-gray-400 rounded-md p-6  bg-white shadow-md  text-center ">
                        <li>
                            <p className="text-xs text-gray-500">고객님께서 가입하신 아이디입니다.</p>
                            <FindUserResult />
                        </li>
                    </ul>
                    <div className="flex mt-5 space-x-2 justify-center">
                        <Link href="/user/findpw">
                            <button type="submit" className=" w-96  h-12 text-white font-bold bg-gray-400">
                                비밀번호 재설정
                            </button>
                        </Link>
                        <Link href="/user/login">
                            <button type="submit" className="w-96  h-12 text-white font-bold bg-red-500">
                                로그인
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Findid
