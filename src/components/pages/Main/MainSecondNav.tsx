import { secondNavData } from '@/lib/MainSecondNavData'

export default function MainSecondNav() {
    return (
        <nav className="sticky  left-0 top-0 ">
            <ul className="flex p-4  justify-between overflow-x-scroll" style={{ whiteSpace: 'nowrap' }}>
                {secondNavData.map((navs) => {
                    return (
                        <div className="">
                            <li key={navs.id} className="mr-5  ">
                                <a className="relative items-center " href={navs.url}>
                                    <span className=" ">{navs.name}</span>
                                </a>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
    )
}
