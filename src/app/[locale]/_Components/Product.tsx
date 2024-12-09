import Button from './Button';
import Link from 'next/link';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export default function Product({
  id,
  title,
  description,
  image,
  price,
}: ProductProps) {
  return (
    <li
      key={id}
      className="product py-[10px] px-[15px] bg-mainDarker border h-[25rem] list-none flex flex-col justify-between transition-transform duration-600 ease-in-out hover:transform: translate-y-2"
    >
      <h4>{title}</h4>
      <div className="products-description">{description}</div>
      <img className="max-h-[200px] w-auto" src={image} alt="Product"></img>
      <div>
        <span className="line-through italic">
          {price} {' $'}{' '}
        </span>
        <span className="text-red-700 text-[20px] font-bold ps-[5px]">
          {(price - price * 0.1903).toFixed(2)} {' $'}{' '}
        </span>
      </div>
      <Link href={`./Products/${id}`}>
        <Button text="Click To See Details" />
      </Link>
    </li>
  );
}
