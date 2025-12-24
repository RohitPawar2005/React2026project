import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-800 text-white p-4 mt-10  flex flex-col md:flex-row justify-between">

                <ul>
                    <h1>COMPANY</h1>
                    <li>About us</li>
                    <li>IndiGo Green - ESG<br /> report</li>
                    <li>6E Embrace - Diversity <br />Equity & Inclusion</li>
                    <li>IndiGoReach - Our<br /> CSR initiatives</li>
                    <li>Board of Directors</li>
                    <li>Leadership Team</li>
                    <li>Investor Relations</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>In the Media</li>
                    <li>Blog</li>
                    <li>Site Map</li>
                </ul>

                <ul>
                    <h1>SUPPORT</h1>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Cancellation & Refunds</li>
                    <li>Baggage Information</li>
                    <li>Travel Information</li>
                    <li>Medical Guidelines</li>
                    <li>Security Information</li>
                    <li>Book with Confidence</li>
                </ul>

                <ul>
                    <h1>QUICK LINKS</h1>
                    <li>Tariff Sheet</li>
                    <li>Developer Portal</li>
                    <li>Offers</li>
                    <li>Careers</li>
                    <li>Advertise with us</li>
                    <li>Sitemap</li>
                    <li>Destinations</li>
                    <li>Blogs</li>
                    <li>Terms and Conditions</li>
                    <li>Conditions of carriage</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>

                </ul>

                <ul>
                    <h1>MEDIA</h1>
                    <li>Press releases</li>
                    <li>Our awards</li>
                    <li>Testimonials</li>
                    <li>Hello 6E Magazine</li>
                    <li>In-flight Entertainment</li>
                </ul>

                <ul>
                    <h1>DOWNLOAD OUR APP</h1>
                    <img src="QR-CODE.avif" alt="" className='h-20' />
                    <li>iOS / Android</li>
                </ul>
            </footer >

            <div className="bg-blue-800 text-white p-4 ">

                <ul className="flex justify-around  text-center text-sm md:text-base">
                    <h1 className=''>Awards</h1>

                    <img src="Tripadvisor.webp" alt="" />
                    <p>Best Low Cost Airline- <br />Asia Image</p>


                    <img src="Passengers-choice.webp" alt="" />
                    <p>Passenger Choice<br /> Awards</p>


                    <img src="Skytrax.webp" alt="" />
                    <p>Best Low Cost Airline<br />-Central Asia</p>
                    <h1>SOCIAL MEDIA</h1>
                    <ul className="flex ">

                        <FaInstagramSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaTwitterSquare size={30} />
                        <FaLinkedin size={30} />
                    </ul>


                </ul>
            </div>
            <div className="bg-blue-800 text-white p-2 ">
                <p className="text-center">&copy; 2026 IndiGo Airlines ROHIT. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer