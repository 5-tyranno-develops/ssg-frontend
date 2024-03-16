import ShareIcon from '@/images/ShareSvg'
//https://m.ssg.com/item/itemView.ssg?itemId=1000581553919&siteNo=6009&salestrNo=1004참고 
function Product() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://sitem.ssgcdn.com/19/39/55/item/1000581553919_i1_750.jpg"
                            alt="상품이미지1"
                        ></img>
                    </li>
                </ul>
            </div>
            <div className="m-4">
                <div className=" flex items-center justify-between border-b-2 ">
                    <span className="inline-block  text-xs font-bold ">
                        <p>신세계 백화점</p>
                    </span>

                    <button type="button" className=" mr-3">
                        <ShareIcon />
                    </button>
                </div>
                <div>
                    <h2 className="">
                        <div>
                            <a
                                href="https://m.ssg.com/disp/brandShop.ssg?brandId=2011010806&ctgId=6000204818&_mpop=new"
                                className=" text-xs font-bold"
                            >
                                살로몬
                            </a>
                        </div>
                        <span className=" text-sm">
                            살로몬 남녀공용 레이스플래그 WP 자켓 [블랙] S241001SJK12 / LC2393200
                        </span>
                    </h2>
                    <div>
                        <div>
                            <del className="line-through text-sm">
                                <p>320,000원</p>
                            </del>
                        </div>
                        <div className="flex space-x-2 text-lg font-bold">
                            <div>
                                <span className=" text-red-600 ">5%</span>
                            </div>
                            <div>
                                <span>304,000원</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>카드혜택가</dt>
                                <dd>288,800원</dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>무이자 할부</dt>
                                <dd>카드사별 무이자 혜택</dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>쇼핑혜택</dt>
                                <dd>
                                    <p>멤버십은 SSG 상품권 3% 할인</p>
                                    <span>지금 보는 상품에 즉시 사용 가능</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>이벤트</dt>
                                <dd>
                                    <p>멤버십 반품비용 무료!</p>
                                    <span>2024.03.04 ~ 2024.03.31</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>배송정보</dt>
                                <dd>택배배송</dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="flex space-x-3">
                                <dt>포장안내</dt>
                                <dd>선물하기로 주문 시 신세계백화점 쇼핑백이 동봉되며, 전용 선물박스로 배송됩니다. </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
