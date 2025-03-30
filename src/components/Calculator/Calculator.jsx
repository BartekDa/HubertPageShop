import React, { useState } from "react";
import { Activity, Dumbbell, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [formData, setFormData] = useState({
    gender: "male",
    age: "",
    weight: "",
    height: "",
    activity: "sedentary",
    goal: "maintain",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateBMR = () => {
    const { gender, age, weight, height } = formData;
    const numAge = parseFloat(age);
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);

    if (gender === "male") {
      return 10 * numWeight + 6.25 * numHeight - 5 * numAge + 5;
    } else {
      return 10 * numWeight + 6.25 * numHeight - 5 * numAge - 161;
    }
  };

  const calculateTDEE = (bmr) => {
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    return bmr * activityMultipliers[formData.activity];
  };

  const calculateGoalCalories = (tdee) => {
    switch (formData.goal) {
      case "lose":
        return tdee - 500;
      case "gain":
        return tdee + 500;
      default:
        return tdee;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmr = calculateBMR();
    const tdee = calculateTDEE(bmr);
    const goalCalories = calculateGoalCalories(tdee);

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      goalCalories: Math.round(goalCalories),
    });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Kalkulator Zapotrzebowania Kalorycznego
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oblicz swoje dzienne zapotrzebowanie kaloryczne i rozpocznij drogę
            do wymarzonej sylwetki
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Podstawowe informacje
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Płeć
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Mężczyzna</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Kobieta</span>
                    </label>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Wiek
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="15"
                      max="80"
                      className="focus:ring-lime-500 focus:border-lime-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                      placeholder="np. 30"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">lat</span>
                    </div>
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Waga
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                      min="40"
                      max="200"
                      step="0.1"
                      className="focus:ring-lime-500 focus:border-lime-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                      placeholder="np. 70"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">kg</span>
                    </div>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Wzrost
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      required
                      min="140"
                      max="220"
                      className="focus:ring-lime-500 focus:border-lime-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                      placeholder="np. 175"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Poziom aktywności
              </h3>
              <select
                id="activity"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm rounded-md"
              >
                <option value="sedentary">Siedzący tryb życia</option>
                <option value="light">
                  Lekka aktywność (1-3 dni w tygodniu)
                </option>
                <option value="moderate">
                  Umiarkowana aktywność (3-5 dni w tygodniu)
                </option>
                <option value="active">
                  Duża aktywność (6-7 dni w tygodniu)
                </option>
                <option value="veryActive">
                  Bardzo duża aktywność (sportowiec)
                </option>
              </select>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Cel</h3>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm rounded-md"
              >
                <option value="lose">Redukcja (schudnąć)</option>
                <option value="maintain">Utrzymanie wagi</option>
                <option value="gain">Budowa masy</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                Oblicz zapotrzebowanie
              </button>
            </div>
          </form>

          {result && (
            <div className="bg-lime-50 px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Twoje wyniki
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-lime-100 rounded-md p-3">
                        <Activity className="h-6 w-6 text-lime-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          BMR
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {result.bmr}
                          </div>
                          <div className="ml-2 text-sm font-medium text-gray-500">
                            kcal
                          </div>
                        </dd>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Podstawowa przemiana materii
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-lime-100 rounded-md p-3">
                        <Dumbbell className="h-6 w-6 text-lime-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          TDEE
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {result.tdee}
                          </div>
                          <div className="ml-2 text-sm font-medium text-gray-500">
                            kcal
                          </div>
                        </dd>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Całkowite dzienne zapotrzebowanie
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-lime-100 rounded-md p-3">
                        <Heart className="h-6 w-6 text-lime-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Cel
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {result.goalCalories}
                          </div>
                          <div className="ml-2 text-sm font-medium text-gray-500">
                            kcal
                          </div>
                        </dd>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Dla Twojego celu
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-lime-50 rounded-lg p-6 border border-lime-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-lime-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-lime-800">
                      Co dalej?
                    </h3>
                    <div className="mt-2 text-sm text-lime-700">
                      <p>
                        Masz już swoje zapotrzebowanie kaloryczne? Sprawdź moje
                        plany dietetyczne i treningowe dopasowane do Twoich
                        potrzeb.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        to="/sklep"
                        className="inline-flex items-center text-sm font-medium text-lime-600 hover:text-lime-500"
                      >
                        Przejdź do sklepu
                        <svg
                          className="ml-1 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
