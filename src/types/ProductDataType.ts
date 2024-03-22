export interface ProductDataType {
    productId: number
    productName: string
    price: number
    detailContent: string
    vendor: {
        vendorName: string
        vendorImageUrl: string | null
        vendorId: number
    }[]
    discount: number
}
