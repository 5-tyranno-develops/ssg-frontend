import React from 'react';
import { exampleProductData } from '@/lib/exampleProductData';
import PopularProduct from './PopularProduct';

export default function ProductList() {

  return (
    <div className='grid-cols-custom grid gap-y-0 gap-x-2 ms-4 me-4'>
      {exampleProductData.map((item) => {
        return (
            <PopularProduct
              key={item.id}
              id={item.id}
              src={item.src}
              store={item.store}
              brand={item.brand}
              name={item.name}
              subtitle={item.subtitle}
              price={item.price}
              sale={item.sale}
              salePrice={item.salePrice}
              reviewRating={item.reviewRating}
              reviewCount={item.reviewCount}              
            />
        )
      })}
    </div>
  );
}
