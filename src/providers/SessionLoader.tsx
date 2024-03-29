// 'use client'
// import { useSession } from "next-auth/react"
// import { PropsWithChildren, useEffect } from "react"
// import { useSetRecoilState } from "recoil"

// function SessionLoader({ children }: PropsWithChildren<{}>) {
//     const { status, data: session } = useSession()
//     const setLoginState = useSetRecoilState(loginStateSelector)

//     const isLogin = !!session && status === 'authenticated'
//     const token = isLogin ? session.accessToken : ''

//     useEffect(() => {
//         setToken(token)
//         setLoginState(isLogin)
//     }, [isLogin])

//     return <>{children}</>
// }

// export default SessionLoader
