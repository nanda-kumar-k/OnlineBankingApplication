import axios from "axios";

const API_URL = "http://localhost:2001/api/customer/";

const createRLNCustomer = () => {
    let data = JSON.parse(localStorage.getItem("customerRegister"));
    return axios.post(API_URL + "createrlncustomer", data);
};

const customerLogin = (username, password) => {
    const response = async () => {
        try {
              const response = await axios.post(API_URL + "customerLogin", {
                username,
                password
              });
              if (response.data.accessToken) {
                localStorage.setItem("customerUser", JSON.stringify(response.data));
              }
              return response.data;
          }
        catch (error) {
            console.log(error);
          }
    }
    return response();
};

// const customerLogout = () => {
//     localStorage.removeItem("user");
// };



const CustomerAuthService = {
  createRLNCustomer,
  customerLogin,
  // register,
  // getCurrentUser
};

export default CustomerAuthService;