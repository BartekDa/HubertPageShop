import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  Briefcase,
  Award,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Check,
  BarChart2,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const Cooperation = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    cooperationType: "",
    message: "",
    acceptTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj logika wysyłania formularza
    console.log("Formularz wysłany:", formData);
    setIsSubmitted(true);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      cooperationType: "",
      message: "",
      acceptTerms: false,
    });
  };

  // Typy współpracy
  const cooperationTypes = [
    "Sponsoring sportowy",
    "Wydarzenia fitness",
    "Produkty dla klientów",
    "Wspólne projekty marketingowe",
    "Stała współpraca partnerska",
    "Inna forma współpracy",
  ];

  // Dotychczasowi partnerzy
  const partners = [
    { name: "FitNutrition", logo: "/assets/images/1.png", since: 2019 },
    { name: "GymTech", logo: "/assets/images/1.png", since: 2020 },
    { name: "HealthPlus", logo: "/assets/images/1.png", since: 2021 },
    { name: "PowerWear", logo: "/assets/images/1.png", since: 2022 },
  ];

  // Korzyści z współpracy
  const benefits = [
    {
      title: "Zasięg",
      description: "Dostęp do mojej społeczności 50k+ obserwatorów",
      icon: <Users className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Wiarygodność",
      description: "Rekomendacja przez certyfikowanego specjalistę",
      icon: <Award className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Statystyki",
      description: "Raportowanie efektów współpracy",
      icon: <BarChart2 className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Wzrost sprzedaży",
      description: "Potwierdzone case studies z poprzednich współprac",
      icon: <TrendingUp className="h-8 w-8 text-lime-600" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Sekcja Hero */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <div className="flex items-center">
                  <Handshake className="h-10 w-10 text-lime-400" />
                  <h1 className="ml-3 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    Współpraca
                  </h1>
                </div>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Zapraszam firmy i marki do współpracy w zakresie fitnessu,
                  żywienia i zdrowego stylu życia
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Współpraca biznesowa"
          />
        </div>
      </div>

      {/* Sekcja Korzyści */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Dlaczego warto?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Korzyści z współpracy ze mną
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lime-100 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Formularz */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Zainteresowani współpracą?
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Wypełnij formularz, a skontaktuję się z Tobą w ciągu 48 godzin
                aby omówić szczegóły
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Dane kontaktowe
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex">
                    <Mail className="h-6 w-6 text-lime-600" />
                    <span className="ml-3 text-gray-600">
                      wspolpraca@hubertmaliszewski.pl
                    </span>
                  </div>
                  <div className="flex">
                    <Phone className="h-6 w-6 text-lime-600" />
                    <span className="ml-3 text-gray-600">+48 123 456 789</span>
                  </div>
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-lime-600" />
                    <span className="ml-3 text-gray-600">
                      Warszawa, ale współpracuję zdalnie w całej Polsce
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">
                    Nasi partnerzy
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {partners.map((partner, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-12 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <Check className="h-12 w-12 text-lime-600 mx-auto" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">
                    Dziękujemy za zgłoszenie!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Twoja wiadomość została wysłana. Skontaktujemy się z Tobą w
                    ciągu 48 godzin.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nazwa firmy *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Osoba kontaktowa *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cooperationType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rodzaj współpracy *
                    </label>
                    <select
                      id="cooperationType"
                      name="cooperationType"
                      value={formData.cooperationType}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    >
                      <option value="">Wybierz rodzaj współpracy</option>
                      {cooperationTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Opisz propozycję współpracy *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                        className="focus:ring-lime-500 h-4 w-4 text-lime-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="acceptTerms"
                        className="font-medium text-gray-700"
                      >
                        Akceptuję politykę prywatności i wyrażam zgodę na
                        przetwarzanie danych osobowych *
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    >
                      Wyślij zgłoszenie
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Warunki współpracy */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Warunki
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Zasady współpracy
            </p>
          </div>

          <div className="mt-10">
            <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
              <h3>Wymagania wobec partnerów:</h3>
              <ul>
                <li>
                  Produkty/usługi muszą być zgodne z moimi wartościami i
                  filozofią
                </li>
                <li>Wysoka jakość oferowanych produktów/usług</li>
                <li>Transparentność i etyczne praktyki biznesowe</li>
                <li>Wiarygodność i dobra reputacja na rynku</li>
              </ul>

              <h3 className="mt-8">Proces weryfikacji:</h3>
              <ol>
                <li>Analiza zgłoszenia (48h)</li>
                <li>Rozmowa wstępna (online/telefoniczna)</li>
                <li>Przedstawienie szczegółowej oferty współpracy</li>
                <li>
                  Testowanie produktów (w przypadku współpracy produktowej)
                </li>
                <li>Podpisanie umowy partnerskiej</li>
              </ol>

              <h3 className="mt-8">Formy współpracy:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <DollarSign className="h-5 w-5 text-lime-600 mr-2" />
                    Sponsoring
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    W zamian za promocję Twojej marki w moich kanałach
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <Briefcase className="h-5 w-5 text-lime-600 mr-2" />
                    Projekty specjalne
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Wspólne eventy, konkursy, kampanie marketingowe
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <Check className="h-5 w-5 text-lime-600 mr-2" />
                    Rekomendacje
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Testowanie i polecanie produktów moim podopiecznym
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <Handshake className="h-5 w-5 text-lime-600 mr-2" />
                    Partnerstwo
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Długoterminowa współpraca na wybranych zasadach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja CTA */}
      <div className="bg-lime-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Masz pytania dotyczące współpracy?
          </h2>
          <p className="mt-4 text-lg leading-6 text-lime-200">
            Skontaktuj się bezpośrednio, aby omówić szczegóły potencjalnej
            współpracy
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-lime-700 bg-white hover:bg-lime-50"
            >
              Formularz kontaktowy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
