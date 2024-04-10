"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

const KakaoShareButton = () => {
    
    const onClick = () => {
        const { Kakao, location } = window;
        Kakao.Share.sendCustom({
            templateId: 106857,
            templateArgs: {
               THU: 'https://sitem.ssgcdn.com/84/53/93/item/1000571935384_i1_1100.jpg',
            },
          });
        
    };
    return (
        <div>
      <button 
      onClick={onClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      />
    </div>);
  };
  
  export default KakaoShareButton;

  // type KakaoShareButtonProps = {
//   description: string;
// };

// const KakaoShareButton = ({ description }: KakaoShareButtonProps) => {
//   const shareUrl = typeof window !== "undefined" ? window.location.href : "";

//   useEffect(() => {
//     console.log('snsshare:', window.Kakao);
//     if (window.Kakao){
//         console.log('before init:', window.Kakao.isInitialized());
//         if (!window.Kakao.isInitialized()) {
//             window.Kakao.init("9ee6eb834860be9f6cad3abf9a316538");
//             console.log('after init:', window.Kakao.isInitialized());

//     }}
//   }, [window.Kakao]);
// // const KakaoShareButton = ({ description }: KakaoShareButtonProps) => {
// //     const shareUrl = typeof window !== "undefined" ? window.location.href : "";
// //     useEffect(() => {
// //       if (typeof window !== "undefined") {
// //         const { Kakao } = window;
  
// //         if (!Kakao.isInitialized()) {
// //           Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
// //         }
// //       }
// //     }, []);


//   const handleShare = () => {
//     const { Kakao, location } = window;


//     Kakao.Share.sendScrap({
//         requestUrl: location.href,
//       });
//   };

//   return (
//     <div onClick={handleShare}>
//       <Image
//         className="w-10 h-10 cursor-pointer"
//         src={"http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png"}
//         width={40}
//         height={40}
//         alt="카카오톡 공유 이미지"
//       />
//     </div>
//   );
// };

// export default KakaoShareButton;