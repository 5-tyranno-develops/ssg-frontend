'use client'
import HeaderTitle from '@/components/ui/HeaderTitle'
import { useEffect, useState } from 'react'
import Postcode from '@/components/pages/address/Add'
import { getModifyDelivery, modifyDelivery } from '@/actions/delivery'
import { AddressDataType, ModifyAddressDataType } from '@/types/AddressDataType'
import { useRouter } from 'next/navigation'
function ChangeAddressForm({ params }: { params: string }) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [addressName, setAddressName] = useState<string>('') // 주소별칭
    const [zipCode, setZipCode] = useState<string>('')
    const [fullAddress, setFullAddress] = useState('')
    const [detailAddress, setDetailAddress] = useState('')
    const [receiver, setReceiver] = useState<string>('') // 받는 분
    const [phone, setPhone] = useState<string>('') // 휴대폰
    const [tel, setTel] = useState<string>('') // 전화번호

    const [defaultValue, setDefaultValue] = useState<AddressDataType>()

    const parsingPhoneNumber = (num: string) => {
        return num
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            .replace(/(-{1,2})$/g, '')
    }

    const getDeliveryData = async (deliveryId: string) => {
        try {
            const response = await getModifyDelivery(parseInt(deliveryId))
            setDefaultValue(response)
        } catch (err) {
            console.error(err)
        }
    }

    const router = useRouter()
    useEffect(() => {
        getDeliveryData(params)
    }, [])
    const handleModifyAddress = async () => {
        try {
            const addressData: ModifyAddressDataType = {
                id: parseInt(params),
                deliveryName:
                    addressName === '' || addressName === undefined ? defaultValue?.deliveryName || '' : addressName,
                zipCode:
                    zipCode === '' || zipCode === undefined ? defaultValue?.zipCode?.valueOf() || 0 : parseInt(zipCode),
                deliveryBase:
                    fullAddress === '' || fullAddress === undefined ? defaultValue?.deliveryBase || '' : fullAddress,
                deliveryDetail:
                    detailAddress === '' || detailAddress === undefined
                        ? defaultValue?.deliveryDetail || ''
                        : detailAddress,
                receiverName: receiver === '' || receiver === undefined ? defaultValue?.receiverName || '' : receiver,
                phoneNumber: phone === '' || phone === undefined ? defaultValue?.phoneNumber || '' : phone,
                homeNumber: tel === '' || tel === undefined ? defaultValue?.homeNumber || '' : tel,
            }
            const response = await modifyDelivery(addressData)

            alert(response)
            router.back()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Postcode
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                setFullAddress={setFullAddress}
                setDetailAddress={setDetailAddress}
                setZipCode={setZipCode}
            />
            <HeaderTitle title="배송지 추가" />
            <div className="px-3">
                <ul>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">주소별칭</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    type="text"
                                    placeholder="주소별칭 입력"
                                    onChange={(e) => setAddressName(e.target.value)}
                                    defaultValue={defaultValue?.deliveryName}
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">받는 분</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    type="text"
                                    placeholder="받는 분 성함 입력"
                                    onChange={(e) => setReceiver(e.target.value)}
                                    defaultValue={defaultValue?.receiverName}
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">휴대폰</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    placeholder="휴대폰(숫자만 입력)"
                                    onChange={(e) => setPhone(parsingPhoneNumber(e.target.value))}
                                    defaultValue={defaultValue?.phoneNumber}
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">전화번호(선택)</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    defaultValue={defaultValue?.homeNumber}
                                    placeholder="전화번호(숫자만 입력)"
                                    onChange={(e) => setTel(parsingPhoneNumber(e.target.value))}
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">배송주소</label>
                        </span>
                        <div className="relative pl-20 flex items-center">
                            <span className="inline-block flex-1 pr-2">
                                <span
                                    className="inline-block p-2 w-full leading-5"
                                    style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                                >
                                    {/* <Link href="/cart/address"/> */}
                                    <input
                                        type="number"
                                        className="w-full"
                                        defaultValue={defaultValue?.zipCode?.toString()}
                                        readOnly
                                    />
                                </span>
                            </span>

                            {/* <Link href={'/address/Addaddress'}> */}

                            <button
                                className="inline-block h-9 w-20 ml-2 text-sm font-bold text-red-500 border border-red-500 bg-white rounded-md"
                                onClick={() => setModalOpen(true)}
                            >
                                우편번호
                            </button>
                        </div>
                    </li>
                    {fullAddress == '' ? (
                        <div className="mt-2 text-sm leading-5  ">
                            <div className="flex">
                                <div
                                    className=" w-10 mt-1 mr-3 mb-1 pt-1 text-xs leading-5 font-normal text-center "
                                    style={{ backgroundColor: '#f6f6f6', color: '#888 ' }}
                                >
                                    도로명
                                </div>
                                <span className="mt-2">
                                    {defaultValue?.deliveryBase} {defaultValue?.deliveryDetail} <br />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-2 text-sm leading-5  ">
                            <div className="flex">
                                <div
                                    className=" w-10 mt-1 mr-3 mb-1 pt-1 text-xs leading-5 font-normal text-center "
                                    style={{ backgroundColor: '#f6f6f6', color: '#888 ' }}
                                >
                                    도로명
                                </div>
                                <span className="mt-2">
                                    {fullAddress} {detailAddress}
                                </span>
                            </div>
                        </div>
                    )}
                </ul>

                <div className="py-3 text-center flex justify-between w-full mb-6">
                    <button className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        초기화
                    </button>
                    <button className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        취소
                    </button>
                    <button
                        className="h-10 flex-1 text-xs font-bold"
                        style={{ color: '#666', border: '1px solid #ccc' }}
                        onClick={() => handleModifyAddress()}
                    >
                        수정완료
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ChangeAddressForm
