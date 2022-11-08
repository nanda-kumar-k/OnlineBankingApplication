import http from "../http-common";

const testconnection = () => {
    return http.get(`http://localhost:2001/api/customer/test1`);
}

const RLNDataService = {
    testconnection
};


export default RLNDataService;