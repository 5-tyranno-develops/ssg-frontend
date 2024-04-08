import ProductList from '@/components/pages/category/ProductList'
import SubCategorySlideButton from '@/components/pages/category/SubCategorySlideButton'
import CategoryProductListToolBar from '@/components/pages/category/CategoryProductListToolBar'
import SubCategoryTable from '@/components/pages/category/SubCategoryTable'

export interface product {
    productId: string
    id: number
}

async function getProductList(largeId: string, middleId: string) {
    const data = await fetch(
        `https://tyrannoback.com/api/v1/product/productList?largeId=${largeId}&middleId=${middleId}`,
    )
    if (data) {
        const response = await data.json()
        console.log(response.result.productIds)
        return response.result.productIds
    }
}

async function CategoryProductListPage({ searchParams }: { searchParams: { [key: string]: string } }) {
    const params = searchParams
    // console.log(params)

    const productListIdData: product[] = await getProductList(params.largeId, params.middleId)

    return (
        <div className="min-h-screen">
            <div className="contents">
                <CategoryProductListToolBar />
                <SubCategorySlideButton />
                <SubCategoryTable />
            </div>
            <div className="col-start-2 col-end-auto">
                <div className="text-xs flex ps-4 pe-4 pt-3">
                    <div className="font-bold">~개</div>
                    <div className="text-gray-500">의 상품이 있습니다.</div>
                </div>
                <ProductList productListIdData={productListIdData} />
            </div>
        </div>
    )
}

export default CategoryProductListPage
