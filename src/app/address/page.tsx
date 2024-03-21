import HeaderTitle from '@/components/ui/HeaderTitle'
import Link from 'next/link'
function Address() {
    return (
        <main>
            <HeaderTitle title="배송지 추가" />
            <div className="px-3">
                <ul>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">주소별칭</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input className="w-full h-4 " type="text" placeholder="주소별칭 입력" />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">받는 분</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input className="w-full h-4 " type="text" placeholder="받는 분 성함 입력" />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">휴대폰</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    type="number"
                                    placeholder="휴대폰(숫자만 입력)"
                                    max-length="20"
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">전화번호(선택)</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input className="w-full h-4 " type="number" placeholder="전화번호(숫자만 입력)" />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">배송주소</label>
                        </span>
                        <div className="relative pl-20 flex items-center">
                            <span className="inline-block flex-1 pr-2">
                                <span
                                    className="inline-block p-2 w-full leading-5"
                                    style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                                >
                                    {/* <Link href="/cart/address"/> */}
                                    <input type="number" className="w-full" />
                                </span>
                            </span>
                            <button className="inline-block h-9 w-20 ml-2 text-sm font-bold text-red-500 border border-red-500 bg-white rounded-md">
                                우편번호
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="py-3 text-center flex justify-between w-full mb-6">
                    <button className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        초기화
                    </button>
                    <button className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        취소
                    </button>
                    <button className="h-10 flex-1 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        등록
                    </button>
                </div>
            </div>
        </main>
    )
}
export default Address
