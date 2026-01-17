import React from 'react'
import Footer from './Footer.jsx'

const Checkin = () => {
    return (
        <>
            <div className="w-full bg-white shadow-md rounded-2xl p-6">

                <div className="flex items-center gap-6 border-b pb-4">
                    <button className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-2">✈ Flights</button>

                </div>

                <div className="flex gap-6 mt-4 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="trip" defaultChecked /> One Way
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="trip" /> Round Trip
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="trip" /> Multi City
                    </label>
                </div>

                <div className="grid grid-cols-5 gap-4 mt-6">
                    <div className="border rounded-xl p-4">
                        <p className="text-xs text-gray-500">From</p>
                        <h2 className="font-semibold">Delhi, DEL</h2>
                        <p className="text-xs text-gray-400">Indira Gandhi Intl</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-xs text-gray-500">To</p>
                        <h2 className="font-semibold text-gray-400">Going to?</h2>
                        <p className="text-xs text-gray-400">Search by city/airport</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-xs text-gray-500">Departure</p>
                        <h2 className="font-semibold">16 Jan</h2>
                        <p className="text-xs text-gray-400">Friday</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-xs text-gray-500">Return</p>
                        <p className="text-sm text-green-600">Save up to ₹1000</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-xs text-gray-500">Travellers</p>
                        <h2 className="font-semibold">1 Passenger</h2>
                    </div>
                </div>


                <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-3">
                        <span className="px-4 py-2 border rounded-full text-sm">Students Offer</span>
                        <span className="px-4 py-2 border rounded-full text-sm">Family & Friends</span>
                    </div>
                    <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold">
                        Search
                    </button>


                </div>
                <Footer />



            </div>
        </>
    )
}

export default Checkin