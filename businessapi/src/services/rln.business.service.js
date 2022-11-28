import axios from "axios";

const API_URL = "http://localhost:2006/api/business/";


const customerPaymentRequestAuthentication = async (data) =>  {

    let urlElements = window.location.href.split('/');
    let requestid = urlElements[urlElements.length - 2];
    let authdomain = urlElements[urlElements.length -1];
    let authurl = API_URL + requestid + "/" + authdomain;

    console.log(authurl);

    return await axios.post(authurl , data)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return '';
        })
};


const customerPaymentDetailsAuthentication = async () =>  {
    let urlElements = window.location.href.split('/');
    let requestid = urlElements[urlElements.length - 3];
    let authdomain = urlElements[urlElements.length - 1];
    let paymentid = urlElements[urlElements.length - 2];
    let authurl = API_URL + "paydetails/" + requestid + "/" + paymentid + "/" + authdomain;

    console.log(authurl);

    return await axios.get(authurl)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(error);
        return '';
    })
};



const amountPaymentAuthentication = async (username, amount) =>  {
    let urlElements = window.location.href.split('/');
    let requestid = urlElements[urlElements.length - 3];
    let authdomain = urlElements[urlElements.length - 1];
    let paymentid = urlElements[urlElements.length - 2];
    let authurl = API_URL + "pay/" + requestid + "/" + paymentid +  "/" + username + "/" + amount + "/" + authdomain;

    console.log(authurl);

    return await axios.get(authurl)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(error);
        return '';
    })
};


const cancelPaymentAuthentication = async (username, amount) =>  {
    let urlElements = window.location.href.split('/');
    let requestid = urlElements[urlElements.length - 3];
    let authdomain = urlElements[urlElements.length - 1];
    let paymentid = urlElements[urlElements.length - 2];
    let authurl = API_URL + "cancel/" + requestid + "/" + paymentid +  "/" + username + "/" + amount + "/" + authdomain;

    console.log(authurl);

    return await axios.get(authurl)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(error);
        return '';
    })
};



const RLNBussinessService = {
    customerPaymentRequestAuthentication,
    customerPaymentDetailsAuthentication,
    amountPaymentAuthentication,
    cancelPaymentAuthentication
};

export default RLNBussinessService;
