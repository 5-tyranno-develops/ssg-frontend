import { MainFooterNavData } from '@/lib/MainFooterNavData'
export default function MainFooterNav() {
    return (
        <nav className="z-[1] fixed right-0 left-0 bottom-0 bg-white w-full px-3">
            <ul className="flex justify-between  " style={{ whiteSpace: 'nowrap' }}>
                {MainFooterNavData.map((navs) => {
                    return (
                        <li key={navs.id}>
                            <a className="relative items-center" href={navs.url}>
                                {/* <Image width={26} height={26} src="https://img.icons8.com/metro/26/menu.png" alt="menu" /> */}
                                <span className="">{navs.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
