import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:2022/api/customer/";

const API_TRANSACTION_URL = "http://localhost:2022/api/customer/transactions/";

const API_DEPOSIT_URL = "http://localhost:2022/api/customer/deposit/";

const API_LOANS_URL = "http://localhost:2022/api/customer/loans/";

const API_PREDICT_URL = "https://nandu-insuranceprediction.herokuapp.com/apipredict/";

const API_BUSINESS = "http://localhost:2022/api/customer/businessapi/";

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
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
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
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
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
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
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
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
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
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const specificDeposit = async (depositId) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_DEPOSIT_URL + "specificdeposit/" + depositId, {
            headers: checkHeader
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const closeDeposit = async (depositId) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_DEPOSIT_URL + "closedeposit/" + depositId, {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const openEdicationalLoan = async (data) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.post(API_LOANS_URL + "openeducationalloan", data, { headers: checkHeader })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const uploadLoanDocument = async (loanid, file) => {
    let checkHeader = authHeader();
    // var FormData = require('form-data');
    const user = JSON.parse(localStorage.getItem('customerLogin'));
    const data = new FormData();
    data.append('file', file);
    

    if(checkHeader){
        return await axios.post(API_LOANS_URL + "uploadloansdocument/"+ loanid, { 
            headers: { 
            Authorization: 'Bearer ' + user.token, 
            'Content-Type': 'multipart/form-data'  
            },   
        },data)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};



const openNewHomeLoan = async (data) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.post(API_LOANS_URL + "opennewhomeloan", data, { headers: checkHeader })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const getAllLoans = async () => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_LOANS_URL + "getallloans", { headers: checkHeader })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const loanPayment = async (data) => {
    let checkHeader = authHeader()
    if (checkHeader) {

        return await axios.post(API_LOANS_URL + "loanpayment",data, { headers: checkHeader })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}

const allLoanPayments = async () => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_LOANS_URL + "allloanpayments", { headers: checkHeader })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const specificLoan = async (loanId) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_LOANS_URL + "specificloan/" + loanId, {
            headers: checkHeader
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }   
}


const closeLoan = async (loanId) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_LOANS_URL + "closeloan/" + loanId, {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const getCustomerProfile = async () => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_URL + "customerprofile", {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            console.log("customer profile");
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};



const predictInsurance = async (age,bmi,childrens,sex,smoke,region) => {
    let checkHeader = authHeader();
    if(checkHeader){
        return await axios.get(API_PREDICT_URL + age+"/"+bmi+"/"+childrens+"/"+sex+"/"+smoke+"/"+region, {
        })
        .then((response) => {
            console.log(response.data);
            console.log("customer profile");
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const requestApiKey = async () => {
    let checkHeader = authHeader();
    if ( checkHeader ) {
        return await axios.get(API_BUSINESS + "createapikey", {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
};


const getApiKey = async () => {
    let checkHeader = authHeader();
    if ( checkHeader ) {
        return await axios.get(API_BUSINESS + "getapikey", {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}

const getAllBusinessTractionsHistory = async () => {
    let checkHeader = authHeader();
    if ( checkHeader ) {
        return await axios.get(API_BUSINESS + "gettransactionhistory", {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const customerProfileUpdate = async (data) => {
    let checkHeader = authHeader();
    if ( checkHeader ) {
        return await axios.post(API_URL + "updateprofile",data, {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
        })
    }
    else{
        return '';
    }
}


const ratingSubmission = async (data) => {
    let checkHeader = authHeader();
    if ( checkHeader ) {
        return await axios.post(API_URL + "rating",data, {
            headers: checkHeader
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            localStorage.removeItem("customerLogin");
            window.location.href = '/logintype';
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
    getAllDeposits,
    specificDeposit,
    closeDeposit,
    openEdicationalLoan,
    uploadLoanDocument,
    openNewHomeLoan,
    getAllLoans,
    loanPayment,
    allLoanPayments,
    specificLoan,
    closeLoan,
    getCustomerProfile,
    predictInsurance,
    requestApiKey,
    getApiKey,
    getAllBusinessTractionsHistory,
    customerProfileUpdate,
    ratingSubmission
};


export default RLNDataService;