import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Booking from "./Components/Booking/Booking";
// import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Booking/>
    </>
  );
}

export default App;
