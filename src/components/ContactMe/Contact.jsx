import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj logika wysyłania formularza
    console.log("Formularz wysłany:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Symulacja opóźnienia resetu
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Skontaktuj się ze mną
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Masz pytania? Chętnie na nie odpowiem!
          </p>
        </div>

        {/* Główna sekcja */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formularz kontaktowy */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Wyślij wiadomość
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Wiadomość wysłana!
                </h3>
                <p className="text-gray-600">
                  Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
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
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Temat *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="Współpraca">Współpraca</option>
                    <option value="Pytanie o produkt">Pytanie o produkt</option>
                    <option value="Inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Informacje kontaktowe */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Dane kontaktowe
              </h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a
                      href="mailto:kontakt@twojadomena.pl"
                      className="text-base text-gray-900 hover:text-lime-600"
                    >
                      kontakt@twojadomena.pl
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">
                      Telefon
                    </h3>
                    <a
                      href="tel:+48123456789"
                      className="text-base text-gray-900 hover:text-lime-600"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Adres</h3>
                    <p className="text-base text-gray-900">
                      ul. Przykładowa 123
                      <br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">
                      Godziny pracy
                    </h3>
                    <p className="text-base text-gray-900">
                      Pon-Pt: 8:00 - 18:00
                      <br />
                      Sob: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Znajdź mnie w social media
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Facebook className="h-8 w-8 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    Facebook
                  </span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    Instagram
                  </span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="h-8 w-8 text-blue-700" />
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Mapka */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <iframe
                title="Lokalizacja"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Warszawa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
