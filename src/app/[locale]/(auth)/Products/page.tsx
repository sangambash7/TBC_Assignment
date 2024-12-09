import { getItems } from '../../_Services/getSupabaseData';
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
    <main className="bg-main py-[10px] px-[20px]">
      <div className="relative">
        <h1 className="text-[40px] underline grow text-center">
          List Of Products
        </h1>
        {/* <button onClick={toggleCreateModal}>Create Product</button> */}
        {/* <SearchProducts />*/}
        <SortingProducts initialProductList={productList} />
      </div>

      <div className="pt-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
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
