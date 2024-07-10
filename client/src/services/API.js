import axios from 'axios'
let API = axios.create({
    baseURL: "http://localhost:8000"
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('blood-token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('blood-token')}`
    }
    return req
}
)

export default API