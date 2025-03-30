import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart, ArrowLeft, ChevronDown, Check } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const { addToCart } = useContext(CartContext);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      const productData = {
        id: productId,
        name: "Dieta Standard",
        price: 127.9,
        originalPrice: 159.9,
        image: "/assets/images/1.png",
        description:
          "Indywidualny plan żywieniowy dostosowany do Twoich potrzeb",
        longDescription:
          "Profesjonalnie przygotowana dieta uwzględniająca Twoje preferencje smakowe, cele i styl życia. Otrzymasz szczegółowy jadłospis na każdy dzień wraz z listą zakupów i przepisami.",
        options: [
          "1500 kcal",
          "1800 kcal",
          "2000 kcal",
          "2200 kcal",
          "2500 kcal",
          "2800 kcal",
          "3000 kcal",
          "3500 kcal",
        ],
        features: [
          "Pełna personalizacja",
          "Lista zakupów PDF",
          "Wsparcie dietetyka",
          "Przepisy krok po kroku",
          "Możliwość modyfikacji",
        ],
        promotion: true,
        rating: 4.8,
        reviews: 124,
      };

      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Proszę wybrać opcję kaloryczności przed dodaniem do koszyka");
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedOption,
      totalPrice: product.price * quantity,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Ładowanie produktu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-lime-600 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Powrót do sklepu
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Promo badge */}
        {product.promotion && (
          <div className="bg-lime-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-flex items-center mb-6">
            <span>
              Promocja -
              {(100 - (product.price / product.originalPrice) * 100).toFixed(0)}
              %
            </span>
          </div>
        )}

        {/* Product main section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="md:flex">
            {/* Image section */}
            <div className="md:w-1/2 p-6 md:p-8 lg:p-10">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details section */}
            <div className="md:w-1/2 p-6 md:p-8 lg:p-10">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} opinii)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice !== product.price && (
                  <span className="text-gray-500 line-through mr-2">
                    {product.originalPrice.toFixed(2)} zł
                  </span>
                )}
                <span className="text-3xl font-bold text-lime-600">
                  {product.price.toFixed(2)} zł
                </span>
                {product.originalPrice !== product.price && (
                  <span className="ml-2 text-sm text-lime-600 font-medium">
                    Oszczędzasz{" "}
                    {(product.originalPrice - product.price).toFixed(2)} zł
                  </span>
                )}
              </div>

              {/* Short description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Options */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Wybierz kaloryczność:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      className={`py-3 px-4 border rounded-lg text-center transition-colors ${
                        selectedOption === option
                          ? "border-lime-600 bg-lime-50 text-lime-700"
                          : "border-gray-300 hover:border-lime-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and add to cart */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Ilość:
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-l-lg flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <div className="h-10 w-16 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-r-lg flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedOption}
                    className={`ml-4 flex-1 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                      selectedOption
                        ? "bg-lime-600 hover:bg-lime-700 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Dodaj do koszyka
                  </button>
                </div>
              </div>

              {/* Features dropdown */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="font-medium text-gray-900">Co zawiera?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      showFeatures ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {showFeatures && (
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-lime-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Long description */}
        <div className="mt-12 bg-white shadow-lg rounded-xl overflow-hidden p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Opis produktu
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        {/* Reviews section */}
        <div className="mt-12 bg-white shadow-lg rounded-xl overflow-hidden p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Opinie klientów
          </h2>
          <div className="text-center py-8">
            <p className="text-gray-600">Ta sekcja jest w przygotowaniu</p>
            <button className="mt-4 text-sm font-medium text-lime-600 hover:text-lime-700">
              Napisz pierwszą opinię
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
