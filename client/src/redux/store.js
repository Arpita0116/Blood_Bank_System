import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./fetures/auth/authSlice"

let store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
})
export default store