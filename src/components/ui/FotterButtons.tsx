'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function FooterButtons() {
    const { data: session } = useSession()

    const urlData = [
        { id: 1, name: '홈', url: '/' },
        session ? { id: 2, name: '로그아웃', url: '/' } : { id: 2, name: '로그인', url: '/user/login' },
        { id: 3, name: '회원가입', url: '/user/signupintro' },
        { id: 4, name: '앱 다운로드', url: 'https://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=3' },
    ]
    return (
        <div className="px-4 " style={{ backgroundColor: '#dbdbe0' }}>
            <ul className="table table-fixed w-full ">
                {urlData.map((data) =>
                    data.id == 2 ? (
                        data.name == '로그아웃' ? (
                            <li key={data.id} className="table-cell relative " onClick={() => signOut()}>
                                <Link
                                    href={data.url}
                                    className="block relative mx-3 my-2 text-xs"
                                    style={{ fontSize: '13px', color: '#565656', textAlign: 'center' }}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={data.id} className="table-cell relative ">
                                <Link
                                    href={data.url}
                                    className="block relative mx-3 my-2 text-xs"
                                    style={{ fontSize: '13px', color: '#565656', textAlign: 'center' }}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        )
                    ) : (
                        <li key={data.id} className="table-cell relative ">
                            <Link
                                href={data.url}
                                className="block relative mx-3 my-2 text-xs"
                                style={{ fontSize: '13px', color: '#565656', textAlign: 'center' }}
                            >
                                {data.name}
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </div>
    )
}
