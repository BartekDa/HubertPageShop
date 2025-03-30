import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-sm">
          <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-lime-100 mb-4">
            <ShoppingCart className="h-10 w-10 text-lime-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Twój koszyk jest pusty
          </h1>
          <p className="text-gray-600 mb-6">
            Przejdź do sklepu, aby znaleźć idealny plan dla siebie
          </p>
          <Link
            to="/sklep"
            className="inline-flex items-center justify-center px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Przeglądaj produkty
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Twój koszyk</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} {cartItems.length === 1 ? "produkt" : "produkty"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista produktów */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedOption}-${index}`}
                    className="p-6 flex flex-col sm:flex-row"
                  >
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                      <img
                        className="h-24 w-24 rounded-lg object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            to={`/produkt/${item.id}`}
                            className="text-lg font-medium text-gray-900 hover:text-lime-600"
                          >
                            {item.name}
                          </Link>
                          {item.selectedOption && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.selectedOption}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.selectedOption)
                          }
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.selectedOption,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.selectedOption,
                                item.quantity + 1
                              )
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            {item.totalPrice.toFixed(2)} zł
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-500">
                              {item.price.toFixed(2)} zł/szt
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-gray-200">
                <button
                  onClick={clearCart}
                  className="inline-flex items-center text-sm text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Wyczyść cały koszyk
                </button>
              </div>
            </div>
          </div>

          {/* Podsumowanie */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Podsumowanie
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Wartość zamówienia</span>
                  <span className="font-medium text-gray-900">
                    {cartTotal.toFixed(2)} zł
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Dostawa</span>
                  <span className="font-medium text-lime-600">
                    Produkt cyfrowy (0 zł)
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Do zapłaty
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {cartTotal.toFixed(2)} zł
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                  >
                    Przejdź do kasy
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/sklep"
                    className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Kontynuuj zakupy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
