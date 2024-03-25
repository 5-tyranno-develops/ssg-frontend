import Image from 'next/image'
import LocationIcon from '@/images/locationIcon.png'
export default function DeliveryAddress() {
    const addData = [
        {
            id: 1,
            name: '자취방',
            zipCode: 12312,
            addressBase: '부산광역시 센텀',
            addressDetail: '스파로스',
            isMain: '기본배송지',
        },
    ]
    return (
        <div className="my-5 mx-5 ">
            <div className="flex mb-2 ">
                <Image src={LocationIcon} alt="위치" width={20} />
                <h3 className="text- base font-bold">{addData[0].name}</h3>
                <span className="ml-1 px-2 text-sm" style={{ backgroundColor: '#ff5452', color: 'white' }}>
                    {addData[0].isMain}
                </span>
            </div>

            <p className="text-sm">
                [{addData[0].zipCode}] {addData[0].addressBase} {addData[0].addressDetail}{' '}
            </p>
        </div>
    )
}
