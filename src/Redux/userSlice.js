import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      setActiveUser: (state,action)=>{
          state.userName=action.payload.userName
          state.userEmail=action.payload.userEmail
          state.userProfile=action.payload.userProfile

      },
      setUserLogOutState: (state,action)=>{
          state.userName=null
          state.userEmail=null
          state.userProfile=null
      }
  },
});

export const {setActiveUser,setUserLogOutState} = userSlice.actions;

export const selectUserName = state=>state.user.userName
export const selectUserEmail= state=>state.user.userEmail
export const selectUserProfile= state=>state.user.userProfile
export default userSlice.reducer;
