export interface CartDataType {
    cartId: number
    optionId: number
    productId: number
    productName: string
    imageUrl: string
    totalPrice: number
    discount: number
    count: number
    isKeep: number
    vendorName: string
}

export interface cartCountDataType {
    cartId: number
    count: number
}

export interface isKeepDataType {
    cartId: number
    isKeep: number
}

export interface clickDeleteDataType {
    cartId: number
}

export interface cartToOrderDataType {
    productId: number
    optionId: number
    count: number
    money: number
}
export interface cartMoneyDataType {
    orderMoney: number
    deliveryMoney: number
    discountMoney: number
}
