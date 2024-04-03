import ChangeAddressForm from '@/components/pages/mypage/ChangeAddressForm'

function Address({ params }: { params: { addressid: string } }) {
    console.log(params.addressid)
    return <ChangeAddressForm params={params.addressid} />
}
export default Address
