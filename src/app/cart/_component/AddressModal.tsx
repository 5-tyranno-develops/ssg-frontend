'use client'
import X_icon from '@/images/X_icon.png'
import Image from 'next/image'

interface AddressModalProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}
function AddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
    const deliveryData = {
        deliveryId: 1,
        isBaseDelivery: 11,
        deliveryName: '자취방',
        zipCode: 12345,
        deliveryBase: '서울시 강남구',
        deliveryDetail: '역삼동 123-456',
        receiverName: '홍길동',
        phoneNumber: 123456789,
        homeNumber: 123456789,
    }
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

                    {/* 모달 바디 */}
                    <div className="flex w-full max-w-full max-h-full">
                        <ul className="block">
                            <li style={{ display: 'flex', fontSize: '13px' }}>
                                <label className="flex items-center">
                                    <div className="py-5 px-4">
                                        <input type="radio" className="block relative w-5 h-5" />
                                    </div>
                                    <div className="flex-col ml-4">
                                        <div>
                                            <strong>자취방</strong>
                                        </div>
                                        <p>[13213] 부산광역시 수영구 1103호</p>
                                        <p>홍길동 / 010-1234-4567</p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}
export default AddressModal
