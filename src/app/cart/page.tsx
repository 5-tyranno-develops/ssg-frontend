import HeaderTitle from '@/components/ui/HeaderTitle'
import CartList from '@/components/pages/cart/CartList'
import DeliveryAddress from '@/components/pages/cart/DeliveryAddress'
import ChangeAddress from '@/components/pages/cart/ChangeAddress'
function Cart() {
    return (
        <main>
            <HeaderTitle title="장바구니" />
            <DeliveryAddress />
            <ChangeAddress />
            <CartList />
        </main>
    )
}
export default Cart
