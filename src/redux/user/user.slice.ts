import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Child } from '../../conect/type';

const userSlice = createSlice({
  name: 'user',
  initialState: {users: [] as Child[] },
  reducers: {
    // setUserSlice: (state, action: PayloadAction<Child[]>) => {
    //   state.users = action.payload;
    // },
    addUserSlice: (state, action: PayloadAction<Child>) => {
      state.users.push(action.payload);
    },
    updateUserSlice: (state, action: PayloadAction<Child>) => {
      const index = state.users.findIndex(user => action.payload.id);
      state.users[index] = action.payload;
    },
    // deleteUserSlice: (state, action: PayloadAction<number>) => {
    //   state.users.splice(action.payload,1);
    // }
  }
})

export const { addUserSlice, updateUserSlice,} = userSlice.actions;
export default userSlice.reducer