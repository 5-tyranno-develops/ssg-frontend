function Order() {
    const OrderList = [
        { id: 1, name: '주문접수' },
        { id: 2, name: '결제완료' },
        { id: 3, name: '상품준비중' },
        { id: 4, name: '배송중' },
        { id: 5, name: '배송완료' },
    ]
    const OrderList1 = [
        { id: 1, name: '취소' },
        { id: 2, name: '교환' },
        { id: 3, name: '반품' },
        { id: 4, name: '구매확정' },
    ]
    return (
        <section className="mt-5">
            <h1 className="font-bold text-2xl ">주문/배송 조회</h1>
            <ul className="flex p-1 mt-3 ">
                {OrderList.map((list) => (
                    <li key={list.id} className="">
                        <div className="grid grid-cols-5  ">
                            <span className=" flex justify-center items-center w-24 h-24 bg-gray-100 rounded-3xl text-gray-300 text-3xl mb-3">
                                0
                            </span>
                        </div>
                        <span className=" text-lg text-gray-600">{list.name}</span>
                    </li>
                ))}
            </ul>
            <div className="flex mt-2 border rounded-xl border-gray-100 bg-gray-100 ">
                <div className="flex-1 py-2 ml-4">
                    <span>취소</span>
                </div>
                <div className="flex-1 py-2 ml-4">
                    <span>교환</span>
                </div>
                <div className="flex-1 py-2 ml-4">
                    <span>반품</span>
                </div>
                <div className="flex-1 py-2 ml-4">
                    <span>구매확정</span>
                </div>
            </div>
            <div className="mt-2 border"></div>
            <p className="mt-4 text-center ">주문/배송 조회 보러가기</p>
        </section>
    )
}
export default Order
