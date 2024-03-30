import Image from 'next/image'
import Link from 'next/link'
// import AddressList from '../AddressList'
import HeaderToBackInModal from '../ui/HeaderToBackInModal'

interface AddressModalProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}
function SelectAddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
    return modalOpen ? (
        <div>
            <div className="bg-black/60 absolute inset-0 z-50">
                <div className="fixed inset-x-0 top-0 bottom-0 flex flex-col border  bg-white">
                    <HeaderToBackInModal title="배송지 선택" setModalOpen={setModalOpen} />
                    <div className="pt-[40px] px-[16px] mb-[16px]">
                        <h1 className="text-[24px] tracking-[-0.3px] font-bold">어디로 보내드릴까요?</h1>
                    </div>

                    <Link href={'/address'} className="flex text-[14px] ml-2">
                        + 신규배송지등록
                    </Link>
                    {/* 
                    <AddressList
                        addressAliase="집"
                        name="홍길동"
                        address="[555555] 부산광역시 해운대구 센텀리더스마크 4층"
                        phone="010-0000-0000"
                    />
                    <AddressList
                        addressAliase="회사"
                        name="홍길동"
                        address="[555555] 부산광역시 해운대구 센텀리더스마크 4층"
                        phone="010-0000-0000"
                    />
                    <AddressList
                        addressAliase="학교"
                        name="홍길동"
                        address="[555555] 부산광역시 해운대구 센텀리더스마크 4층"
                        phone="010-0000-0000"
                    /> */}

                    <button
                        className="bottom-0 left-0 right-0 fixed h-14 z-50 bg-[#ff5452] text-white font-semibold"
                        onClick={() => {
                            setModalOpen(false)
                        }}
                    >
                        변경하기
                    </button>
                </div>
            </div>
        </div>
    ) : null
}
export default SelectAddressModal
