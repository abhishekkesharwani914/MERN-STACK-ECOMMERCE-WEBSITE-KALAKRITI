import Home from "./pages/Home/Home.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import { Routes, Route } from "react-router";
import Error from "./pages/Error.jsx";
import Product from "./pages/Procucts/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import { ToastContainer } from 'react-toastify';
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Orders from "./pages/Orders.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App;
