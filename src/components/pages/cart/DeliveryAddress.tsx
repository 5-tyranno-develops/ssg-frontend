import Image from 'next/image'
import LocationIcon from '@/images/locationIcon.png'
import Buttons from '@/components/ui/buttons'
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
        <div className="my-5 mx-5 z-[2]">
            <div className="flex mb-2 ">
                {/* <Image src={LocationIcon} alt="위치" width={20} /> */}
                <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/ios/50/place-marker--v1.png"
                    alt="place-marker--v1"
                />
                <h3 className="text- base font-bold">{addData[0].name}</h3>
                <span
                    className="ml-1 px-2 text-sm justify-center items-center flex"
                    style={{ backgroundColor: '#ff5452', color: 'white' }}
                >
                    {addData[0].isMain}
                </span>
            </div>

            <p className="text-sm">
                [{addData[0].zipCode}] {addData[0].addressBase} {addData[0].addressDetail}{' '}
            </p>
        </div>
    )
}
