import ChangePassword from '@/components/pages/findUser/ChagePassword'
import FindUserResult from '@/components/pages/findUser/FindUserResult'
import HeaderTitle from '@/components/ui/HeaderTitle'

function Findpw() {
    return (
        <div>
            <HeaderTitle title="비밀번호 재설정" />

            <div className="m-0 p-0 bg-gray-100">
                <div className=" p-5">
                    <p className=" mt-1 text-center font-bold text-sm">신세계포인트 통합회원 아이디</p>
                    <div className=" border  border-gray-300  p-6 mt-5 bg-white  text-center ">
                        <FindUserResult />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="p-2 mt-5">
                    <ChangePassword />
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
                </div>
            </div>
        </div>
    )
}

export default Findpw
