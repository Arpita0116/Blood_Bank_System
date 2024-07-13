import { toast } from "react-toastify";
import store from '../redux/store'
import { userLogin, userRegister } from "../redux/fetures/auth/authAction";

// This is for the handling login controller
export let handleLoginController = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!email || !password || !role)
            return toast.error('All fields are required')
        store.dispatch(userLogin({ email, password, role }))
    }
    catch (error) {
        console.log(error);
    }
}

// This is for the handling Register controller
export let handleRegistrationController = (e, email, password, name, role, address, hospitalName, organizationName) => {
    e.preventDefault();
    try {
        store.dispatch(userRegister({ email, password, name, role, address, hospitalName, organizationName }))
    }
    catch (error) {
        console.log(error);
    }
}