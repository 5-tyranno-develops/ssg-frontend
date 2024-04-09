'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CartItemsAtom } from '@/state/CartCheckedListAtom'
import { useRecoilValue } from 'recoil'
import { getDeliveryAddressAPI, getItemsOrderAPI, getOptionListAPI, orderComplete } from '@/actions/order'
import { OrderAddressDataType } from '@/types/AddressDataType'
import { OrderFormDataType } from '@/types/OrderDataTypte'
import { MyInfo } from '@/types/MyInfoDataType'
import { getMyInfo } from '@/actions/mypage'

export interface OptionType {
    color: string | null
    size: string | null
    additional_option: string | null
}

export default function DeliveryItemList() {
    const data = useRecoilValue(CartItemsAtom)
    const [productData, setProductData] = useState([]) as any[]
    const [deliveryAddress, setDeliveryAddress] = useState<OrderAddressDataType>()
    const [MyInfo, setMyInfo] = useState<MyInfo>()
    let total = 0
    const fetchOptions = async () => {
        const productLists = []

        for (const item of data) {
            const product = await getItemsOrderAPI(item.productId)
            const option = await getOptionListAPI(item.optionId)
            productLists.push({ ...product, ...item, ...option })
        }
        setProductData(productLists)
        const res = await getDeliveryAddressAPI()
        setDeliveryAddress(res)
        const myinfos = await getMyInfo()
        setMyInfo(myinfos as MyInfo)
    }
    useEffect(() => {
        fetchOptions()
    }, [])

    const discountmoney = (money: number, discount: number) => {
        const remoney = money * (1 - discount / 100)
        total += remoney
        return remoney
    }
    const handleSubmit = async () => {
        const orderOption = []
        for (const items of productData) {
            orderOption.push({
                optionId: items.optionId,
                count: items.count,
                money: items.money,
            })
        }
        const data: OrderFormDataType = {
            optionIdList: orderOption,
            deliveryRequest: 'dflkfld',
            deliveryBase: deliveryAddress?.deliveryBase || '',
            deliveryDetail: deliveryAddress?.deliveryDetail || '',
            zipCode: deliveryAddress?.zipCode || 0,
            receiverName: deliveryAddress?.receiverName || '',
            receiverPhoneNumber: deliveryAddress?.phoneNumber || '',
            orderName: MyInfo?.name || '',
            orderPhoneNumber: MyInfo?.phoneNumber || '',
            orderEmail: MyInfo?.email || '',
            totalMoney: total + 3000,
        }
        const res = await orderComplete(data)
        console.log(res)
    }

    return (
        <>
            {productData.map((product: any, index: number) => (
                <div className="bg-white mx-4" key={index}>
                    {index === 0 && (
                        <div className="flex justify-between pt-[15px] px-[16px]">
                            <span className="text-lg font-semibold">택배배송</span>
                        </div>
                    )}

                    <div className="flex px-4 py-4">
                        <Image
                            src={product.imageUrl}
                            alt="이미지1"
                            width={80}
                            height={80}
                            className="rounded-lg mr-3"
                        />

                        <div className="w-full flex flex-col justify-between text-sm mx-2">
                            {product.vendorName}
                            <div className="flex">
                                <span className="font-extrabold mr-2">{product.vendorName}</span>
                                <span>{product.productName}</span>
                            </div>

                            <div className="flex">
                                {product.color !== null ||
                                product.size !== null ||
                                product.additional_product !== null ? (
                                    <div className="flex">
                                        옵션:
                                        {product.color && <p>{product.color}</p>}
                                        {product.size && <p>{product.size}</p>}
                                        {product.additional_product && <p>{product.additional_option}</p>}
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <span className="line-through mr-2 text-[#666666]">{product.money}원</span>
                                    <span className="font-extrabold">
                                        {discountmoney(product.money, product.discount)}원
                                    </span>
                                </div>
                                <span className="text-[#666666]">수량 {product.count} 개</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

            <button
                className="bg-[#ff5452] w-full p-4 sticky right-0 left-0 bottom-0 z-10 text-center"
                onClick={handleSubmit}
            >
                <span className="text-white font-normal">
                    <span className="font-bold">{(total + 3000).toLocaleString()}원</span> 결제하기
                </span>
            </button>
        </>
    )
}
