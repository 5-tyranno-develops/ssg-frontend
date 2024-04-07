'use client'

import ProductList from '@/components/layouts/ProductList'
import SubCategorySlideButton from '@/components/layouts/SubCategorySlideButton'
import CategoryProductListToolBar from '@/components/pages/category/CategoryProductListToolBar'
import SubCategoryTable from '@/components/pages/category/SubCategoryTable'

export default function CategoryProductListPage() {
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
                <ProductList />
            </div>
        </div>
    )
}
