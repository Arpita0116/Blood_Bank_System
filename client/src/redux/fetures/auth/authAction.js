import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../../services/API"
import { toast } from "react-toastify"

// this is for the login
export let userLogin = createAsyncThunk(
    "auth/login", async ({ email, password, role }, { rejectwithValue }) => {
        try {
            let { data } = await API.post('/auth/v1/login', { email, password, role })
            if (data.success) {
                if (data.token) {
                    localStorage.setItem('blood-token', data.token)
                    window.location.replace('/')
                    toast.success(data.message)
                }
                return data
            }
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message)
                return rejectwithValue(error.response.data.message)
            }
            else {
                toast.error(error.message)
                return rejectwithValue(error.response)
            }
        }
    }
)

// this is for the registration
export let userRegister = createAsyncThunk('auth/register',
    async ({ email, password, name, role, phone, address, hopitalName, organizationName }, { rejectwithValue }) => {
        try {
            let { data } = await API.post('/auth/v1/register', { email, password, name, role, phone, address, hopitalName, organizationName })
            if (data.success) {
                toast.success(data.message)
                window.location.replace('/login')
            }
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message)
                return rejectwithValue(error.response.data.message)
            }
            else {
                toast.error(error.message)
                return rejectwithValue(error.response)
            }
        }
    }
)

// this is for the get-current-user
export let getCurrentUser = createAsyncThunk('auth/getCurrentUser',
    async ({ rejectwithValue }) => {
        try {
            let res = await API.get('/auth/v1/current-user')
            if (res.data) {
                return res?.data
            }
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectwithValue(error.response.data.message)
            }
            else {
                return rejectwithValue(error.response)
            }
        }
    }
)