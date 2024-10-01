import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./Header/Header.js";
import Content from "./Content/Content.js";
import Contact from "./Contact/Contact.js";
import About from "./About/About.js";
import Footer from "./Footer/Footer.js";
import Assignment3 from "./Assignment-3/Assignment-3.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="application">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Assignment-3" element={<Assignment3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
