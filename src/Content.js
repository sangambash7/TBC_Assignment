import "./Content.css";

export default function Footer() {
  return (
    <div className="content">
      <h2>ტექსტის ნაწილი სურათებით</h2>
      <div className="content-images">
        <div className="content-img-container">
          <img
            className="content-img"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Mountain"
          ></img>
          <p>სურათი #1</p>
        </div>
        <div className="content-img-container">
          <img
            className="content-img"
            src="https://picsum.photos/id/237/200/300"
            alt="Dog"
          ></img>
          <p>სურათი #2</p>
        </div>
        <div className="content-img-container">
          <img
            className="content-img"
            src="https://picsum.photos/200/300"
            alt="Random"
          ></img>
          <p>სურათი #3</p>
        </div>
      </div>
    </div>
  );
}
