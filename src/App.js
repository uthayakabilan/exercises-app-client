import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
// import NavBar from "./components/navBar/NavBar";
import Carousel from "./components/carousel/Carousel";
import { useSelector } from "react-redux";
import Auth from "./components/auth/Auth";
// import Categories from "./components/categories/Categories";
const App = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Carousel />}></Route>
          <Route path="/:category" element={<Carousel />}></Route>
          {/* <Route path="/saved" element={user ? <Carousel /> : <Auth />}></Route> */}
          <Route
            path="/auth"
            element={user ? <Navigate to={"/saved"} /> : <Auth />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
