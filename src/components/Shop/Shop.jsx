import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Zap, Check, ArrowRight } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      const productsData = [
        {
          id: 1,
          name: "Dieta Standard",
          price: 127.9,
          originalPrice: 159.9,
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description:
            "Indywidualny plan żywieniowy dostosowany do Twoich potrzeb i preferencji",
          promotion: true,
          category: "dieta",
          rating: 4.8,
          features: ["Personalizacja", "Lista zakupów", "Wsparcie 24/7"],
          bestseller: true,
        },
        {
          id: 2,
          name: "Trening Personalny",
          price: 199.9,
          originalPrice: 249.9,
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Profesjonalny program treningowy z instrukcjami wideo",
          promotion: true,
          category: "trening",
          rating: 4.9,
          features: ["Dostosowany do celów", "Plan progresji", "Konsultacje"],
          bestseller: true,
        },
        {
          id: 3,
          name: "Pakiet Kompletny",
          price: 299.9,
          originalPrice: 399.9,
          image:
            "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description:
            "Pełna transformacja - dieta + trening + wsparcie mentora",
          promotion: true,
          category: "pakiet",
          rating: 5.0,
          features: [
            "Pełna personalizacja",
            "Cotygodniowe konsultacje",
            "Dostęp do grupy VIP",
          ],
          bestseller: false,
        },
        {
          id: 4,
          name: "Konsultacja Online",
          price: 99.9,
          originalPrice: 129.9,
          image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "60-minutowa konsultacja z analizą i zaleceniami",
          promotion: false,
          category: "konsultacja",
          rating: 4.7,
          features: ["Analiza celów", "Plan działania", "Rekomendacje"],
          bestseller: false,
        },
        {
          id: 5,
          name: "Pakiet Rodzinny",
          price: 399.9,
          originalPrice: 499.9,
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Zdrowa dieta dla całej rodziny (do 4 osób)",
          promotion: true,
          category: "pakiet",
          rating: 4.9,
          features: [
            "Dla całej rodziny",
            "Zróżnicowane menu",
            "Oszczędność czasu",
          ],
          bestseller: true,
        },
        {
          id: 6,
          name: "Trening dla Par",
          price: 249.9,
          originalPrice: 299.9,
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Wspólny program treningowy dla par",
          promotion: true,
          category: "trening",
          rating: 4.8,
          features: ["Synchronizacja treningów", "Wspólne cele", "Motywacja"],
          bestseller: false,
        },
      ];

      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const getSortedProducts = () => {
    let filteredProducts = [...products];

    // Filtrowanie
    if (activeFilter !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === activeFilter
      );
    }

    // Sortowanie
    switch (sortOption) {
      case "price-asc":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "name-asc":
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      case "rating":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-400 fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-4 w-4 text-yellow-400 fill-current opacity-50"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100  from-lime-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Sekcja */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="block">Odkryj moje</span>
            <span className="block text-lime-600">
              programy treningowe i diety
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
            Wybierz idealny plan dopasowany do Twoich celów i stylu życia
          </p>
        </div>

        {/* Filtry i sortowanie */}
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === "all"
                  ? "bg-lime-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Wszystkie produkty
            </button>
            <button
              onClick={() => setActiveFilter("dieta")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === "dieta"
                  ? "bg-lime-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Diety
            </button>
            <button
              onClick={() => setActiveFilter("trening")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === "trening"
                  ? "bg-lime-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Treningi
            </button>
            <button
              onClick={() => setActiveFilter("pakiet")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === "pakiet"
                  ? "bg-lime-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Pakiety
            </button>
            <button
              onClick={() => setActiveFilter("konsultacja")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === "konsultacja"
                  ? "bg-lime-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Konsultacje
            </button>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent shadow-sm"
            >
              <option value="default">Sortuj domyślnie</option>
              <option value="price-asc">Cena: rosnąco</option>
              <option value="price-desc">Cena: malejąco</option>
              <option value="name-asc">Nazwa: A-Z</option>
              <option value="name-desc">Nazwa: Z-A</option>
              <option value="rating">Najwyżej oceniane</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Liczba produktów */}
        <p className="text-sm text-gray-500 mb-6">
          Znaleziono{" "}
          <span className="font-medium">{getSortedProducts().length}</span>{" "}
          produktów
        </p>

        {/* Karty produktów */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {getSortedProducts().map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                product.bestseller
                  ? "border-2 border-lime-500"
                  : "border border-gray-100"
              }`}
            >
              {/* Nagłówek karty */}
              <div className="relative">
                {product.promotion && (
                  <div className="absolute top-3 left-3 bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    PROMOCJA -
                    {(
                      100 -
                      (product.price / product.originalPrice) * 100
                    ).toFixed(0)}
                    %
                  </div>
                )}
                {product.bestseller && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    BESTSELLER
                  </div>
                )}
                <Link to={`/produkt/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
              </div>

              {/* Treść karty */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <Link to={`/produkt/${product.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-lime-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-xs text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-gray-600">{product.description}</p>

                {/* Lista cech */}
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Cena i przycisk */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    {product.originalPrice !== product.price && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {product.originalPrice.toFixed(2)} zł
                      </span>
                    )}
                    <span className="text-xl font-bold text-lime-600">
                      {product.price.toFixed(2)} zł
                    </span>
                    {product.originalPrice !== product.price && (
                      <span className="ml-2 text-xs text-lime-600 font-medium">
                        Oszczędzasz{" "}
                        {(product.originalPrice - product.price).toFixed(2)} zł
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/produkt/${product.id}`}
                    className="flex items-center px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Kup teraz
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja dodatkowa */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Nie możesz się zdecydować?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Skorzystaj z bezpłatnej konsultacji, a pomogę Ci wybrać najlepszy
              program dopasowany do Twoich potrzeb.
            </p>
            <Link
              to="/kontakt"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-lime-600 hover:bg-lime-700"
            >
              Umów konsultację
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
