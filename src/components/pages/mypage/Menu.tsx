import Image from 'next/image'

function Menu() {
    const MenuIcon = [
        { id: 1, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg', alt: '좋아요' },
        { id: 2, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_freq.svg', alt: '자주구매' },
        { id: 3, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_event.svg', alt: '이벤트현황' },
        { id: 4, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_qna.svg', alt: '상품Q&A' },
        { id: 5, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_alert.svg', alt: '입고알림' },
        { id: 6, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_gift.svg', alt: '선물함' },
        { id: 7, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_giftcard.svg', alt: '상품권전환' },
        { id: 8, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_albi.svg', alt: '알비백관리' },
        { id: 9, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_delivery.svg', alt: '배송지관리' },
        { id: 10, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_regular_delivery.svg', alt: '정기배송관리' },
        { id: 11, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_notification.svg', alt: '알림함' },
        { id: 12, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_chat.svg', alt: '고객센터톡' },
        { id: 13, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_universe.svg', alt: '유니버스클럽' },
        { id: 14, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_modify.svg', alt: '회원정보변경' },
        { id: 15, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_manage.svg', alt: '내정보관리' },
    ]
    return (
        <section>
            <p className="font-bold text-2xl">자주찾는 메뉴</p>
            <div className="grid grid-cols-5 gap-y-3 gap-x-2 mb-10 mt-2">
                {MenuIcon.map((icon) => (
                    <div key={icon.id} className="">
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            width={61}
                            height={61}
                        />
                        <p className="text-sm text-center">{icon.alt}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center border py-2 rounded-xl">
                <p className="flex-1 text-center text-sm">고객센터</p>
                <p className="text-gray-200 text-sm">|</p>
                <p className="flex-1 text-center text-sm">e-mail 상담/답변</p>
            </div>
        </section>
    )
}

export default Menu
