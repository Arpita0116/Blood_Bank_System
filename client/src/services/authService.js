import e from "cors";
export let handleLoginController = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!email || !password || !role)
            return alert("All fields are required *")
        console.log(email, password, role);
    }
    catch (error) {
        console.log(error);
    }
}


export let handleRegistrationController = (e, email, password, name, role, address, hospitalName, organization) => {
    e.preventDefault();
    try {
        console.log(email, password, role);
    }
    catch (error) {
        console.log();
    }
}