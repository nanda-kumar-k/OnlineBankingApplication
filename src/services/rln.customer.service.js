import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://localhost:2001/api/customer/";

const API_TRANSACTION_URL = "http://localhost:2001/api/customer/transactions/";

const API_DEPOSIT_URL = "http://localhost:2001/api/customer/deposit/";

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


const customerAmountTransfer = async (data) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.post(API_TRANSACTION_URL + "transferamount", data, { headers: checkHeader })
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
}


const customerTransactionsDetails = async () => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_TRANSACTION_URL + "details", { headers: checkHeader })
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
}

const openNewDeposit = async (data) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.post(API_DEPOSIT_URL + "opennewdeposit", data, { headers: checkHeader })
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
}


const getAllDeposits = async () => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_DEPOSIT_URL + "getalldeposits", { headers: checkHeader })
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
}



const testconnection = () => {
    return http.get(`http://localhost:2001/api/customer/test1`);
}

const RLNDataService = {
    testconnection,
    checkUsernameAvailability,
    checkCustomerBalance,
    customerAmountTransfer,
    customerTransactionsDetails,
    openNewDeposit,
    getAllDeposits
};


export default RLNDataService;