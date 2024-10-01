import "./Content.css";
import Product from "./Product";

export default function Footer() {
  return (
    <main>
      <h2>Photo Cameras</h2>
      <div className="products-container">
        <Product
          name="Konica"
          description="Konica Black vintage camera."
          image="https://t.ly/jHeQr"
        />
        <Product
          name="Nikon"
          description="Nikon Reflex Camera."
          image="https://t.ly/0rWM5"
        />
        <Product
          name="Canon"
          description="Canon DSLR Camera."
          image="https://t.ly/77r-0"
        />
      </div>
    </main>
  );
}
