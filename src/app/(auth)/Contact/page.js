import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact">
      <div className="contact-details">
        <p>ტელეფონის ნომერი: 577 67 98 46</p>
        <p>მისამართი: გურამიშვილის გამზირი 25</p>
      </div>

      <div className="contact-form">
        <h2>ჩვენთან დაკავშირება</h2>
        <form>
          <label htmlFor="fname">სახელი და გვარი</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">ელექტრონული ფოსტა:</label>
          <br />
          <input type="email" id="lemail" name="lemail" />
          <br />
          <label htmlFor="lname">ტექსტი:</label>
          <br />
          <textarea></textarea>
          <br />
          <input type="submit" value="გაგზავნა" />
        </form>
      </div>
    </main>
  );
}
