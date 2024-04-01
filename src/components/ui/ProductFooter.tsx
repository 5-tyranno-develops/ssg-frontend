'use client'
import Image from 'next/image'
import HeartIcon from '@/images/HeartIcon.png'
import { useState } from 'react'
import ProductOptions from '../pages/product/ProductOptions'


function ProductFooter() {
    const [isModal, setIsModal] =useState(false)

    const clickModal = () => setIsModal(!isModal)

    return (
        <section>
            <div className="fixed bottom-0 w-screen z-[900] ">
                <ul className="flex items-center h-12">
                    <li className=" flex justify-center items-center w-14 bg-white h-12">
                        <Image src={HeartIcon} alt="하트아이콘"></Image>
                    </li>
                    <button className="flex justify-center items-center font-semibold text-white bg-red-500 flex-grow h-12" onClick={clickModal}>
                        구매하기
                    </button>
                </ul>
            </div>

            {isModal && <ProductOptions clickModal={clickModal} />}
        </section>  
    )
}
export default ProductFooter
