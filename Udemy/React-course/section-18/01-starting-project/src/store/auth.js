import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAutthState = {
  isAuthanticated: false
}

const authSlice = createSlice({
  name: 'authantication',
  initialState: initialAutthState,
  reducers:{
    login(state){
      state.isAuthanticated = true
    },
    logout(state){
      state.isAuthanticated = false
    }
  }
})

export const authActions = authSlice.actions

export default authSlice.reducer