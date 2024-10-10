import Button from "./Button";

export default function Product({ id, title, description, image, price }) {
  return (
    <li key={id} className="product">
      <h4>{title}</h4>
      <div className="products-description">{description}</div>
      <img className="product-img" src={image} alt="Product"></img>
      <div className="product-price">
        <span className="product-oldPrice">
          {price} {" $"}{" "}
        </span>
        <span className="product-newPrice">
          {(price - price * 0.1903).toFixed(2)} {" $"}{" "}
        </span>
      </div>
      <Button text="Click To See Details" />
    </li>
  );
}
