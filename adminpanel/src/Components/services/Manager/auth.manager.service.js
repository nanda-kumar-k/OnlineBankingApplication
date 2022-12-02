import axios from "axios";

const API_URL = "http://localhost:2022/api/manager/";


const authenticateRLNManager = async (username, password) =>  {
    return await axios.post(API_URL + "managerlogin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("manager", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return "Invalid Credentials...!!! Please try again";
        })
};   


const ManagerAuthService = {
    authenticateRLNManager,
};

export default ManagerAuthService;