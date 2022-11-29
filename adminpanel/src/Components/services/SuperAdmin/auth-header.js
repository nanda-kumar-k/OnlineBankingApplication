
export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('superAdminLogin'));
  
    if (user && user.token) {

      return { 
        Authorization: 'Bearer ' + user.token,
      };

    } else {
      return {};
    }
    
  };