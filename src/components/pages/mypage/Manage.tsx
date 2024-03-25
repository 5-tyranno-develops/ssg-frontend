import Link from 'next/link'
function Manage() {
    const ManageList = [
        {
            id: 1,
            title: '나의 주문관리',
            items: [
                '주문/배송조회',
                '구매 내역',
                '항공권 예약조회',
                '호텔 예약조회',
                '선물함',
                '자주구매 상품',
                '정기배송 설정 관리',
            ],
        },
        { id: 2, title: '나의 혜택관리', items: ['쿠폰', 'SSG MONEY', '신세계포인트', '미식 MONEY', 'SSG VOUCHER'] },
        {
            id: 3,
            title: '나의 활동관리',
            items: [
                '좋아요',
                '상품리뷰',
                '새벽배송 알비백 관리',
                '이벤트 참여현황',
                'e-mail 답변확인',
                '상품 Q&A',
                '입고알림내역',
                '우르르 앵콜내역',
                '행사알림내역',
            ],
        },
        {
            id: 4,
            title: '나의 정보관리',
            items: [
                '회원정보 변경',
                '비밀번호 변경',
                '배송지 관리',
                '맞춤정보 관리',
                '마케팅 정보 수신 동의',
                '제휴 멤버십 관리',
                '로그인 정보 관리',
                'SNS 연결 설정',
                '회원 탈퇴',
                '개인정보 관리',
            ],
        },
    ]
    return (
        <section>
            {ManageList.map((list, index) => (
                <div key={list.id} className="mt-4">
                    <h3 className="font-extrabold mb-3">{list.title}</h3>
                    <ul className="grid grid-cols-2 gap-2  text-gray-500 mb-4">
                        {list.items?.map((item, idx) => (
                            <li key={idx} className="">
                                <Link href="#">{item}</Link>
                            </li>
                        ))}
                    </ul>
                    {index !== ManageList.length - 1 && <div className="border"></div>}
                </div>
            ))}
        </section>
    )
}
export default Manage
