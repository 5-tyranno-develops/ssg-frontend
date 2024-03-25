function Order() {
    return (
        <section className="mt-5">
            <h1 className=" font-bold">주문/배송 조회</h1>
            <ul className="flex p-1 mt-3 ">
                <li className="flex-1 ">
                    <span className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl text-gray-300 text-lg ">
                        0
                    </span>
                    <span className="text-xs">주문접수</span>
                </li>
                <li className="flex-1  ">
                    <span className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl text-gray-300 text-lg ">
                        0
                    </span>
                    <span className="text-xs">결제완료</span>
                </li>
                <li className="flex-1  ">
                    <span className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl text-gray-300 text-lg ">
                        0
                    </span>
                    <span className="text-xs">상품준비중</span>
                </li>
                <li className="flex-1  ">
                    <span className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl text-gray-300 text-lg ">
                        0
                    </span>
                    <span className="text-xs">배송중</span>
                </li>
                <li className="  ">
                    <span className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl text-gray-300 text-lg ">
                        0
                    </span>
                    <span className="text-xs">배송완료</span>
                </li>
            </ul>
            <div className="flex mt-2 border rounded-xl border-gray-100 bg-gray-100 ">
                <div className="flex-1 py-2">
                    <span>취소</span>
                </div>
                <div className="flex-1 py-2">
                    <span>교환</span>
                </div>
                <div className="flex-1 py-2">
                    <span>반품</span>
                </div>
                <div className="flex-1 py-2">
                    <span>구매확정</span>
                </div>
            </div>
            <div className="mt-2 border"></div>
            <p className="mt-4 text-center ">주문/배송 조회 보러가기</p>
        </section>
    )
}
export default Order
