import { getItems } from '../../_Services/getSupabaseData';
import './Products.css';
import SearchProducts from '../../_Components/SearchProducts';
import SortingProducts from '../../_Components/SortingProducts';
import Product from '../../_Components/Product';

type Locale = 'en' | 'ge';

interface ProductsProps {
  searchParams: {};
  params: {
    locale: Locale;
  };
}

export default async function Products({
  searchParams,
  params,
}: ProductsProps) {
  const lang = params.locale;
  const productList = await getItems('Products', lang);

  return (
    <main className="products">
      <div className="products-header">
        <h1>List Of Products</h1>
        {/* <button onClick={toggleCreateModal}>Create Product</button> */}
        {/* <SearchProducts />
        <SortingProducts initialProductList={productList} /> */}
      </div>

      <div className="products-list">
        {productList &&
          productList.map((product) => (
            <div key={product.id}>
              <Product
                id={product.id}
                title={product.title}
                description={product.description}
                image={
                  product.thumbnail || product.image || 'fallback-image-url.jpg'
                }
                price={product.price}
              />
            </div>
          ))}
      </div>
    </main>
  );
}
