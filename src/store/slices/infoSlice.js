import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    data: [],
  },
  reducers: {
    changeUsername(state, action) {
      state.username = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeFirstName(state, action) {
      state.firstName = action.payload;
    },
    changeLastName(state, action) {
      state.lastName = action.payload;
    },
    clearState(state, action){
      state.username = "";
      state.password = "";
      state.firstName = "";
      state.lastName = "";
    }
  },
});

export const { changeUsername, changePassword, changeFirstName,changeLastName, clearState } = infoSlice.actions;
export const infoReducer = infoSlice.reducer;
