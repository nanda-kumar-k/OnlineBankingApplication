import axios from "axios";

const API_URL = "http://localhost:2022/api/customer/";

const createRLNCustomer = () => {
    let data = JSON.parse(localStorage.getItem("customerRegister"));
    return axios.post(API_URL + "createrlncustomer", data);
};

const authenticateRLNCustomer = async (username, password) =>  {
    return await axios.post(API_URL + "authenticaterlncustomer", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("customerLogin", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            console.log(error);
            return "Invalid Credentials...!!! Please try again";
        })
      };    


//     let data = {
//         username: username,
//         password: password
//     }
//     axios.post(API_URL + "authenticaterlncustomer", data).then((response) => {
//         if(response.data.token){
//             localStorage.setItem("customerLogin", JSON.stringify(response.data));
//         }
//         return response.data;
//       }
//     )
//     .catch((error) => {
//         console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
//         console.log(error);
//         return error;
//     });
//     ;
    
// };

// const customerLogout = () => {
//     localStorage.removeItem("user");
// };



const CustomerAuthService = {
  createRLNCustomer,
  authenticateRLNCustomer,
  // register,
  // getCurrentUser
};

export default CustomerAuthService;