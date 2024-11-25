import Button from './Button';

interface HomeProductProps {
  name: string;
  description: string;
  image: string;
}

export default function HomeProduct({
  name,
  description,
  image,
}: HomeProductProps) {
  return (
    <div className="home-product">
      <h4>{name}</h4>
      <div className="home-products-description">{description}</div>
      <img className="content-img" src={image} alt="Product"></img>
      <Button text="Add To Cart" />
    </div>
  );
}
