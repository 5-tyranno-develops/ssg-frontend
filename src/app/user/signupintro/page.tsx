import React from 'react'
import Image from 'next/image'
import signupcoupon from '@/images/signupcoupon.png'
import HeaderTitle from '@/components/ui/HeaderTitle'
import Link from 'next/link'
import Buttons from '@/components/ui/buttons'

function Signup() {
    return (
        <div>
            <HeaderTitle title="회원가입" />
            <h3 style={{ padding: '2%', fontWeight: 'bold', fontSize: '20px' }}>
                믿고 사는 즐거움 <br />
                SSG.COM에 오신것을 환영합니다.
            </h3>
            <div>
                <Image src={signupcoupon} alt="할인쿠폰안내" width={400} height={300} />
            </div>
            <div>
                <span>
                    <Buttons title="멤버십 혜택 받고 통합회원 가입하기" />
                </span>
                <label>
                    <button className="button-groups" style={{ backgroundColor: '#f0f0f0' }}>
                        <Link href="/user/signupintro/auth"> 통합회원만 가입하기 </Link>
                    </button>
                </label>
            </div>
        </div>
    )
}

export default Signup
