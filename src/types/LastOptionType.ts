export interface LastOptionType {
    productId: string
    optionId: string
    productName: string
    productPrice: number
    color: {
        id: string
        color: string
    }
    size: {
        id: string
        size: string
    }
    extra: any | null
    etc: {
        id: string
        additionalOption: string
    }
    stock: number
    discount: number
}

export interface LastOptionListType {
    [x: string]: any
    optionId: string,
    productName: string,
    price: number,
    discount : number
    color: string | null,
    size: string | null,
    etc: string | null,
    qty: number,
}