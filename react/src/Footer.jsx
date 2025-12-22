import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-800 text-white p-4 mt-10  flex flex-col md:flex-row justify-between">

                <ul>
                    <h1>COMPANY</h1>
                    <li>About us</li>
                    <li>IndiGo Green - ESG report</li>
                    <li>6E Embrace - Diversity Equity & Inclusion</li>
                    <li>IndiGoReach - Our CSR initiatives</li>
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
                <h1>Awards</h1>
                <ul className="flex justify-around items-center text-center gap-4 text-sm md:text-base">

                    <img src="Tripadvisor.webp" alt="" />
                    <p>Best Low Cost Airline-Asia Image</p>


                    <img src="Passengers-choice.webp" alt="" />
                    <p>Passenger Choice Awards</p>


                    <img src="Skytrax.webp" alt="" />
                    <p>Best Low Cost Airline-Central Asia</p>

                    <h1>SOCIAL MEDIA</h1>
                </ul>
            </div>
            <div>
                <p className="text-center">&copy; 2024 IndiGo Airlines. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer