import { Button } from '@nextui-org/react';
import React from 'react'; // useState를 임포트합니다.
import { useState } from 'react';
// 카테고리 데이터를 위한 타입 정의 (TypeScript 사용 시)
interface Category {
  id: number;
  categoryName: string;
}

export default function Home() {
  // 카테고리 데이터를 저장하기 위한 상태
  const [categories, setCategories] = useState<Category[]>([]);

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://15.164.246.181:8080/api/v1/category');
      if (!response.ok) {
        throw new Error('서버 웨러');
      }
      const data: Category[] = await response.json(); // 데이터를 받아옵니다.
      setCategories(data); // 받아온 데이터를 상태로 저장합니다.
    } catch (error) {
      console.error('에러', error);
    }
  };

  return (
    <main>
      <h1>SSG FRONT-END</h1>
      <Button onClick={handleButtonClick}>인증번호 받기</Button> {/* title 대신 children을 사용합니다. */}
      <div>
        <h2>카테고리 목록:</h2>
        <ul>    
          {categories.map((category) => (
            <li key={category.id}>{category.categoryName}</li> // 카테고리 데이터를 리스트로 표시합니다.
          ))}
        </ul>
      </div>
    </main>
  );
}
