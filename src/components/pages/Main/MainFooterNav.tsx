import { MainFooterNavData } from '@/lib/MainFooterNavData'
import Image from 'next/image'

export default function MainFooterNav() {
    return (
        <nav className="z-[1] fixed right-0 left-0 bottom-0 bg-white w-full h-16">
            <ul className="flex justify-between " style={{ whiteSpace: 'nowrap' }}>
                {MainFooterNavData.map((navs) => {
                    return (
                        <li key={navs.id} className="flex w-80 h-[50px] justify-center items-center">
                            <button className="flex ">
                                <a className=" relative  w-7 h-6 " href={navs.url}>
                                    <Image src={navs.icon_url} alt="menu" fill />
                                    <span className="flex mt-7 justify-center  text-xs">{navs.title}</span>
                                </a>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
