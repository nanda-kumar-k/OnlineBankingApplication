
export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('manager'));
  
    if (user && user.token) {

      return { 
        Authorization: 'Bearer ' + user.token,
      };

    } else {
      return {};
    }
    
  };