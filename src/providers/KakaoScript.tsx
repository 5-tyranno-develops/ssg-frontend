
'use client';

import Script from 'next/script';

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init("9ee6eb834860be9f6cad3abf9a316538");
  };

  return (
    // <Script
    //   src="https://developers.kakao.com/sdk/js/kakao.js"
    //   async
    //   onLoad={onLoad}
    // />
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
      integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
     crossOrigin='anonymous'
      async
      onLoad={onLoad}
    />
  );
}

export default KakaoScript;


