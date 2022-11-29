
export default function authHeader(adminType) {
    
    const user = JSON.parse(localStorage.getItem(adminType));
  
    if (user && user.token) {

      return { 
        Authorization: 'Bearer ' + user.token,
      };

    } else {
      return {};
    }
    
  };