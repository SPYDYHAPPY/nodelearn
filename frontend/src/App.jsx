import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { SpecialSale } from "./Components/SpecialPrice";
import { Sitetopnav, Sitefooter } from "./Layouts/Sitelayout";
import { Shopcart } from "./Components/cart";
import { AuthUser } from "./Components/Authuser";
import { Registeruser } from "./Components/Register";
import { AllProducts, Popularitems, NewItems } from "./Components/allproducts";
import { Singleproduct } from "./Components/productDetails";
import { Forgotpassword } from "./Components/forgot";
import { NoMatch } from "./Components/no-match";
import { About } from "./Components/about";

function App() {
  return (
    <>
      <Sitetopnav />
      <Routes>
        <Route path="/" element={<SpecialSale />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/Userlogin" element={<AuthUser />} />
        <Route path="/newuser" element={<Registeruser />} />
        <Route path="/forgot-user" element={<Forgotpassword />} />
        <Route path="/mycart" element={<Shopcart />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/popular" element={<Popularitems />} />
        <Route path="/newitems" element={<NewItems />} />
        <Route path="/store/:id" element={<Singleproduct />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Sitefooter />
    </>
  );
}

export default App;
