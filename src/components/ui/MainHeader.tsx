'use client'
import Image from 'next/image'
import Link from 'next/link'

function MainHeader() {
    return (
        <div className="flex flex-1 items-center">
            <Link href={'/'}>
                <img
                    className="m-3 "
                    src={
                        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006'
                    }
                    alt="ssg 로고"
                    width={86}
                    height={40}
                />
            </Link>
            <div className="relative w-full pl-5">
                <input type="text" className="bg-gray-100 rounded-full w-full pl-5 pr-4 py-2" />
                <button className="absolute inset-y-0 right-4 flex items-center ">
                    <Image src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" width={24} height={24} />
                </button>
            </div>
            {/* <div className="relative p-2"> */}
            <Image
                className=" m-2"
                width={22}
                height={22}
                src="https://img.icons8.com/fluency-systems-regular/48/chatbot.png"
                alt="chatbot"
            />
            <Link href={'/cart'} className="m-2">
                <Image
                    width={36}
                    height={36}
                    src="https://img.icons8.com/windows/32/shopping-cart.png"
                    alt="shopping-cart"
                />
            </Link>
        </div>
    )
}

export default MainHeader
