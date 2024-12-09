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
      <main className="grid justify-center bg-main h-[80vh]">
        <h1 className="grid mb-0">{productData.title}</h1>
        <p style={{ marginTop: '0px' }}>
          <span className="grid font-bold text-[20px] text-red-700 italic underline">
            {productData.availabilityStatus}:
          </span>{' '}
          <span style={{ fontSize: '20px', fontStyle: 'italic' }}>
            {productData.stock} Available
          </span>
        </p>
        <div className="flex">
          <img className="w-[300px] h-auto" src={productData.thumbnail} />
          <div className="flex flex-col justify-center">
            <div>
              <span className="line-through italic text-[20px]">
                {productData.price}
              </span>{' '}
              <span className="text-red-700 text-[25px] font-bold ps-[5px]">
                {(productData.price - productData.price * 0.1903).toFixed(2)}
              </span>
            </div>
            <div>
              <Button text="Add To Cart" />
            </div>
          </div>
        </div>
        <div>
          <p>{productData.description}</p>
          <div className="mt-[10px]">
            Tags:{' '}
            {productData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#eba0a0] italic p-[5px] m-[5px] rounded-[5px] cursor-pointer"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}{' '}
              </span>
            ))}
          </div>
        </div>
      </main>
    );
  }
}
