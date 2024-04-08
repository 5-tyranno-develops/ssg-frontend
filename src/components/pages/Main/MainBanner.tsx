import Image from 'next/image'
function MainBanner() {
    return (
        <section className="m-4">
            <div className=" relative w-full h-24 ">
                <Image
                    src={
                        'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202307/2023072514344365854650363565_696.jpg&w=750&h=0'
                    }
                    alt="메인베너"
                    fill
                />
            </div>
        </section>
    )
}
export default MainBanner
