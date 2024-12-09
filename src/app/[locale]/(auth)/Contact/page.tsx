import './Contact.css';

export default function Contact() {
  return (
    <main className="grid justify-center pt-[10px] px-[10px]">
      <div className="text-left">
        <p>ტელეფონის ნომერი: 577 67 98 46</p>
        <p>მისამართი: გურამიშვილის გამზირი 25</p>
      </div>

      <div className="text-left p-0">
        <h2>ჩვენთან დაკავშირება</h2>
        <form>
          <label htmlFor="fname">სახელი და გვარი</label>
          <br />
          <input className="w-[300px]" type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">ელექტრონული ფოსტა:</label>
          <br />
          <input className="w-[300px]" type="email" id="lemail" name="lemail" />
          <br />
          <label htmlFor="lname">ტექსტი:</label>
          <br />
          <textarea className="w-[300px] h-[150px]"></textarea>
          <br />
          <input className="w-[300px]" type="submit" value="გაგზავნა" />
        </form>
      </div>
    </main>
  );
}
