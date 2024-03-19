import Image from 'next/image'
import HeartIcon from '@/images/HeartIcon.png'
export default function ProductBottomHeader() {
    return (
        <div>
            <ul className="flex items-center h-12">
                <li className=" flex justify-center items-center w-14 bg-white h-12">
                    <Image src={HeartIcon} alt="하트아이콘"></Image>
                </li>

                <li className="flex justify-center items-center bg-red-500 flex-grow h-12">
                    <span className=" font-semibold text-white">구매하기</span>
                </li>
            </ul>
        </div>
    )
}
