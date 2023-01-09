import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Booking from "./Components/Booking/Booking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
