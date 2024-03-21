import Image from 'next/image'
import BackIcon from '@/images/back'
import CartIcon from '@/images/CartIcon.png'
import SearchIcon from '@/images/SearchIcon.png'
import HeartIcon from '@/images/HeartIcon.png'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <div className="fixed top-0 w-full flex items-center justify-between h-12  font-bold bg-white px-2 z-[900]">
                <span className="ml-4">
                    <BackIcon />
                </span>

                <div className="flex justify-center flex-grow space-x-5">
                    <p>상세</p>
                    <p>리뷰</p>
                    <p>Q&A</p>
                </div>

                <span className="mr-2">
                    <Image src={CartIcon} alt="장바구니아이콘" width={24} height={24} />
                </span>

                <span>
                    <Image src={SearchIcon} alt="검색아이콘" width={24} height={24} />
                </span>
            </div> */}
            {children}
            <div className="fixed bottom-0 w-full z-[900]">
                <ul className="flex items-center h-12">
                    <li className=" flex justify-center items-center w-14 bg-white h-12">
                        <Image src={HeartIcon} alt="하트아이콘"></Image>
                    </li>

                    <li className="flex justify-center items-center bg-red-500 flex-grow h-12">
                        <span className=" font-semibold text-white">구매하기</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
