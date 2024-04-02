// import { ItemType } from "@/types/ItemType"
// import Image from "next/image"
// // import heartFill from "@/public/asset/images/heart-fill.png"
// // import heartBorder from "@/public/asset/images/heart-border.png"
// import { useState } from "react"
// import { deleteClip } from "@/actions/clip"

// /**
//  * itemId를 props로 받고 컴포넌트에서 server action으로 item데이터 페치하기
//  */
// const item: ItemType = {
//   id: 11,
//   thumbnailUrl:
//     "https://sitem.ssgcdn.com/31/71/12/item/1000533127131_i1_500.jpg",
//   alt: "",
//   name: "[당일수확발송] 무농약 대추방울토마토 2kg (1-3번과/로얄과) 농협 로컬푸드",
//   brand: "달찐과일",
//   price: 29900,
//   discountRate: 10,
//   star: 4.5,
//   totalReviews: 61,
// }

// interface ItemCardPropsType {
//   itemId: number
// }

// export default function ItemCard({ itemId }: ItemCardPropsType) {
//   const discountPrice =
//     item.discountRate !== 0
//       ? item.price * ((100 - item.discountRate) / 100)
//       : item.price
//   const finalPrice = new Intl.NumberFormat().format(Math.round(discountPrice))
//   const originalPrice = new Intl.NumberFormat().format(item.price)
//   const [clickHeart, setClickHeart] = useState(true)

//   const handleHeart = async () => {
//     setClickHeart(!clickHeart)
//     //좋아요 취소 서버액션
//     if (clickHeart) {
//       await deleteClip(1, itemId)
//     }
//   }

//   return (
//     <div className={`flex flex-col pt-2 pb-5 w-full h-full`}>
//       <div className={`bg-violet-400`}>
//         <Image
//           src={item.thumbnailUrl}
//           alt={item.alt}
//           sizes="100vw"
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//           width={0}
//           height={0}
//           priority
//         />
//       </div>
//       <div className="flex flex-row justify-end items-center">
//         {/* <button className="w-[28px] h-[28px]" onClick={() => handleHeart()}>
//           {clickHeart ? (
//             <Image src={heartFill} alt={"싫어요"} width={20} height={20} />
//           ) : (
//             <Image src={heartBorder} alt={"싫어요"} width={20} height={20} />
//           )}
//         </button> */}
//         <button className="w-[28px] h-[28px]">
//           <svg
//             width="20px"
//             viewBox="0 0 24 24"
//             focusable="false"
//             name="CartIcon"
//           >
//             <rect
//               x="6"
//               y="8.40002"
//               width="14.4"
//               height="1.2"
//               fill="currentColor"
//             ></rect>
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
//               fill="currentColor"
//             ></path>
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
//               fill="currentColor"
//             ></path>
//             <path
//               d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
//               fill="currentColor"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <div>
//         <p
//           className="text-xs"
//           style={{
//             overflow: "hidden",
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           <span className="font-extrabold">{item.brand} </span>
//           {item.name}
//         </p>
//       </div>
//       <div className="w-full">
//         {item.discountRate !== 0 && (
//           <span className="text-xs line-through">{originalPrice}원</span>
//         )}
//         <div className="text-base font-semibold">
//           <span className="text-[#FF5452]">{item.discountRate}%</span>
//           <span className="ml-1">{finalPrice}원</span>
//         </div>
//         {item.star && item.totalReviews && (
//           <div className="flex flex-row gap-1 text-xs">
//             <svg
//               width={11}
//               viewBox="0 0 11 16"
//               focusable="false"
//               name="StarFill"
//             >
//               <path
//                 fill="#CFCFCF"
//                 d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
//               ></path>
//             </svg>
//             <span className="text-[#777777]">{item.star}</span>
//             <div className="bg-[#E5E5E5] border w-0 h-[12px] mt-[3px]"></div>
//             <span>{item.totalReviews}건</span>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
