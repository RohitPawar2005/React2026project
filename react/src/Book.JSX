import React from "react"
import Session from './Session'
import Footer from './Footer'
const Book = () => {
    return (
        <div>
            <div className="bg-blue-100 text-center p-10 h-40 text-4xl  font-semibold">
                <h1 >Hi there, plan your journey with ease - Flights</h1>
            </div>




            <Session />
            <div>
                <img src="111.avif" alt="" />
            </div>
            <Footer />

        </div>
    );
}
export default Book