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
    <div className=" flex flex-col items-center border border-blue-800">
      <h4>{name}</h4>
      <div>{description}</div>
      <img className="h-auto w-[200px]" src={image} alt="Product"></img>
      <Button text="Add To Cart" />
    </div>
  );
}
