import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Child } from "../../conect/type";

type AuthStateType = {
    user: Child | null,
    isAuthenticated: boolean, // אם מחובר או לא מחובר
    isInitialized: boolean //   אם היה אתחול - אם כבר בדק אם מחובר או לא
}

const initialState: AuthStateType = {
    user: null,
    isAuthenticated: false, //מאובטח
    isInitialized: false //מחובר
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthStateType, action: PayloadAction<Child>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        setInitialized: (state: AuthStateType) => {
            state.isInitialized = true
        }
    }
})

export const { setUser, setInitialized } = authSlice.actions
export default authSlice.reducer