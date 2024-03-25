'use client'
import X_icon from '@/images/X_icon.png'
import Image from 'next/image'
import Link from 'next/link'

interface AddressModalProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}
function AddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
    const deliveryData = [
        {
            deliveryId: 1,
            isBaseDelivery: 11,
            deliveryName: '자취방',
            zipCode: 12345,
            deliveryBase: '서울시 강남구',
            deliveryDetail: '역삼동 123-456',
            receiverName: '홍길동',
            phoneNumber: '123-456-7890',
            homeNumber: 123456789,
        },
    ]
    return modalOpen ? (
        <div>
            <div className="bg-black/60 absolute inset-0 z-50">
                <div className="fixed inset-x-0 top-7 bottom-0 flex flex-col border rounded-t-lg bg-white">
                    {/* 모달 헤더 */}
                    <div
                        className="h-14 flex justify-center items-center"
                        style={{ borderBottom: '1px solid', borderBottomColor: '#d1d1d1' }}
                    >
                        <h3 className="font-bold right-4">배송지 변경</h3>
                        <button
                            className="absolute right-4"
                            onClick={() => {
                                setModalOpen(false)
                            }}
                        >
                            <Image src={X_icon} alt="클로즈" width={30} height={30}></Image>
                        </button>
                    </div>

                    <div className="flex w-full max-w-full max-h-full">
                        <ul className="block w-full">
                            {deliveryData.map((delivery) => (
                                <li
                                    key={delivery.deliveryId}
                                    className=" py-5 px-4 border"
                                    style={{ display: 'flex', fontSize: '13px' }}
                                >
                                    <label className="flex items-center">
                                        <div className="py-5">
                                            <input type="radio" className="block relative w-5 h-5" />
                                        </div>
                                        <div className="flex-col ml-4">
                                            <div>
                                                <strong>{delivery.deliveryName}</strong>
                                            </div>
                                            <p className="mt-1">
                                                [{delivery.zipCode}] {delivery.deliveryBase} {delivery.deliveryDetail}
                                            </p>
                                            <p className="mt-1">
                                                {delivery.receiverName} / {delivery.phoneNumber}
                                            </p>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="px-4">
                        <Link href={'/address'}>
                            <button className="w-full border h-14 mt-5" type="button">
                                <span className="text-sm font-light">+ 주소 추가하기</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}
export default AddressModal
