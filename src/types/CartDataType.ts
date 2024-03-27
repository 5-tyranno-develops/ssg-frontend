// {
//     productId: 1,
//     vendorName: '노브랜드',
//     name: '상품1',
//     productPrice: 10000,
//     discount: 0,
//     count: 1,
//     isIncluded: 11,
//     isKeep: 99,
//     imageUrl: 'https://sitem.ssgcdn.com/89/11/90/item/1000043901189_i1_750.jpg',
// },

export interface CartDataType {
    productId: number
    vendorName: string
    name: string
    productPrice: number
    discount: number
    count: number
    isIncluded: number
    isKeep: number
    imageUrl: string
}
