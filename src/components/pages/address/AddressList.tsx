import { getDelivery } from '@/app/api/delivery'

export default function AddressList() {
    const deliveryData = [
        {
            deliveryId: 1,
            isBaseDelivery: 11,
            deliveryName: '자취방',
            zipCode: 12345,
            deliveryBase: '서울시 강남구',
            deliveryDetail: '역삼동 123-456',
            receiverName: '홍길동',
            phoneNumber: '123-456-7890',
            homeNumber: 123456789,
        },
    ]
    const response = getDelivery()
    console.log(response)
    return (
        <div className="flex w-full max-w-full max-h-full">
            <ul className="block w-full">
                {deliveryData.map((delivery) => (
                    <li
                        key={delivery.deliveryId}
                        className=" py-5 px-4 border"
                        style={{ display: 'flex', fontSize: '13px' }}
                    >
                        <label className="flex items-center">
                            <div className="py-5">
                                <input type="radio" className="block relative w-5 h-5" />
                            </div>
                            <div className="flex-col ml-4">
                                <div>
                                    <strong>{delivery.deliveryName}</strong>
                                </div>
                                <p className="mt-1">
                                    [{delivery.zipCode}] {delivery.deliveryBase} {delivery.deliveryDetail}
                                </p>
                                <p className="mt-1">
                                    {delivery.receiverName} / {delivery.phoneNumber}
                                </p>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
