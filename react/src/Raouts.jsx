import { Routes, Route } from "react-router-dom";
import Book from "./Book";
// import Trips from "./Trips";
// import Login from "./Login";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Book />} />
            {/* <Route path="/trips" element={<Trips />} />
            <Route path="/login" element={<Login />} /> */}
        </Routes>
    );
}

export default App;
