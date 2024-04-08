import { product } from '@/app/productlist/page'
import PopularProduct from './PopularProduct'
import Link from 'next/link'

export default function ProductList({ productListIdData }: { productListIdData: product[] }) {
    if (productListIdData.length === 0)
        return (
            <div className="grid-cols-2 md:grid-cols-4 grid gap-y-0 gap-x-5 ms-4 me-4 ">찾으시는 상품이 없습니다.</div>
        )
    // console.log(productListIdData)

    return (
        <div className="grid-cols-2 md:grid-cols-4 grid gap-y-0 gap-x-5 ms-4 me-4 ">
            {productListIdData.map((item: product, idx) => (
                <Link href={'/'} passHref>
                    <PopularProduct productId={item.productId} key={idx} />
                </Link>
            ))}
        </div>
    )
}
