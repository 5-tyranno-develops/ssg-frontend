import HeaderTitle from '@/components/ui/HeaderTitle'
import Link from 'next/link'

function Findpw() {
    return (
        <div>
            <HeaderTitle title="비밀번호 재설정" />

            <div className="m-0 p-0 bg-gray-100">
                <div className=" p-5">
                    <p className=" mt-1 text-center font-bold text-sm">신세계포인트 통합회원 아이디</p>
                    <div className=" border  border-gray-300  p-6 mt-5 bg-white  text-center ">
                        <p className="ml-3 text-black">hyobin</p>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="p-2 mt-5">
                    <form>
                        <div className=" ">
                            <span className=" text-gray-500 text-xs">
                                <label>비밀번호</label>
                            </span>
                            <input
                                type="text"
                                placeholder="숫자, 영어 조합으로 8~20자리 입력해주세요."
                                className=" mt-1 p-3 w-full h-12  border text-sm "
                            />
                            <span className=" text-gray-500 text-xs">
                                <label>비밀번호 확인</label>
                            </span>
                            <input
                                type="text"
                                placeholder="비밀번호를 한번 더 입력해주세요."
                                className=" mt-1 p-3 w-full h-12  border text-sm"
                            />
                        </div>
                        <div>
                            <button type="submit" className="mt-5 w-full  h-12  text-white  bg-red-500 ">
                                확인
                            </button>
                        </div>
                        <div>
                            <h4 className="mt-5 font-bold border-b">
                                소중한 개인정보, <br /> 안전하게관리하세요!
                            </h4>
                            <ul className="mt-3 text-xs space-y-2">
                                <li>- 영어, 숫자, 특수문자 3가지 조합으로 비밀번호 사용하기</li>
                                <li>- 사이트마다 다른 비밀번호 사용하기</li>
                                <li>- 개인정보가 포함된 비밀번호 사용하지 않기</li>
                                <li>- 동일한 문자 또는 연속된 숫자로 비밀번호 사용하지 않기</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Findpw
