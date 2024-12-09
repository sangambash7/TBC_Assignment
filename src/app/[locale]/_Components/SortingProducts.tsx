'use client';
import { useEffect, useState } from 'react';

export default function SortingProducts({ initialProductList }) {
  const [productList, setProductList] = useState({ initialProductList });

  const sortProducts = async function (sortBy, order) {
    console.log(productList);
    const response = await fetch(
      `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`
    );
    const data = await response.json();
    console.log(data.products);
    console.log(productList);
    setProductList(data.products);
    console.log(productList);
  };

  return (
    <div className="relative top-0 right-0 lg:absolute">
      <h3>Sort</h3>

      <select
        className="bg-[#494646] text-white"
        defaultValue=""
        onChange={(e) => {
          const [sortBy, order] = e.target.value.split('-');
          sortProducts(sortBy, order);
        }}
      >
        <option disabled hidden value="">
          By Default
        </option>
        <option value={'title-asc'}>Sort By Title Asc</option>
        <option value={'title-desc'}>Sort By Title Desc</option>
        <option value={'price-asc'}>Sort By Price Asc</option>
        <option value={'price-desc'}>Sort By Price Desc</option>
      </select>
    </div>
  );
}
