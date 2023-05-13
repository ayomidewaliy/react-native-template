import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  user: null;
}

const initialState = {user: null} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => ({
      ...state,
      user: {...action.payload},
    }),
    logout: () => ({...initialState}),
  },
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
