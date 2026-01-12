import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const Form2 = () => {
    const vantaRef = useRef(null);

    let [form, setForm] = useState({
        myname: "",
        mymobail: "",
        myemail: "",
    });

    let handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const effect = CLOUDS.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
        });

        return () => {
            if (effect) effect.destroy();
        };
    }, []);

    return (
        <div ref={vantaRef} className="min-h-screen flex items-center justify-center bg-blue-300">
            <form onSubmit={handleSubmit} className="bg-blue-100 p-8 rounded-2xl shadow-xl w-75">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Login Form
                </h2>

                <div className="mb-4">
                    <p className="block text-gray-600 mb-1">Name</p>
                    <input type="text" placeholder="Enter your name" name="myname" value={form.myname} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div className="mb-4">
                    <p className="block text-gray-600 mb-1">mobail</p>
                    <input type="text" name="mymobail" value={form.mymobail} onChange={handleChange} placeholder="Enter your mobail no"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-6">
                    <p className="block text-gray-600 mb-1">Email</p>
                    <input type="email" name="myemail" value={form.myemail} onChange={handleChange} placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" >Login</button>
                </div>
            </form>
        </div>
    );
};

export default Form2;
