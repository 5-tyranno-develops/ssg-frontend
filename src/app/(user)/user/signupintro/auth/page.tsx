import HeaderTitle from '@/components/ui/HeaderTitle'
import './terms.css'
import React from 'react'

import Agree from '../../../../../components/pages/signup/auth/Agree'
import Authphone from '../../../../../components/pages/signup/auth/Authphone'
function Auth() {
    return (
        <main>
            <HeaderTitle title="신세계포인트 통합회원 가입" />
            <div className="non-header">
                <Agree />
                <Authphone />

                <div>
                    <ul>
                        <li className="text-sm">본인 명의의 휴대폰 정보를 정확히 입력하여 주시기 바랍니다.</li>
                        <li className="text-sm">
                            타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌(3년 이하의 징역형 또는
                            1천만원 이하의 벌금형) 받을수 있습니다.
                        </li>
                        <li className="text-sm">인증문의 : (주)KCB고객센터(02-708-1000)</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Auth
