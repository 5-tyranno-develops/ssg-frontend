async function getProductData({ productId }: { productId: string }) {
    const res = await fetch(`https://tyrannoback.com/api/v1/product/detail/${productId}`)
    if (!res.ok) {
        throw new Error('Network Error')
    }
    const data = await res.json()
    return data
}

export default async function Page({
    params,
}: {
    params: {
        productName: string
    }
}) {
    return (
        <div>
            <h1>{params.productName}</h1>
        </div>
    )
}
