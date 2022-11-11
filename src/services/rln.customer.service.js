import http from "../http-common";
import axios from "axios";

const API_URL = "http://localhost:2001/api/customer/";

function checkUsernameAvailability (username) {
    return axios.get(API_URL + "checkuser", {
        params: {
            username: username,
        }});
};

const testconnection = () => {
    return http.get(`http://localhost:2001/api/customer/test1`);
}

const RLNDataService = {
    testconnection,
    checkUsernameAvailability
};


export default RLNDataService;