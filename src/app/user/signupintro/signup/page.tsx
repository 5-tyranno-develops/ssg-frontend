import HeaderTitle from '@/components/ui/HeaderTitle'

function signup() {
    return (
        <div>
            <HeaderTitle title="회원가입" />
            <form className="flex-col">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default signup
