import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailList: [],
  passList: [],
  authList: [],
};

export const registerSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    emailData: (state, action) => {
      state.emailList = [...state.emailList, action.payload.emails];
      console.log("@SN ", state.emailList, action.payload.emails);
    },
    passData: (state, action) => {
      state.passList = [...state.passList, action.payload.passwords];
      console.log("@SN ", state.passList, action.payload);
    },
    authData: (state, action) => {
      state.authList = [...state.authList, action.payload.auths];
      console.log("@SN ", state.authList, action.payload);
    },
  },
});

export const { emailData, passData, authData } = registerSlice.actions;
export default registerSlice.reducer;
