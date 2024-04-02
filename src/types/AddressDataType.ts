interface AddressDataType {
    deliveryId?: Number
    isBaseDelivery: Number
    deliveryName: string
    zipCode: Number
    deliveryBase: string
    deliveryDetail: string
    receiverName: string
    phoneNumber: string
    homeNumber: string
}

interface AddaddressDataType {
    deliveryName: string
    zipCode: number
    deliveryBase: string
    deliveryDetail: string
    receiverName: string
    phoneNumber: string
    homeNumber: string
}

export type { AddressDataType, AddaddressDataType }
