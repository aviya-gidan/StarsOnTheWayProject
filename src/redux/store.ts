import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth/auth.slice'
import userReducer from './user/user.slice'
import workshopReducer from './workshop/workshop.slice'
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        workshop: workshopReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector