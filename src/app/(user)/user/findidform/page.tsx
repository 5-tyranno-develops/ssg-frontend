import Agree from '@/components/pages/signup/auth/Agree'
import Authphone from '@/components/pages/findUser/AuthPhone'
import './../signupintro/auth/terms.css'
import React from 'react'
import HeaderTitle from '@/components/ui/HeaderTitle'

export default function findIdform() {
    return (
        <main>
            <HeaderTitle title="아이디/비밀번호 찾기" />

            <div className="non-header">
                <Agree />
                <Authphone />
            </div>
        </main>
    )
}
