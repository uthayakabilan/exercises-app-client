import React from "react";
import NavBar from "../navBar/NavBar";
import Categories from "../categories/Categories";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
