import Link from "next/link";

import "./Products.css";
import SearchProducts from "../_Components/SearchProducts";
import SortingProducts from "../_Components/SortingProducts";
import Product from "../_Components/Product";

export default async function Products({ searchParams }) {
  const getProducts = async function (search) {
    const url = `https://dummyjson.com/products/search${
      !search ? "" : `?q=${search}`
    }`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return data.products;
  };

  const search = searchParams.q || "";
  console.log("Search Query: ", search);

  const productList = await getProducts(search);

  // const sortProducts = async function (sortBy, order) {
  //   const response = await fetch(
  //     `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`
  //   );
  //   const data = await response.json();
  //   setProductList(data.products);
  // };

  // const debounceSearchProducts = debouncerFunction(searchProducts, 1000);

  // function debouncerFunction(fun, delay) {
  //   let timeOutTime;

  //   return function (...args) {
  //     clearTimeout(timeOutTime);

  //     timeOutTime = setTimeout(() => {
  //       fun.apply(this, args);
  //     }, delay);
  //   };
  // }

  return (
    <main className="products">
      <div className="products-header">
        <h1>List Of Products</h1>

        <SearchProducts />

        <SortingProducts initialProductList={productList} />

        {/* <div className="products-sorting">
          <h3>Sort</h3>

          <select
            className="products-sortingMenu"
            onChange={(e) => {
              const [sortBy, order] = e.target.value.split("-");
              sortProducts(sortBy, order);
            }}
          >
            <option disabled selected hidden>
              By Default
            </option>
            <option value={"title-asc"}>Sort By Title Asc</option>
            <option value={"title-desc"}>Sort By Title Desc</option>
            <option value={"price-asc"}>Sort By Price Asc</option>
            <option value={"price-desc"}>Sort By Price Desc</option>
          </select>
        </div> */}
      </div>

      <ul className="products-list">
        {productList.map((product) => {
          return (
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.images[0]}
              price={product.price}
            />
          );
        })}
      </ul>
    </main>
  );
}
