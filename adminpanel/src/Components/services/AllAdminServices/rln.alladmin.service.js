import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:2022/api/";


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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })
            
        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })
                
        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })
                
        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getSpecificLoanPayments = async (loanId) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/loans/specificloanpayments/" + loanId, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getAllHomeLoans = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/loans/allhomeloans", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getAllEducationalLoans = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/loans/alleducationalloans", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getAllLoanPayments = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/loans/allloanpayments", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const LoansRequest = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            
            return await axios.get(API_URL + adminType + "/loans/loansrequest", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }   
    else {
        window.location.href = '/'
    }
};


const loanVerification = async (loanId) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {
            return await axios.get(API_URL + adminType + "/loans/loanverification/" + loanId, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getAllBusinessApiCustomers = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/businessapi/getallbusinessapicustomers", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};

const getAllBusinessApiTransactions = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/businessapi/getallbusinessapitransactions", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getCustomerBusinessApiTransactions = async (username) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/businessapi/getbusinessapicustomertransactions/" + username, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const addEmployee = async (employee) =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.post(API_URL + adminType + "/addemployee", employee, { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
    }
};


const getAllEmployees = async () =>  {

    const adminType = adminTypeCheck();
    if (adminType !== null) {

        let checkHeader = authHeader(adminType);
        if (checkHeader) {

            return await axios.get(API_URL + adminType + "/getallemployee", { headers: checkHeader })
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .catch((error) => {
                    localStorage.removeItem("adminType");
                    localStorage.removeItem(adminType);
                    window.location.href = '/'+adminType+'login';
                })

        }
        else {
            localStorage.removeItem("adminType");
            window.location.href = '/' + adminType + 'login';
        }
    }
    else {
        window.location.href = '/'
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
    getSpecificLoan,
    getSpecificLoanPayments,
    getAllHomeLoans,
    getAllEducationalLoans,
    getAllLoanPayments,
    LoansRequest,
    loanVerification,
    getAllBusinessApiCustomers,
    getAllBusinessApiTransactions,
    getCustomerBusinessApiTransactions,
    addEmployee,
    getAllEmployees
};

export default RLNAllAdminDataService;