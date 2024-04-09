import Profile from '@/components/pages/mypage/Profile'
import Order from '@/components/pages/mypage/Order'
import Menu from '@/components/pages/mypage/Menu'
import Manage from '@/components/pages/mypage/Manage'
import MyPoint from '@/components/pages/mypage/MyPoint'
import MyPageBanner from '@/components/pages/mypage/MyPageBanner'

function Mypage() {
    return (
        <main>
            <Profile />
            <MyPoint />
            <MyPageBanner />
            <Order />
            <Menu />
            <div className=" bg-gray-100 h-2 mb-2 mt-4"></div>
            <Manage />
        </main>
    )
}
export default Mypage
