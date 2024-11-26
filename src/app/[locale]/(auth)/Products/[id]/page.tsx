import '../Products.css';
import Button from '../../../_Components/Button';
import { getItemsById } from '../../../_Services/getSupabaseData';



type Locale = 'en' | 'ge';

interface ProductProps {
  params: {
    id: number;
    locale: Locale;
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const { id, locale: lang } = params;

  const productData = await getItemsById('Products', lang, id);

  if (!productData) {
    return <h1>Sorry! The Page Was Not Found!</h1>;
  } else {
    return (
      <main className="products-page">
        <h1>{productData.title}</h1>
        <p style={{ marginTop: '0px' }}>
          <span className="products-page-stock">
            {productData.availabilityStatus}:
          </span>{' '}
          <span style={{ fontSize: '20px', fontStyle: 'italic' }}>
            {productData.stock} Available
          </span>
        </p>
        <div className="products-page-middle">
          {/* <img src={productData.images[0]} /> */}
          <div className="products-page-middleRight">
            <div className="products-page-price">
              <span className="product-page-oldPrice">{productData.price}</span>{' '}
              <span className="product-page-newPrice">
                {(productData.price - productData.price * 0.1903).toFixed(2)}
              </span>
            </div>
            <div className="product-page-cart">
              <Button text="Add To Cart" />
            </div>
          </div>
        </div>
        <div className="products-page-bottom">
          <p>{productData.description}</p>
          <div className="products-page-tags">
            Tags:{' '}
            {/* {productData.tags.map((tag, index) => (
              <span key={index} className="products-page-tag">
                {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}{' '}
              </span>
            ))} */}
          </div>
        </div>
      </main>
    );
  }
}
