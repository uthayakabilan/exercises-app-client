import React, { useEffect } from "react";
import "./Carousel.css";
// import { resData } from "../../utils/data";
import Card from "../card/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryExercise,
  getSavedExercises,
} from "../../features/exerciseSlice/exerciseSlice";
const Carousel = () => {
  const user = useSelector((state) => state.user.user);
  const params = useParams();
  const dispatch = useDispatch();
  const resData = useSelector((state) => state.exercise.data);
  const navigate = useNavigate();
  useEffect(() => {
    const category = params.category;
    console.log(category);
    if (!category) {
      dispatch(getCategoryExercise("upper%20arms"));
    } else if (category === "saved") {
      if (user && user.email) {
        dispatch(getSavedExercises(user.email));
      } else {
        navigate("/auth");
      }
    } else {
      dispatch(getCategoryExercise(category));
    }
  }, [params, dispatch, user, navigate]);
  return (
    <div className="carousel-outer-container">
      <div className="carousel-container">
        {resData.length !== 0 ? (
          resData.map((data) => {
            return <Card data={data} key={data.id} />;
          })
        ) : (
          <div>No Exercises found</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
