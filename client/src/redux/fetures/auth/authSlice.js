import { createSlice } from "@reduxjs/toolkit"
import { userLogin, userRegister, getCurrentUser } from "./authAction"
let token = localStorage.getItem('blood-token')
let intialValue = {
    loading: false,
    user: null,
    token: token ? token : null,
    error: null
}
const authSlice = createSlice({
    name: "auth",
    initialState: intialValue,
    reducers: {},

    extraReducers:
        // Login Slice

        (builder) => {
            builder.addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = ''
            })
            builder.addCase(userLogin.fulfilled, (state, { payload }) => {
                console.log('hello dev.....', payload);
                state.loading = false
                state.user = payload.user
            })
            builder.addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload.error
            })


            // Register Slice

            builder.addCase(userRegister.pending, (state) => {
                state.loading = false
                state.error = ''
            })
            builder.addCase(userRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = ''
            })
            builder.addCase(userRegister.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload.error
            })

            // getCurrent-user
            builder.addCase(getCurrentUser.pending, (state) => {
                state.loading = true
                state.error = ''
            })
            builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload.user
            })
            builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload.error
            })

        }
})
export default authSlice