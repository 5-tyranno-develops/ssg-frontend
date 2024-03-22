import React from 'react'
import Image from 'next/image'
import signupcoupon from '@/images/signupcoupon.png'
import HeaderTitle from '@/components/ui/HeaderTitle'
import Buttons from '@/components/ui/buttons'

function Signup() {
    return (
        <main>
            <HeaderTitle title="회원가입" />
            <h3 style={{ padding: '2%' }}>
                믿고 사는 즐거움 <br />
                SSG.COM에 오신것을 환영합니다.
            </h3>

            <Image src={signupcoupon} alt="할인쿠폰안내" width={400} height={300} />

            <span>
                <Buttons title="멤버십 혜택 받고 통홥회원 가입하기" href="/user/signupintro/auth" />
            </span>
            <label>
                <Buttons title="통합회원만 가입하기" color="#f0f0f0" href="/user/signupintro/auth" />
            </label>
        </main>
    )
}

export default Signup
