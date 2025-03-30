import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Dumbbell,
  HeartPulse,
  BookOpen,
  UserCheck,
  Calendar,
  Star,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Leaf,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

const About = () => {
  // Dane trenera
  const trainerData = {
    name: "Hubert Maliszewski",
    specialization: "Trener personalny & Dietetyk sportowy",
    experience: "7+ lat",
    clients: "200+",
    age: 32,
    certifications: 12,
    transformations: 150,
  };

  // Kwalifikacje
  const qualifications = [
    {
      title: "Certyfikowany Trener Personalny",
      institution: "Akademia Wychowania Fizycznego",
      year: "2016",
      icon: <Award className="h-6 w-6 text-lime-600" />,
    },
    {
      title: "Specjalista ds. Żywienia Sportowego",
      institution: "Polskie Towarzystwo Dietetyki",
      year: "2018",
      icon: <Leaf className="h-6 w-6 text-lime-600" />,
    },
    {
      title: "Psychologia Sportu",
      institution: "Uniwersytet Sportowy",
      year: "2019",
      icon: <UserCheck className="h-6 w-6 text-lime-600" />,
    },
    {
      title: "Trening Medyczny i Korekcyjny",
      institution: "Instytut Rehabilitacji",
      year: "2020",
      icon: <HeartPulse className="h-6 w-6 text-lime-600" />,
    },
    {
      title: "Trening Siłowy dla Zaawansowanych",
      institution: "National Strength Association",
      year: "2021",
      icon: <Dumbbell className="h-6 w-6 text-lime-600" />,
    },
    {
      title: "Suplementacja w Sporcie",
      institution: "International Sports Science Association",
      year: "2022",
      icon: <ShieldCheck className="h-6 w-6 text-lime-600" />,
    },
  ];

  // Metody pracy
  const methodologies = [
    {
      title: "Indywidualne Plany",
      description:
        "Każdy program tworzony od podstaw po analizie potrzeb, możliwości i celów klienta",
      icon: <UserCheck className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Holistyczne Podejście",
      description:
        "Dbam nie tylko o trening i dietę, ale też regenerację, sen i zdrowie psychiczne",
      icon: <HeartPulse className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Nauka Samodzielności",
      description:
        "Uczę zasad, a nie gotowych rozwiązań, abyś mógł kontynuować progres samodzielnie",
      icon: <BookOpen className="h-8 w-8 text-lime-600" />,
    },
    {
      title: "Monitorowanie Postępów",
      description:
        "Regularne pomiary i analizy skuteczności programu z korektami w razie potrzeby",
      icon: <Calendar className="h-8 w-8 text-lime-600" />,
    },
  ];

  // Wartości
  const values = [
    {
      name: "Profesjonalizm",
      icon: <Trophy className="h-6 w-6 text-lime-600" />,
    },
    { name: "Etyka", icon: <ShieldCheck className="h-6 w-6 text-lime-600" /> },
    { name: "Pasja", icon: <HeartPulse className="h-6 w-6 text-lime-600" /> },
    { name: "Cierpliwość", icon: <Clock className="h-6 w-6 text-lime-600" /> },
    {
      name: "Zaangażowanie",
      icon: <Users className="h-6 w-6 text-lime-600" />,
    },
  ];

  // Opinie
  const testimonials = [
    {
      name: "Anna K.",
      result: "-28kg",
      text: "Hubert zmienił nie tylko moje ciało, ale całe podejście do zdrowia. Po 8 miesiącach współpracy czuję się jak nowa osoba!",
      rating: 5,
    },
    {
      name: "Marek T.",
      result: "+12kg mięśni",
      text: "Jako kulturysta-amator współpracowałem z wieloma trenerami, ale dopiero Hubert pomógł mi osiągnąć wymarzoną formę.",
      rating: 5,
    },
    {
      name: "Katarzyna W.",
      result: "-15kg",
      text: "Indywidualne podejście i stałe wsparcie to coś, czego brakowało mi u poprzednich trenerów. Polecam każdemu!",
      rating: 5,
    },
  ];

  // Renderowanie gwiazdek dla ocen
  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ));
  };

  return (
    <div className="bg-gray-50">
      {/* Sekcja Hero */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Poznaj mnie bliżej</span>
                  <span className="block text-lime-400">
                    Twój przewodnik po świecie fitnessu
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Dowiedz się dlaczego moje podejście do treningu i żywienia
                  przynosi tak wyjątkowe efekty
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Hubert Maliszewski - trener personalny"
          />
        </div>
      </div>

      {/* Sekcja Intro */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Kim jestem?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Moja historia i podejście do treningu
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
              <img
                className="rounded-lg shadow-xl w-full"
                src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hubert Maliszewski"
              />
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">
                  Dane kontaktowe
                </h3>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>Email: kontakt@hubertmaliszewski.pl</p>
                  <p>Telefon: +48 123 456 789</p>
                  <p>Social media: @trenerhubert</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-8">
              <div className="prose prose-lg text-gray-500 max-w-none">
                <p className="text-lg">
                  Cześć, jestem Hubert - certyfikowany trener personalny,
                  dietetyk sportowy i pasjonat zdrowego stylu życia. Moja
                  przygoda z fitnessem rozpoczęła się ponad 10 lat temu, gdy sam
                  zmagałem się z nadwagą i kompleksami. Przemiana, której
                  doświadczyłem na własnej skórze, zainspirowała mnie do
                  pomagania innym w osiąganiu ich celów.
                </p>

                <h3 className="text-gray-900">Moja filozofia</h3>
                <p>
                  Wierzę, że prawdziwy sukces fitnessowy to nie tylko liczby na
                  wadze czy centymetrze, ale przede wszystkim:
                </p>
                <ul>
                  <li>Poprawa zdrowia i samopoczucia</li>
                  <li>Zwiększenie energii życiowej</li>
                  <li>Budowanie pewności siebie</li>
                  <li>Nauka zdrowych nawyków na całe życie</li>
                </ul>

                <h3 className="text-gray-900">
                  Dlaczego warto ze mną współpracować?
                </h3>
                <p>
                  W przeciwieństwie do wielu trenerów, nie stosuję szablonowych
                  rozwiązań. Każdy program tworzę od podstaw, uwzględniając Twój
                  stan zdrowia, dotychczasowe doświadczenia, preferencje i cel.
                  Dzięki mojemu interdyscyplinarnemu wykształceniu (trenerskie +
                  dietetyka + psychologia sportu) oferuję kompleksowe podejście,
                  które przynosi trwałe efekty.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-lime-600">
                      {trainerData.experience}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Doświadczenia
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-lime-600">
                      {trainerData.clients}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Klientów
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-lime-600">
                      {trainerData.certifications}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Certyfikatów
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-lime-600">
                      {trainerData.transformations}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Metamorfoz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Kwalifikacje */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Kwalifikacje
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Moje wykształcenie i certyfikaty
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Regularnie podnoszę swoje kwalifikacje, aby zapewnić Ci
              najskuteczniejsze metody treningowe
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-6">
              {qualifications.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <div className="mt-1 text-gray-600">
                        <p>{item.institution}</p>
                        <p className="text-sm text-gray-500">
                          Uzyskane: {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Metody Pracy */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Metody pracy
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Jak wygląda współpraca ze mną?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {methodologies.map((method, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-lime-100 rounded-md p-3">
                      {method.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {method.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-lime-50 border border-lime-100 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Proces współpracy krok po kroku:
              </h3>
              <ol className="mt-4 space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-lime-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    1
                  </span>
                  <span>Szczegółowy wywiad i analiza potrzeb</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-lime-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    2
                  </span>
                  <span>Pomiary antropometryczne i testy sprawnościowe</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-lime-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    3
                  </span>
                  <span>
                    Przygotowanie spersonalizowanego planu treningowego i
                    żywieniowego
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-lime-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    4
                  </span>
                  <span>Regularne konsultacje i modyfikacje programu</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-lime-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    5
                  </span>
                  <span>
                    Nauka samodzielności i przygotowanie do utrzymania efektów
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Wartości */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Wartości
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Co jest dla mnie najważniejsze?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-lime-50">
                    {value.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-gray-900">
                    {value.name}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                Etyka zawodowa
              </h3>
              <p className="mt-2 text-gray-600">
                W swojej pracy kieruję się zasadami etyki zawodowej trenera
                personalnego. Nie stosuję niedozwolonych środków, nie obiecuję
                nierealnych efektów w krótkim czasie, a przede wszystkim -
                stawiam zdrowie klienta na pierwszym miejscu. Współpracuję tylko
                z certyfikowanymi specjalistami i polecam wyłącznie sprawdzone,
                naukowo potwierdzone metody.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Opinie */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
              Opinie
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Co mówią o mnie podopieczni?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-lime-600 text-white rounded-md px-3 py-1 text-sm font-bold">
                      {testimonial.result}
                    </div>
                    <div className="ml-4">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </blockquote>
                  <div className="mt-4 font-medium text-gray-900">
                    — {testimonial.name}
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
      </div>

      {/* Sekcja CTA */}
      <div className="bg-lime-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Gotowy na zmianę?</span>
            <span className="block">Zacznijmy współpracę!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-lime-200">
            Nie czekaj - Twoja wymarzona sylwetka jest na wyciągnięcie ręki.
            Wybierz odpowiedni pakiet i rozpocznij swoją przemianę już dziś.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/wspolpraca"
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-lime-700 bg-white hover:bg-lime-50"
            >
              Wybierz pakiet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-800 hover:bg-lime-900"
            >
              Skontaktuj się
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
