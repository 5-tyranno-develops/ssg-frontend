'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
export default function Recent() {
    const productData = [
        {
            productId: 1,
            vendorName: 'H&M',
            name: '비스코스 셔츠 드레스 카키 그린/패턴 1213391003',
            price: 34900,
            discount: 0,
            imageUrl: 'https://sitem.ssgcdn.com/87/77/06/item/1000583067787_i1_750.jpg',
        },
        {
            productId: 2,
            vendorName: 'S BLANC',
            name: '[최초가:458000원]Freesia / Pleated Detail Puff Sleeves Dress',
            price: 304570,
            discount: 10,
            imageUrl: 'https://sitem.ssgcdn.com/70/99/40/item/1000583409970_i1_750.jpg',
        },
    ]

    const router = useRouter()
    const back = () => {
        router.back()
    }
    const [deleted, setDeleted] = useState(false)
    const [checkedItem, setCheckedItem] = useState<number[]>([])

    const handleEditClick = () => {
        setDeleted(!deleted)
    }
    const checkItemhandler = (id: number, ischecked: boolean) => {
        console.log(id, ischecked)
        if (ischecked) {
            setCheckedItem((prev) => [...prev, id])
        } else {
            setCheckedItem(checkedItem.filter((item) => item !== id))
        }
    }

    return (
        <>
            <div className=" bg-gray-100 p-4">
                <div className="flex items-center ">
                    <span onClick={back}>
                        <Image width="35" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" />
                    </span>
                    <p className="flex-grow  text-lg text-center font-bold">최근 본 상품</p>
                    <button className="flex" onClick={handleEditClick}>
                        {deleted ? (
                            <>
                                <p>취소</p>
                                <Image
                                    width="20"
                                    height="50"
                                    src="https://img.icons8.com/ios/50/cancel.png"
                                    alt="취소"
                                />
                            </>
                        ) : (
                            <>
                                <p>편집</p>
                                <Image
                                    width="20"
                                    height="30"
                                    src="https://img.icons8.com/ios/50/settings--v1.png"
                                    alt="편집"
                                />
                            </>
                        )}
                    </button>
                </div>
                {deleted && (
                    <div className="flex  justify-between  space-x-2 mt-4">
                        <button className="bg-white h-10 rounded-lg w-full text-gray-500 ">선택 삭제</button>
                        <hr />
                        <button className="bg-red-500 h-10 rounded-lg w-full text-white">전체 삭제</button>
                    </div>
                )}

                {productData.map((product) => (
                    <div key={product.productId}>
                        <div className="flex justify-between bg-white rounded w-full  mt-4">
                            {deleted && (
                                <label className="relative mr-4">
                                    <input
                                        type="checkbox"
                                        key={product.productId}
                                        onChange={() =>
                                            checkItemhandler(
                                                product.productId,
                                                !checkedItem.includes(product.productId) ? true : false,
                                            )
                                        }
                                        checked={checkedItem.includes(product.productId)}
                                        className="absolute top-3 left-2 w-4 h-4"
                                    />
                                </label>
                            )}
                            <Link href="./" className="flex justify-between w-full" passHref>
                                <div className=" max-w-56 text-sm p-3">
                                    [{product.vendorName}] {product.name}
                                    <p className="mt-1 font-semibold">
                                        {(product.price * (1 - product.discount / 100)).toLocaleString()}원
                                    </p>
                                </div>
                                <Image src={product.imageUrl} alt="상품썸네일" width={100} height={100}></Image>
                            </Link>

                            <div className="flex flex-col">
                                <button className="flex justify-center items-center  w-14 h-14">
                                    <Image
                                        width="24"
                                        height="48"
                                        src="https://img.icons8.com/parakeet-line/48/shopping-cart.png"
                                        alt="장바구니"
                                    />
                                </button>
                                <hr></hr>
                                <button className="flex justify-center items-center w-14 h-14">
                                    <Image
                                        width="24"
                                        height="32"
                                        src="https://img.icons8.com/windows/32/like--v1.png"
                                        alt="좋아요"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
