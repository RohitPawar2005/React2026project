import React, { useState } from "react";

const FlightSearch = () => {

  // ===== BASIC =====
  const [tripType, setTripType] = useState("oneway");
  const [fromCity, setFromCity] = useState("Bhopal");
  const [fromStation, setFromStation] = useState("BHO - Raja Bhoj Airport");

  const [toCity, setToCity] = useState("Delhi");
  const [toStation, setToStation] = useState("DEL - IGI Airport");

  // ===== DATE =====
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // ===== PLATFORM / AIRLINE =====
  const [platform, setPlatform] = useState("IndiGo");

  // ===== PASSENGERS =====
  const [passenger, setPassenger] = useState(1);

  // ===== CLASS =====
  const [travelClass, setTravelClass] = useState("Economy");

  // ===== FUNCTIONS =====
  const swapCity = () => {
    setFromCity(toCity);
    setToCity(fromCity);
    setFromStation(toStation);
    setToStation(fromStation);
  };

  return (
    <div className="bg-blue-900 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-xl">

        {/* Trip Type */}
        <div className="flex gap-6 mb-6">
          <label>
            <input
              type="radio"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            One Way
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "round"}
              onChange={() => setTripType("round")}
            />
            Round Trip
          </label>
        </div>

        {/* From To */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 border p-4 rounded-xl">

          {/* From */}
          <div>
            <p className="text-sm text-gray-500">From</p>
            <input
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="font-bold text-blue-700 w-full"
            />
            <select
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
              className="w-full mt-1 border"
            >
              <option>BHO - Raja Bhoj Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>


            </select>
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center">
            <button
              onClick={swapCity}
              className="border rounded-full px-3 py-1"
            >
              ⇄
            </button>
          </div>

          {/* To */}
          <div>
            <p className="text-sm text-gray-500">To</p>
            <input
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="font-bold text-blue-700 w-full"
            />
            <select
              value={toStation}
              onChange={(e) => setToStation(e.target.value)}
              className="w-full mt-1 border"
            >
              <option>DEL - IGI Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>IDR - Indore Airport</option>
              <option>BOM - Mumbai Airport</option>
              <option>IDR - Indore Airport</option>

            </select>
          </div>

          {/* Departure */}
          <div>
            <p className="text-sm text-gray-500">Departure</p>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border w-full"
            />
          </div>

          {/* Return */}
          <div>
            <p className="text-sm text-gray-500">Return</p>
            <input
              type="date"
              disabled={tripType !== "round"}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border w-full"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

          {/* Platform */}
          <div>
            <p className="text-sm">Platform / Airline</p>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="border w-full"
            >
              <option>IndiGo</option>
              <option>Air India</option>
              <option>Vistara</option>
              <option>Akasa Air</option>
            </select>
          </div>

          {/* Class */}
          <div>
            <p className="text-sm">Class</p>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="border w-full"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
            </select>
          </div>

          {/* Passenger */}
          <div>
            <p className="text-sm">Passengers</p>
            <input
              type="number"
              min="1"
              value={passenger}
              onChange={(e) => setPassenger(e.target.value)}
              className="border w-full"
            />
          </div>

          {/* Search */}
          <div className="flex items-end">
            <button
              onClick={() =>
                alert(`
From: ${fromCity} (${fromStation})
To: ${toCity} (${toStation})
Date: ${departureDate}
Return: ${returnDate}
Platform: ${platform}
Passengers: ${passenger}
Class: ${travelClass}
                `)
              }
              className="bg-blue-900 text-white w-full py-3 rounded"
            >
              Search Flights
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlightSearch;
