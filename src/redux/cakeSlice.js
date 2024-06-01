// redux/cakeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    buyCake: (state) => {
      if (state.numOfCakes > 0) {
        state.numOfCakes -= 1;
      }
    },
    restockCake: (state) => {
        state.numOfCakes += 1;
      }
  }
});

export const { buyCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
