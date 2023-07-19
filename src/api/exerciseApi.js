import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getCategoryExercise = (category) =>
  API.get(`/bodypart/${category}`);

export const getNameExercise = (name) => API.post("/search/name", { name });
export const getSavedExercises = (email) =>
  API.post("/save/getsaved", { email });
