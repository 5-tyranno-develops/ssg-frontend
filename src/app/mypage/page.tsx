import Profile from '@/components/pages/mypage/Profile'
import Order from '@/components/pages/mypage/Order'
import Menu from '@/components/pages/mypage/Menu'
import Manage from '@/components/pages/mypage/Manage'

function Mypage() {
    return (
        <div className="">
            <Profile />

            <Order />
            <Menu />
            <div className=" bg-gray-100 h-2 mb-2 mt-4"></div>
            <Manage />
        </div>
    )
}
export default Mypage
