interface AddressDataType {
    id?: Number
    isBaseDelivery: Number
    deliveryName: string
    zipCode: Number
    deliveryBase: string
    deliveryDetail: string
    receiverName?: string
    phoneNumber?: string
    homeNumber?: string
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
interface ModifyAddressDataType {
    id: number
    deliveryName: string
    zipCode: number
    deliveryBase: string
    deliveryDetail: string
    receiverName: string
    phoneNumber: string
    homeNumber: string
}
interface CartAddressDataType {
    deliveryName: string
    zipCode: number
    deliveryBase: string
    deliveryDetail: string
}

export type { AddressDataType, AddaddressDataType, ModifyAddressDataType, CartAddressDataType }
