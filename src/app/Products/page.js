"use client";
import { useEffect, useState } from "react";
import "./Products.css";
import Product from "../_Components/Product";

export default function Products() {
  const [productList, setProductList] = useState([]);

  const getProducts = async function () {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };

  useEffect(() => {
    const getProductsList = async function () {
      const products = await getProducts();
      setProductList(products);
    };

    getProductsList();
  }, []);

  return (
    <main className="products">
      <h1>List Of Products</h1>
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
