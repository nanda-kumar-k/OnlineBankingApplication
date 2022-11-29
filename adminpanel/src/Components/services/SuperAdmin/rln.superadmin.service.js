import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:2004/api/superadmin/";


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
                return ''
            })
        
    }
    else {
        return ''
    }
};


const RLNDataService = {
    allAccountRequest,
};

export default RLNDataService;