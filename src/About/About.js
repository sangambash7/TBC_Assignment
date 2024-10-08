import "./About.css";

export default function About() {
  return (
    <main className="about">
      <div className="about-box">
        პროექტი იწერება და ახლდება{" "}
        <span className="font-bold">"TBC x USAID"</span> მხარდაჭერით. ამჟამად
        პროექტი მოიცავს სამ გვერდს: მთავარ გვერდს, საკონტაქტო გვერდს და გვერდს
        "ჩვენს შესახებ".
      </div>
      <div className="about-box">
        მთავარ გვერდზე შეგიძლიათ იხილოთ პროდუქტების ჩამონათვალი დასახელებით,
        აღწერილობით, სურათითა და შესყიდვის ღილაკით.
      </div>
      <div className="about-box">
        საკონტაქტო გვერდზე იხილავთ დეტალებს (ტელ. ნომერი, მისამართი) და კითხვის
        გამოსაგზავნ ფორმას.
      </div>
      <div className="about-box">
        გვერდი "ჩვენს შესახებ" (სადაც ახლა იმყოფებით) განთავსებულია ინფორმაცია
        პროექტის შესახებ და ის მასთან ერთად განახლდება.
      </div>
    </main>
  );
}
