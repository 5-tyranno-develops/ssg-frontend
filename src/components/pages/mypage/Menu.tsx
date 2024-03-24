import Image from 'next/image'

function Menu() {
     const MenuIcon = [
          {id : 1 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '좋아요'},
          {id : 2 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_freq.svg" ,alt: '자주구매'},
          {id : 3 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '이벤트현황'},
          {id : 4 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '상품QnA'},
          {id : 5 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '입고알림'},
          {id : 6 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '선물함'},
          {id : 7 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '상품권전환'},
          {id : 8 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '알비백관리'},
          {id : 9 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '배송지관리'},
          {id : 10 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '정기배송관리'},
          {id : 11 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '알림함'},
          {id : 12 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '고객센터톡'},
          {id : 13 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '유니버스클럽'},
          {id : 14 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '회원정보변경'},
          {id : 15 , src :"https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg" ,alt: '내정보관리'},
     ]
    return (
        <section className="p-4">
            <div className="grid grid-cols-5 gap-y-3 gap-x-2 mb-40 ">
                <Image
                    src="https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg"
                    alt="좋아요"
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default Menu
