import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/exerciseApi";
const initialState = {
  error: {
    state: false,
    message: "",
  },
  data: [],
  loading: false,
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    exerciseStart: (state) => {
      state.loading = true;
      state.error = {
        state: false,
        message: "",
      };
      state.data = [];
    },
    exerciseSuccess: (state, action) => {
      state.loading = false;
      state.error = {
        state: false,
        message: "",
      };
      state.data = action.payload;
    },
    exerciseError: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const getCategoryExercise = (category) => async (dispatch) => {
  dispatch(exerciseStart());
  try {
    const { data } = await API.getCategoryExercise(category);
    dispatch(exerciseSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(exerciseError({ state: true, message: error }));
  }
};

export const getNameSearchExercise = (name) => async (dispatch) => {
  dispatch(exerciseStart());
  try {
    // const jsonData = JSON.stringify({ name });
    // console.log(jsonData);
    const { data } = await API.getNameExercise(name);
    dispatch(exerciseSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(exerciseError({ state: true, message: error }));
  }
};

export const getSavedExercises = (email) => async (dispatch) => {
  dispatch(exerciseStart());
  try {
    const { data } = await API.getSavedExercises(email);
    if (data.message === "no saved exercises") {
      dispatch(exerciseSuccess([]));
    } else {
      dispatch(exerciseSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(exerciseError({ state: true, message: error }));
  }
};

// export const getSavedNews = (userId) => async (dispatch) => {
//   dispatch(exerciseStart());
//   try {
//     console.log({ userId });
//     const { data } = await API.getSavedNews(userId);
//     if (data.message === "No saved news") {
//       dispatch(exerciseSuccess([]));
//     } else {
//       dispatch(exerciseSuccess(data));
//     }
//   } catch (error) {
//     console.log(error);
//     dispatch(exerciseError({ state: true, message: error }));
//   }
// };

export const { exerciseError, exerciseStart, exerciseSuccess } =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
