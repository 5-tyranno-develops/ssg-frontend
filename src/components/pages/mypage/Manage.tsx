import Link from 'next/link'
function Manage() {
    const ManageList = [
        {
            id: 1,
            title: '나의 주문관리',
            items: [
                { name: '주문/배송조회', src: '/' },
                { name: '구매 내역', src: '' },
                { name: '항공권 예약조회', src: '' },
                { name: '호텔 예약조회', src: '' },
                { name: '선물함', src: '' },
                { name: '자주구매 상품', src: '' },
                { name: '정기배송 설정 관리', src: '' },
            ],
        },
        {
            id: 2,
            title: '나의 혜택관리',
            items: [
                { name: '쿠폰주문/배송조회', src: '/' },
                { name: 'SSG MONEY', src: '' },
                { name: '신세계포인트', src: '' },
                { name: '미식 MONEY', src: '' },
                { name: '맘키즈 클럽 관리', src: '' },
                { name: 'SSG VOUCHER', src: '' },
            ],
        },
        {
            id: 3,
            title: '나의 활동관리',

            items: [
                { name: '좋아요', src: '/' },
                { name: '상품리뷰', src: '' },
                { name: '새벽배송 알비백 관리', src: '' },
                { name: '이벤트 참여현황', src: '' },
                { name: 'e-mail 답변확인', src: '' },
                { name: '상품 Q&A', src: '' },
                { name: '입고알림내역', src: '' },
                { name: '우르르 앵콜내역', src: '' },
                { name: '행사알림내역', src: '' },
            ],
        },
        {
            id: 4,
            title: '나의 정보관리',
            items: [
                { name: '회원정보 변경', src: '/mypage/manage/myinfochange' },
                { name: '비밀번호 변경', src: '' },
                { name: '배송지 관리', src: '' },
                { name: '맞춤정보 관리', src: '' },
                { name: '마켓팅 수신 동의', src: '' },
                { name: '개인정보 제3자 제공 동의', src: '' },
                { name: '제휴 멤버십 관리', src: '' },
                { name: '로그인 정보 관리', src: '' },
                { name: 'SNS 연결 설정', src: '' },
                { name: '회원탈퇴', src: '' },
                { name: '개인정보 관리', src: '/mypage/manage/myinfochange' },
            ],
        },
    ]
    return (
        <section className="p-4">
            {ManageList.map((list, index) => (
                <div key={list.id} className="mt-4">
                    <h3 className="font-bold mb-3 text-xl ">{list.title}</h3>
                    <ul className="grid grid-cols-2 gap-2 text-gray-500 mb-4">
                        {list.items?.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.src} className="text-lg">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {index !== ManageList.length - 1 && <div className=" border"></div>}
                </div>
            ))}
        </section>
    )
}
export default Manage
