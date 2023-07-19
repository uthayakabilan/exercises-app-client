import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNameSearchExercise } from "../../features/exerciseSlice/exerciseSlice";
const NavBar = () => {
  const [hamActive, setHamActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      dispatch(getNameSearchExercise(e.target.value));
    } else {
      navigate("/");
    }
  };
  return (
    <div className="navbar-container">
      <div className="inner-conatianer">
        <div className="logo">
          <NavLink to={"/"}>Exercises</NavLink>
        </div>
        <div className={hamActive ? "ham-active left-side" : "left-side"}>
          <div className="nav-actions">
            <NavLink to={"/"} onClick={() => setHamActive((prev) => !prev)}>
              Home
            </NavLink>
            <NavLink to={"/"} onClick={() => setHamActive((prev) => !prev)}>
              About
            </NavLink>
            <NavLink
              to={"/saved"}
              onClick={() => setHamActive((prev) => !prev)}
            >
              My Workouts
            </NavLink>
          </div>
        </div>
        <div className={hamActive ? "right-side ham-active" : "right-side"}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Exercises"
              onChange={(e) => handleSearchChange(e)}
            />
          </div>
          <div className="account">
            <button>Account</button>
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={() => setHamActive((prev) => !prev)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default NavBar;
