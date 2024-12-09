export default function About() {
  return (
    <main className="pt-[20px] grid justify-center">
      <div className="bg-[#d7a86b] m-2 p-1 rounded-xl max-w-[550px] flex flex-col justify-center">
        პროექტი იწერება და ახლდება{' '}
        <span className="font-bold">"TBC x USAID"</span> მხარდაჭერით. ამჟამად
        პროექტი მოიცავს სამ გვერდს: მთავარ გვერდს, საკონტაქტო გვერდს და გვერდს
        "ჩვენს შესახებ".
      </div>
      <div className="bg-[#d7a86b] m-2 p-1 rounded-xl max-w-[550px] flex flex-col justify-center">
        მთავარ გვერდზე შეგიძლიათ იხილოთ პროდუქტების ჩამონათვალი დასახელებით,
        აღწერილობით, სურათითა და შესყიდვის ღილაკით.
      </div>
      <div className="bg-[#d7a86b] m-2 p-1 rounded-xl max-w-[550px] flex flex-col justify-center">
        საკონტაქტო გვერდზე იხილავთ დეტალებს (ტელ. ნომერი, მისამართი) და კითხვის
        გამოსაგზავნ ფორმას.
      </div>
      <div className="bg-[#d7a86b] m-2 p-1 rounded-xl max-w-[550px] flex flex-col justify-center">
        გვერდი "ჩვენს შესახებ" (სადაც ახლა იმყოფებით) განთავსებულია ინფორმაცია
        პროექტის შესახებ და ის მასთან ერთად განახლდება.
      </div>
    </main>
  );
}
