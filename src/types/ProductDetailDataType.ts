export interface ProductDataType {
    productId: string
    productName: string
    price: number
    detailContent: string
    imageUrl: string[]
    vendor: {
        vendorName: string
        vendorImageUrl: string
        vendorId: number
    }
    discount: number
}
