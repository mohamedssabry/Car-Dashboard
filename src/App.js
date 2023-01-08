import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dashboard/>
    </>
  );
}

export default App;
