import Button from "./Button";

export default function Product({ name, description, image }) {
  return (
    <div className="product">
      <h4>{name}</h4>
      <div className="products-describtion">{description}</div>
      <img className="content-img" src={image} alt="Product"></img>
      <Button />
    </div>
  );
}
