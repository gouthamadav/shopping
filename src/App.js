import "./App.css";
import Home from "./ShoppingFile/Home";
import Auth from "./ShoppingFile/Auth";
import "./CSS/Header.css";
import { useEffect, useState } from "react";
import { auth } from "./ShoppingFile/firbase";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeProducts from "./ShoppingFile/HomeProducts";
import ProductDetails from "./ShoppingFile/ProductDetails";

function App() {
  const [presentuser, setPresentuser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentuser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setPresentuser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {presentuser ? <Home presentuser={presentuser} /> : <Auth />}
      <Routes>
        <Route path="/homeproducts/:id" element={<HomeProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
