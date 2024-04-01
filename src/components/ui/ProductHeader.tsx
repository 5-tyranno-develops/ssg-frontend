import Image from 'next/image'
import BackIcon from '@/images/Back'
import CartIcon from '@/images/CartIcon.png'
import SearchIcon from '@/images/SearchIcon.png'

function ProductHeader() {
    return (
        <section>
            <div className="fixed top-0 w-full flex items-center justify-between h-12  font-bold bg-white px-2 z-[900]">
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
            </div>
        </section>
    )
}
export default ProductHeader
