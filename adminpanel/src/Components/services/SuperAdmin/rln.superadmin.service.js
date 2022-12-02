import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:2022/api/superadmin/";


const allAccountRequest = async () =>  {
    let checkHeader = authHeader();
    if (checkHeader) {
        return await axios.get(API_URL + "allaccountrequest", { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                console.log(error);
                localStorage.removeItem("adminType");
                localStorage.removeItem("superadmin");
                window.location.href = '/superadminlogin';
            })
        
    }
    else {
        localStorage.removeItem("adminType");
        localStorage.removeItem("superadmin");
        window.location.href = '/superadminlogin';
    }
};


const addManager = async (data) => {
    let checkHeader = authHeader();
    if (checkHeader) {
        return await axios.post(API_URL + "addmanager", data, { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                console.log(error);
                localStorage.removeItem("adminType");
                localStorage.removeItem("superadmin");
                window.location.href = '/superadminlogin';
            })
    }
    else {
        localStorage.removeItem("adminType");
        localStorage.removeItem("superadmin");
        window.location.href = '/superadminlogin';
    }
};


const getAllManagers = async () => {
    let checkHeader = authHeader();
    if (checkHeader) {
        return await axios.get(API_URL + "getallmanagers", { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                console.log(error);
                localStorage.removeItem("adminType");
                localStorage.removeItem("superadmin");
                window.location.href = '/superadminlogin';
            })
    }
    else {
        localStorage.removeItem("adminType");
        localStorage.removeItem("superadmin");
        window.location.href = '/superadminlogin';
    }
};


const updateRLNAllDetails = async (data) => {
    let checkHeader = authHeader();
    if (checkHeader) {
        return await axios.post(API_URL + "updaterlndetails", data, { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                localStorage.removeItem("adminType");
                localStorage.removeItem("superadmin");
                window.location.href = '/superadminlogin';
            })
    }
    else {
        localStorage.removeItem("adminType");
        localStorage.removeItem("superadmin");
        window.location.href = '/superadminlogin';
    }
};

const getRLNDetails = async () => {
    let checkHeader = authHeader();
    if (checkHeader) {

        return await axios.get(API_URL + "getrlndetails", { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                localStorage.removeItem("adminType");
                localStorage.removeItem("superadmin");
                window.location.href = '/superadminlogin';
            })
    }
    else {
        localStorage.removeItem("adminType");
        localStorage.removeItem("superadmin");
        window.location.href = '/superadminlogin';
    }
};

const RLNDataService = {
    allAccountRequest,
    addManager,
    getAllManagers,
    updateRLNAllDetails,
    getRLNDetails
};

export default RLNDataService;