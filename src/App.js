import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import CompanyUs from "../src/Pages/Company Us/CompanyUs";
import Products from "../src/Pages/Products/Products";
import Service from "../src/Pages/Servic/Servic";
import Contact from "../src/Pages/Contact/Contact";
import "./App.scss"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/companyUs" element={<CompanyUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
