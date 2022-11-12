
export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('customerLogin'));
  
    if (user && user.token) {

      return { 
        Authorization: 'Bearer ' + user.token,
      };

    } else {
      return {};
    }
    
  };