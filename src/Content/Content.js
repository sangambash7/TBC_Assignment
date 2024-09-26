import "./Content.css";
import Product from "./Product";

// export default function Footer() {
//   return (
//     <main>
//       <h2>ტექსტის ნაწილი სურათებით</h2>
//       <div className="content-images">
//         <div className="content-img-container">
//           <img
//             className="content-img"
//             src="https://picsum.photos/seed/picsum/200/300"
//             alt="Mountain"
//           ></img>
//           <p>სურათი #1</p>
//         </div>
//         <div className="content-img-container">
//           <img
//             className="content-img"
//             src="https://picsum.photos/id/237/200/300"
//             alt="Dog"
//           ></img>
//           <p>სურათი #2</p>
//         </div>
//         <div className="content-img-container">
//           <img
//             className="content-img"
//             src="https://picsum.photos/200/300"
//             alt="Random"
//           ></img>
//           <p>სურათი #3</p>
//         </div>
//       </div>
//     </main>
//   );
// }

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
