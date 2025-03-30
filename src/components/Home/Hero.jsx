import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Dumbbell, Award, Users, Heart, Check } from "lucide-react";

const Hero = () => {
  const transformations = [
    {
      name: "Anna",
      result: "-15kg",
      duration: "3 miesiące",
      quote: "Dzięki Hubertowi odzyskałam pewność siebie i zdrową sylwetkę!",
    },
    {
      name: "Krzysztof",
      result: "+8kg mięśni",
      duration: "5 miesięcy",
      quote: "Profesjonalne podejście i świetne efekty w budowaniu masy.",
    },
    {
      name: "Magda",
      result: "-22kg",
      duration: "6 miesięcy",
      quote: "Nie wierzyłam, że mogę tak zmienić swoje życie. Dziękuję!",
    },
  ];

  const stats = [
    { value: "7+", label: "lat doświadczenia" },
    { value: "200+", label: "zadowolonych klientów" },
    { value: "100%", label: "zaangażowania" },
  ];

  return (
    <div className="bg-gray-900">
      {/* Główna sekcja hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Hubert Maliszewski</span>
                  <span className="block text-lime-400">
                    TWÓJ TRENER ONLINE
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Profesjonalne plany treningowe i żywieniowe dostosowane do
                  Twoich potrzeb i celów.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/wspolpraca"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 md:py-4 md:text-lg md:px-10"
                    >
                      Rozpocznij współpracę
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/kalkulator"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      <Dumbbell className="mr-2 h-5 w-5" />
                      Kalkulator
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
            alt="Trener personalny"
          />
        </div>
      </div>

      {/* Sekcja "O mnie" */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-400 font-semibold tracking-wide uppercase">
              O MNIE
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Kim jestem i jak mogę Ci pomóc?
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <img
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hubert Maliszewski"
              />
            </div>
            <div className="lg:w-2/3 lg:pl-12">
              <div className="text-lg text-gray-300">
                <p className="mb-4">
                  Cześć, jestem Hubert - certyfikowany trener personalny z pasją
                  do pomagania ludziom w osiąganiu ich celów fitnessowych. Od
                  ponad 7 lat pomagam moim podopiecznym transformować ich ciała
                  i umysły.
                </p>
                <p className="mb-4">
                  Specjalizuję się w treningu siłowym, redukcji tkanki
                  tłuszczowej oraz budowaniu masy mięśniowej. Moje podejście
                  opiera się na naukowych podstawach i indywidualnym dopasowaniu
                  do każdej osoby.
                </p>
                <p className="mb-6">
                  Wierzę, że każdy może osiągnąć wymarzoną sylwetkę, jeśli ma
                  odpowiednie wsparcie i wiedzę. To właśnie oferuję w moich
                  programach treningowych i dietetycznych.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-lime-400">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Moje kwalifikacje:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Certyfikat Trenera Personalnego - Akademia Wychowania
                      Fizycznego
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Specjalizacja w żywieniu sportowym
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Ukończone kursy z psychologii sportu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-lime-400 mr-2 mt=0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Doświadczenie w pracy z różnymi grupami wiekowymi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja "Moje podejście" */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-400 font-semibold tracking-wide uppercase">
              MOJE PODEJŚCIE
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Co wyróżnia moją metodę pracy?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-lime-500 rounded-md p-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg leading-6 font-medium text-white">
                    Indywidualne podejście
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-300">
                  Każdy plan treningowy i dietetyczny jest tworzony od podstaw,
                  biorąc pod uwagę Twoje cele, preferencje, styl życia i stan
                  zdrowia. Nie ma u mnie gotowych rozwiązań - wszystko jest
                  dopasowane do Ciebie.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-lime-500 rounded-md p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg leading-6 font-medium text-white">
                    Profesjonalizm i wiedza
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-300">
                  Moje programy opierają się na aktualnej wiedzy naukowej z
                  zakresu treningu i żywienia. Stale się dokształcam, aby
                  zapewnić Ci najskuteczniejsze metody pracy.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-lime-500 rounded-md p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg leading-6 font-medium text-white">
                    Wsparcie i motywacja
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-300">
                  Nie zostawiam Cię samego z planem treningowym. Oferuję stałe
                  wsparcie, regularne konsultacje i motywację, która pomoże Ci
                  wytrwać w postanowieniach.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-lime-500 rounded-md p-3">
                    <Dumbbell className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg leading-6 font-medium text-white">
                    Zrównoważony rozwój
                  </h3>
                </div>
                <p className="mt-2 text-base text-gray-300">
                  Dbam nie tylko o Twoją sylwetkę, ale też o zdrowie i dobre
                  samopoczucie. Unikam ekstremalnych diet i przetrenowania,
                  stawiając na metody, które możesz stosować długoterminowo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja "Metamorfozy" */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-400 font-semibold tracking-wide uppercase">
              METAMORFOZY
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Efekty moich podopiecznych
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Zobacz, jak zmieniły się osoby, które zdecydowały się na
              współpracę ze mną
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((person, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover h-64 w-full"
                      src={"/assets/images/1.png"}
                      alt={`Metamorfoza ${person.name}`}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-lime-600 text-white px-3 py-1 text-sm font-bold">
                    {person.result} • {person.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-gray-300 italic">"{person.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/metamorfozy"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700"
            >
              Zobacz wszystkie metamorfozy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sekcja CTA */}
      <div className="bg-lime-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Gotowy na zmianę?</span>
            <span className="block">Zacznij już dziś!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-lime-200">
            Nie czekaj - Twoja wymarzona sylwetka jest na wyciągnięcie ręki.
            Wybierz odpowiedni pakiet i rozpocznij swoją przemianę.
          </p>
          <Link
            to="/sklep"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lime-600 bg-white hover:bg-lime-50 sm:w-auto"
          >
            Wybierz pakiet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
