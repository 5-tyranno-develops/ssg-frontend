import HeaderTitle from '@/components/ui/HeaderTitle'

function signup() {
    return (
        <div>
            <HeaderTitle title="회원가입" />
            <form className="flex-col">
                <div className="flex">
                    <span className="w-10"> 아이디</span>
                    <input
                        type="text"
                        className=" mt-1 p-2 ml-30 h-12 w-full  border text-sm "
                        placeholder="영어 또는 숫자로 6~20자리"
                    />
                </div>

                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default signup
