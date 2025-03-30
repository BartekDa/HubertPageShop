import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handlePayment = async () => {
    if (!email) {
      alert("Proszę podać adres email");
      return;
    }

    setLoading(true);

    try {
      const stripe = await loadStripe(
        "pk_test_51R8Ofq4EExQX7v719Lnw79tu97ZDxUHGvRxliGSbjc9kIU8apvMlpWl53182f9EAZmZvyWkTwK69YmWdxzJ5TemT00z7CsosqV"
      );

      const response = await fetch(
        "http://localhost:3001/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartItems,
            customerEmail: email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Problem z połączeniem do serwera płatności");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      } else {
        clearCart();
      }
    } catch (error) {
      alert(`Błąd płatności: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Twój koszyk jest pusty
        </h1>
        <p className="text-gray-600 mb-6">
          Dodaj produkty do koszyka, aby kontynuować zakupy
        </p>
        <Link
          to="/sklep"
          className="inline-block bg-lime-600 hover:bg-lime-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Przejdź do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-lime-600 transition duration-300">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/koszyk"
            className="hover:text-lime-600 transition duration-300"
          >
            Koszyk
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-800">Zamówienie</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Podsumowanie zamówienia
        </h1>

        {/* Order summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Twoje zamówienie
          </h2>

          <div className="border-t border-b py-4 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <div className="flex items-center">
                  <span className="font-medium">{item.name}</span>
                  {item.quantity > 1 && (
                    <span className="text-gray-500 ml-2">x{item.quantity}</span>
                  )}
                </div>
                <span className="font-medium">
                  {(item.price * (item.quantity || 1)).toFixed(2)}zł
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-lg font-bold">
            <span>Łącznie do zapłaty:</span>
            <span className="text-lime-600">{cartTotal.toFixed(2)}zł</span>
          </div>
        </div>

        {/* Payment form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Dane do zamówienia
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Adres email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              placeholder="twoj@email.com"
              required
            />
          </div>

          <div className="text-sm text-gray-500 mb-6">
            Na ten adres email wyślemy Twoje zamówienie po opłaceniu
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Przetwarzanie...
              </>
            ) : (
              "Zapłać teraz"
            )}
          </button>
        </div>

        {/* Security info */}
        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">
            Płatności są przetwarzane bezpiecznie przez Stripe
          </p>
          <div className="flex justify-center space-x-2">
            <i className="fab fa-cc-visa text-xl"></i>
            <i className="fab fa-cc-mastercard text-xl"></i>
            <i className="fab fa-cc-amex text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
