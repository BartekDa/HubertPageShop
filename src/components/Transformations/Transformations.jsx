// Transformations.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Transformations = () => {
  const allTransformations = [
    {
      id: 1,
      name: "Anna",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-25kg",
      duration: "6 miesięcy",
      quote: "Kompletna przemiana - nie tylko ciała, ale i podejścia do życia!",
    },
    {
      id: 2,
      name: "Krzysztof",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "+12kg mięśni",
      duration: "8 miesięcy",
      quote:
        "Profesjonalny plan treningowy i żywieniowy dał niesamowite efekty",
    },
    {
      id: 3,
      name: "Magda",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-18kg",
      duration: "4 miesiące",
      quote: "Pierwszy raz udało mi się schudnąć w zdrowy i trwały sposób",
    },
    {
      id: 4,
      name: "Tomasz",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-30kg",
      duration: "9 miesięcy",
      quote: "Dzięki Hubertowi odzyskałem zdrowie i kondycję",
    },
    {
      id: 5,
      name: "Karolina",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-14kg",
      duration: "5 miesięcy",
      quote:
        "Kompleksowe podejście dało efekty, których nie mogłam osiągnąć sama",
    },
    {
      id: 6,
      name: "Marek",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "+10kg mięśni",
      duration: "7 miesięcy",
      quote: "Najlepsza decyzja w moim życiu - polecam każdemu!",
    },
    {
      id: 7,
      name: "Agnieszka",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-20kg",
      duration: "6 miesięcy",
      quote: "Dzięki indywidualnemu podejściu w końcu widzę efekty",
    },
    {
      id: 8,
      name: "Piotr",
      beforeImage: "/assets/images/1.png",
      afterImage: "/assets/images/1.png",
      result: "-17kg",
      duration: "5 miesięcy",
      quote: "Nie wierzyłem, że w moim wieku mogę tak się zmienić",
    },
  ];

  return (
    <div className="bg-lime-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Wszystkie metamorfozy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Prawdziwe historie i efekty moich podopiecznych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allTransformations.map((transformation) => (
            <div
              key={transformation.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={transformation.beforeImage}
                  alt={`Przed - ${transformation.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src={transformation.afterImage}
                  alt={`Po - ${transformation.name}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-lime-600 text-white px-3 py-1 text-sm font-bold">
                  {transformation.result} • {transformation.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {transformation.name}
                </h3>
                <p className="mt-2 text-gray-600 italic">
                  "{transformation.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/sklep"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700"
          >
            Rozpocznij swoją przemianę
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
