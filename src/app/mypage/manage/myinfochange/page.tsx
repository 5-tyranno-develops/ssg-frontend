import ChangeInfo from '@/components/pages/mypage/ChangeInfo'
export default function MyInfoChange() {
    return (
        <main style={{ backgroundColor: '#dfe6e9' }}>
            <ChangeInfo />
            <div className="mt-4">
                <div className="bg-white">
                    <h3 className="p-4 text-base font-bold" style={{ borderBottom: '1px solid #c6e6e6' }}>
                        회원정보변경 안내
                    </h3>
                    <div className="p-4" style={{ color: '#666', fontSize: '14px' }}>
                        <ul>
                            <li className="py-1">
                                º 신세계포인트 회원 주소 정보는 신세계포인트 사이트에서 변경하실 수 있습니다.
                            </li>
                            <li className="py-1">
                                º 배송지 정보는 '나의 정보관리 - 배송지 관리' 메뉴에서 추가/수정/삭제하실 수 있습니다.
                            </li>
                            <li className="py-1">
                                º 주문 정보는 회원 정보에 등록된 휴대폰번호 및 이메일주소로 안내됩니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
