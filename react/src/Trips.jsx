import { useState } from "react";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 px-4 py-2 text-blue-700 font-semibold hover:text-blue-900"
            >
                Book
                <span>⌄</span>
            </button>

            \
            {open && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 border">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                            Flight
                        </li>
                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                            Group Booking
                        </li>
                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                            Book Cargo
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
