import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Clients from "./components/clients";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
