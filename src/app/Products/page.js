'use client'
import { useState, useEffect } from "react";
import "./Products.css";
import SearchProducts from "../_Components/SearchProducts";
import SortingProducts from "../_Components/SortingProducts";
import Product from "../_Components/Product";
import ProductsModal from "../_Components/ProductsModal/ProductsModal";


export default function Products({ searchParams }) {
  const [productList, setProductList] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", description: "", price: "" });
  const [editProduct, setEditProduct] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const getProducts = async (search) => {
    const url = `https://dummyjson.com/products/search${!search ? "" : `?q=${search}`}`;
    const response = await fetch(url);
    const data = await response.json(); return data.products;
  };
  const search = searchParams.q || "";
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(search);
      setProductList(products);
    };
    fetchProducts();
  }, [search]);

  const saveToLocalStorage = (updatedProducts) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts)); setProductList(updatedProducts);
  };
  const createProduct = () => {
    const highestId = productList.length > 0 ? Math.max(...productList.map((product) => product.id)) : 0;
    const newProductPost = {
      id: highestId + 1,
      title: newProduct.title,
      description: newProduct.description,
      image: "default-image-url.jpg",
      price: parseFloat(newProduct.price),
    };
    const updatedProducts = [newProductPost, ...productList];
    saveToLocalStorage(updatedProducts);
    setNewProduct({ title: "", description: "", price: "" });
    setIsCreateModalOpen(false);
  };
  const updateProduct = () => {
    const updatedProducts = productList.map((product) => product.id === editProduct.id ? { ...product, title: editProduct.title, description: editProduct.description, price: parseFloat(editProduct.price) } : product); saveToLocalStorage(updatedProducts); setEditProduct(null); setIsEditModalOpen(false);
  };
  const deleteProduct = (id) => {
    const updatedProducts = productList.filter((product) => product.id !== id);
    saveToLocalStorage(updatedProducts);
  };
  const toggleCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };
  const toggleEditModal = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };
  return (<main className="products">
    <div className="products-header">
      <h1>List Of Products</h1>
      <button onClick={toggleCreateModal}>Create Product</button>
      <SearchProducts />
      <SortingProducts initialProductList={productList} />
    </div>
    <ProductsModal isOpen={isCreateModalOpen}
      onClose={toggleCreateModal}
      title={newProduct.title}
      body={newProduct.description}
      price={newProduct.price}
      setTitle={(title) => setNewProduct({ ...newProduct, title })}
      setBody={(body) => setNewProduct({ ...newProduct, description: body })}
      setPrice={(price) => setNewProduct({ ...newProduct, price })}
      onSubmit={createProduct}
      action="create" />

    {isEditModalOpen && editProduct && (
      <ProductsModal isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={editProduct.title}
        body={editProduct.description}
        price={editProduct.price}
        setTitle={(title) => setEditProduct({ ...editProduct, title })}
        setBody={(body) => setEditProduct({ ...editProduct, description: body })}
        setPrice={(price) => setEditProduct({ ...editProduct, price })}
        onSubmit={updateProduct} action="edit" />)}
    <ul className="products-list"> {productList.map((product) => (
      <li key={product.id}>
        <Product id={product.id}
          title={product.title}
          description={product.description}
          image={(product.images && product.images.length > 0 ? product.images[0] : "fallback-image-url.jpg")}
          price={product.price} /> <div className="product-actions">
          <button onClick={() => toggleEditModal(product)}>Edit</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </li>))}
    </ul>
  </main>);
}