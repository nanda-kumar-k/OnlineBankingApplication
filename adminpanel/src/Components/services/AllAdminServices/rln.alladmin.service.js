import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:2004/api/";


const adminTypeCheck = ()=> {
    const adminType = localStorage.getItem('adminType');
    if (adminType === 'superadmin') {
        return 'superadmin';
    }
    else if (adminType === 'manager') {
        return 'manager';
    }
    else if (adminType === 'employee') {
        return 'employee';
    }
    else {
        return null;
    }
}

const allAccountRequest = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/accountrequest", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })
            
        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const customerProfile = async (username) =>  {
    
    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/customerprofile/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const customerVerification = async (username) =>  { 

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/customerverification/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const getAllCustomers = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/getallcustomers", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};



const getAllCustomersDeposits = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/deposit/getallcustomersdeposits", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })
                
        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};



const getCustomerDeposits = async (username) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/deposit/customerdeposits/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const specificDeposit = async (depositId) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/deposit/specificdeposit/" + depositId, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const getCustomerTransactions = async (username) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/transactions/customertransactions/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const getAllTransactions = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/transactions/alltransactions", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })
                
        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const getCustomerLoans = async (username) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/loans/customerloans/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const getSpecificLoan = async (loanId) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/loans/specificloan/" + loanId, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                    console.log(error);
                    return ''
                })

        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
};


const RLNAllAdminDataService = {
    allAccountRequest,
    customerProfile,
    customerVerification,
    getAllCustomers,
    getAllCustomersDeposits,
    getCustomerDeposits,
    specificDeposit,
    getCustomerTransactions,
    getAllTransactions,
    getCustomerLoans,
    getSpecificLoan
};

export default RLNAllAdminDataService;