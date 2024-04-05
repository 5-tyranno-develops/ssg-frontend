import NaverIcon from '@/images/NaverSvg'
import AppleIcon from '@/images/AppleSvg'
import Image from 'next/image'
import KakaoIcon from '@/images/kakaoIcon.png'
import TossIcon from '@/images/tossIcon.png'
import PhoneIcon from '@/images/phoneIcon.png'
import { signIn } from 'next-auth/react'

function EasyIcon() {
    return (
        <ul className=" flex justify-center mt-4 text-xs">
            <li>
                <div className="mb-2">
                    <NaverIcon />
                </div>
                <span className="m-2 ">네이버</span>
            </li>
            <li>
                <div className="mb-2" onClick={() => signIn('kakao')}>
                    <Image src={KakaoIcon} alt="카카오아이콘" className="w-51 h-51" />
                </div>
                <span className="ml-2">카카오</span>
            </li>
            <li>
                <div className="mb-2">
                    <AppleIcon />
                </div>
                <span className="m-3">애플</span>
            </li>
            <li>
                <div className="mb-2">
                    <Image src={TossIcon} alt="토스아이콘" className="w-51 h-51" />
                </div>
                <span className="m-3">토스</span>
            </li>
            <li>
                <div className="mb-2">
                    <Image src={PhoneIcon} alt="휴대폰아이콘" className="w-51 h-51"></Image>
                </div>
                <span className="m-2">휴대폰</span>
            </li>
        </ul>
    )
}
export default EasyIcon
