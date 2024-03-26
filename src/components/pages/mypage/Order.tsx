import Image from 'next/image'
import Link from 'next/link'
function Order() {
    const OrderList = [
        { id: 1, name: '주문접수' },
        { id: 2, name: '결제완료' },
        { id: 3, name: '상품준비중' },
        { id: 4, name: '배송중' },
        { id: 5, name: '배송완료' },
    ]
    const OrderState = [
        { id: 1, name: '취소' },
        { id: 2, name: '교환' },
        { id: 3, name: '반품' },
        { id: 4, name: '구매확정' },
    ]
    return (
        <section>
            <div
                className="mt-10 border-t-2  rounded-t-3xl  "
                style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)' }}
            >
                <div className="p-4 mt-10">
                    <div className="flex justify-between ">
                        <h1 className="flex font-extrabold text-2xl  ">
                            주문/배송 조회
                            <Image
                                width="30"
                                height="30"
                                src="https://img.icons8.com/ios-glyphs/30/back.png"
                                alt="back"
                                style={{ transform: 'rotate(180deg)' }}
                            />
                        </h1>
                        <Link
                            href="/cart"
                            className="flex items-center justify-center border rounded-md font-bold px-3 "
                        >
                            <Image
                                width="20"
                                height="20"
                                src="https://img.icons8.com/fluency-systems-regular/48/marker--v1.png"
                                alt="marker--v1"
                            />
                            배송지 관리
                        </Link>
                    </div>
                    <ul className="flex p-2 mt-4 ">
                        {OrderList.map((list, index) =>
                            index == OrderList.length - 1 ? (
                                <li key={list.id} className="">
                                    <span className=" flex justify-center items-center w-24 h-24 bg-gray-100 rounded-3xl text-gray-300 text-3xl mb-3">
                                        0
                                    </span>

                                    <span className=" text-lg text-gray-600">{list.name}</span>
                                </li>
                            ) : (
                                <li key={list.id}>
                                    <div className="grid grid-cols-5 ">
                                        <span className=" flex justify-center items-center w-24 h-24 bg-gray-100 rounded-3xl text-gray-300 text-3xl mb-3">
                                            0
                                        </span>
                                        <img
                                            width="25"
                                            height="25"
                                            src="https://img.icons8.com/sf-ultralight/25/000000/back.png"
                                            alt="back"
                                            className=" ml-24 mt-8"
                                            style={{ transform: 'rotate(180deg)' }}
                                        />
                                    </div>

                                    <span className=" text-lg text-gray-600">{list.name}</span>
                                </li>
                            ),
                        )}
                    </ul>
                    <div className="flex justify-center items-center mt-2 border rounded-xl border-gray-100 bg-gray-100 text-lg h-16">
                        {OrderState.map((state, index) =>
                            index == OrderState.length - 1 ? (
                                <div key={state.id} className="flex flex-1 ml-4 mr-4">
                                    <span>{state.name}</span>
                                    <div className="text-gray-200 ml-auto">0 |</div>
                                </div>
                            ) : (
                                <div key={state.id} className="flex flex-1 ml-4 ">
                                    <span>{state.name}</span>
                                    <div className="text-gray-200 ml-auto">0 |</div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>

            <p className="flex justify-center mt-4  text-xl">
                주문/배송 조회 보러가기
                <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/sf-ultralight/25/000000/back.png"
                    alt="back"
                    style={{ transform: 'rotate(180deg)' }}
                />
            </p>
        </section>
    )
}
export default Order
