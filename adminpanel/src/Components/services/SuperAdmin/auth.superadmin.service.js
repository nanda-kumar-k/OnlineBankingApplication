import axios from "axios";

const API_URL = "http://localhost:2004/api/superadmin/";


const authenticateRLNSuperAdmin = async (username, password) =>  {
    return await axios.post(API_URL + "superadminlogin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("superadmin", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return "Invalid Credentials...!!! Please try again";
        })
};   


const SuperAdminAuthService = {
    authenticateRLNSuperAdmin,
};

export default SuperAdminAuthService;