import React, { useState } from "react";
import "./Categories.css";
import { categories } from "../../utils/data";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { capitaliseData } from "../../utils/exerciseUtils";
import { getNameSearchExercise } from "../../features/exerciseSlice/exerciseSlice";
const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const handleSearchChange = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      dispatch(getNameSearchExercise(e.target.value));
    } else {
      navigate("/");
    }
  };
  return (
    <div className="categories-container">
      <div
        className={
          filter
            ? "categories-inner-container filter-active cat-inner-active"
            : "categories-inner-container"
        }
      >
        {categories.map((cat, index) => {
          return (
            <NavLink
              to={cat}
              key={index}
              onClick={() => setFilter((prev) => !prev)}
            >
              {capitaliseData(cat)}
            </NavLink>
          );
        })}
        <div className={filter ? "cat-filter filter-show" : "cat-filter"}>
          <input
            type="text"
            name="search"
            placeholder="Search Exercises"
            onChange={(e) => handleSearchChange(e)}
          />
          <p onClick={() => setFilter((prev) => !prev)}>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
