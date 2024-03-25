import X_icon from '@/images/X_icon.png'
import Image from 'next/image'
import Link from 'next/link'
import AddressList from './AddressList'

interface AddressModalProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}
function AddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
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

                    <AddressList />

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
