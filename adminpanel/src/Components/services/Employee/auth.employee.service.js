import axios from "axios";

const API_URL = "http://localhost:2022/api/employee/";


const authenticateRLNEmployee = async (username, password) =>  {
    return await axios.post(API_URL + "employeelogin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("employee", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return "Invalid Credentials...!!! Please try again";
        })
};   


const EmployeeAuthService = {
    authenticateRLNEmployee,
};

export default EmployeeAuthService;