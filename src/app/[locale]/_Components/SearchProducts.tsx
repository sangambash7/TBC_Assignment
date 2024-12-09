'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('q') || '');

  function debouncerFunction(fun, delay) {
    let timeOutTime: Object;

    return function (...args) {
      clearTimeout(timeOutTime);

      timeOutTime = setTimeout(() => {
        fun.apply(this, args);
      }, delay);
    };
  }

  const debounce = debouncerFunction(fetchProductsByText, 1500);

  function fetchProductsByText() {
    if (searchText) {
      router.push(`/Products?q=${searchText}`);
    } else {
      router.push('/Products');
    }
  }

  useEffect(() => {
    // fetchProductsByText();
    debounce();
  }, [searchText, router]);

  return (
    <div className="absolute top-0 left-0 self-center">
      <span>Search: </span>
      <input
        type="text"
        id="search"
        name="search"
        value={searchText}
        onChange={(e) => debouncerFunction(setSearchText(e.target.value), 2000)}
        placeholder="Type Text"
      />
    </div>
  );
}
