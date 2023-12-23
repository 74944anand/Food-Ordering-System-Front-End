import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import Order from "./Components/Order";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Hotels from "./Components/Hotels";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Orders" element={<Order />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
