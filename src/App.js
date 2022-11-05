import "./App.css";
import "antd/dist/antd.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Bills from "./Pages/Bills/Bills";
import Customers from "./Pages/Customers/Customers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
