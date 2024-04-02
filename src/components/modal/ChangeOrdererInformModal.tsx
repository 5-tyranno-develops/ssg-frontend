import Image from "next/image"
import HeaderToBackInModal from "../ui/HeaderToBackInModal"

interface props{
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
}

export default function ChangeOrdererInformModal({modalOpen, setModalOpen}:props){

    return modalOpen ? (
        <div>
            <div className="bg-black/60 absolute inset-0 z-50">
                <div className="fixed inset-x-0 top-0 bottom-0 flex flex-col border  bg-white">

                <HeaderToBackInModal title="주문자정보 변경" setModalOpen={setModalOpen} />

                    <form>
                        <div className='mt-[40px] px-[16px]'>
                            <h1 className='text-[21px] tracking-[-0.3px] font-bold'>어느 분에게 <br/>주문 알림을 보내드릴까요?</h1>

                        </div>

                        <div className='my-[20px] px-[16px]'>
                            <h3 className="font-bold mb-3">주문자명</h3>
                            <input type="text" name="name" placeholder="성명을 입력해 주세요" className="border-[1px] w-full h-10 p-4 text-[14px] tracking-[-0.3px] leading-normal"/>
                        </div>

                        <div className='my-[20px] px-[16px]'>
                            <h3 className="font-bold mb-3">휴대전화번호</h3>
                            <div className="w-full flex">
                                <input type="text" name="phone1" className="border-[1px] w-1/3 mx-1 h-10 p-4 text-[14px] tracking-[-0.3px] leading-normal"/>
                                <input type="text" name="phone2" className="border-[1px] w-1/3 mx-1 h-10 p-4 text-[14px] tracking-[-0.3px] leading-normal"/>
                                <input type="text" name="phone3" className="border-[1px] w-1/3 mx-1 h-10 p-4 text-[14px] tracking-[-0.3px] leading-normal"/>
                            </div>
                        </div>

                        <div className='my-[20px] px-[16px]'>
                            <h3 className="font-bold mb-3">이메일주소</h3>
                            <input type="email" name="email" placeholder="예) email@ssg.com" className="border-[1px] w-full h-10 p-4 text-[14px] tracking-[-0.3px] leading-normal"/>
                        </div>

                        <div className='my-[20px] px-[16px]'>
                            <h3 className="font-bold mb-3">품절시 환불</h3>
                            <div className="flex items-center mb-2">
                                <input type="radio" className="w-[18px] h-[18px] accent-red-500 peer" name="refundtype"/>
                                <span className="mx-2 text-sm peer-checked:font-bold">주문시 결제수단으로 환불</span>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" className="w-[18px] h-[18px] accent-red-500 peer" name="refundtype"/>
                                <span className="mx-2 text-sm peer-checked:font-bold">SSG MONEY로 환불</span>
                            </div>
                        </div>
                    </form>

                    <button 
                    className='bottom-0 left-0 right-0 fixed h-14 z-50 bg-[#ff5452] text-white font-semibold'
                    onClick={() => {
                        setModalOpen(false)
                    }}>
                        변경하기
                    </button>

                </div>
            </div>
        </div>
    ) : null

}