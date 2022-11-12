import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://localhost:2001/api/customer/";

function checkUsernameAvailability (username) {
    return axios.get(API_URL + "checkuser", {
        params: {
            username: username,
        }});
};


const checkCustomerBalance = async() => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_URL + "checkbalance", { headers: checkHeader })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return '';
        })

    }
    else{
        return '';
    }
};


const testconnection = () => {
    return http.get(`http://localhost:2001/api/customer/test1`);
}

const RLNDataService = {
    testconnection,
    checkUsernameAvailability,
    checkCustomerBalance
};


export default RLNDataService;