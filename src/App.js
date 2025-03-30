import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.js";

// Komponenty
import Navigation from "./components/Navigation/Navigation.jsx";
import Hero from "./components/Home/Hero.jsx";
import Shop from "./components/Shop/Shop.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

import "./index.css";
import Transformations from "./components/Transformations/Transformations.jsx";
import About from "./components/AboutMe/Aboute.jsx";
import Cooperation from "./components/Cooperation/Cooperation.jsx";
import Contact from "./components/ContactMe/Contact.jsx";

function App() {
  return (
    <CartProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navigation />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/metamorfozy" element={<Transformations />} />
              <Route path="/wspolpraca" element={<Cooperation />} />
              <Route path="/o-mnie" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/sklep" element={<Shop />} />
              <Route path="/produkt/:productId" element={<ProductDetail />} />
              <Route path="/kalkulator" element={<Calculator />} />
              <Route path="/koszyk" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* {Footer && <Footer />} - usuń jeśli nie używasz */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
