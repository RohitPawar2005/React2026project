import { useState } from "react";

export default function FlightBooking() {
  const [tripType, setTripType] = useState("oneway");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // Fare per passenger
  const adultFare = 5000;
  const childFare = 3000;
  const infantFare = 1000;

  const totalFare =
    adults * adultFare +
    children * childFare +
    infants * infantFare;

  return (
    <div className="bg-blue-50 min-h-screen flex justify-center pt-10">
      <div className="bg-white w-[1000px] rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex gap-20 justify-center text-xl font-semibold mb-6">
          <h1 className="text-blue-600">FLIGHTS</h1>
          <h1 className="text-gray-500">Sight Seeing</h1>
        </div>

        {/* Trip Type */}
        <div className="flex gap-6 justify-center font-semibold mb-6">
          <button
            onClick={() => setTripType("oneway")}
            className={`px-4 py-2 rounded-full ${
              tripType === "oneway" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            One Way
          </button>

          <button
            onClick={() => setTripType("roundtrip")}
            className={`px-4 py-2 rounded-full ${
              tripType === "roundtrip" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Round Trip
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-6 gap-4 items-center mb-6">

          <select className="border p-3 rounded-lg">
            <option>From</option>
            <option>Delhi (DEL)</option>
            <option>Mumbai (BOM)</option>
            <option>Bangalore (BLR)</option>
          </select>

          <select className="border p-3 rounded-lg">
            <option>To</option>
            <option>Delhi (DEL)</option>
            <option>Mumbai (BOM)</option>
            <option>Bangalore (BLR)</option>
          </select>

          <input type="date" className="border p-3 rounded-lg" />

          {tripType === "roundtrip" && (
            <input type="date" className="border p-3 rounded-lg" />
          )}

          <div className="border p-3 rounded-lg text-center">
            {adults + children + infants} Travellers
          </div>

          <button className="bg-blue-600 text-white font-semibold p-3 rounded-lg">
            Search Flights
          </button>
        </div>

        {/* Passenger Counter */}
        <div className="border rounded-lg p-4 grid grid-cols-3 gap-6 mb-6">

          {/* Adults */}
          <div className="text-center">
            <p className="font-semibold">Adults (₹5000)</p>
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => adults > 1 && setAdults(adults - 1)}>-</button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
          </div>

          {/* Children */}
          <div className="text-center">
            <p className="font-semibold">Children (₹3000)</p>
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => children > 0 && setChildren(children - 1)}>-</button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
          </div>

          {/* Infants */}
          <div className="text-center">
            <p className="font-semibold">Infants (₹1000)</p>
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => infants > 0 && setInfants(infants - 1)}>-</button>
              <span>{infants}</span>
              <button onClick={() => setInfants(infants + 1)}>+</button>
            </div>
          </div>

        </div>

        {/* Total Fare */}
        <div className="text-right text-xl font-bold text-blue-600">
          Total Fare : ₹ {totalFare}
        </div>

      </div>
    </div>
  );
}
