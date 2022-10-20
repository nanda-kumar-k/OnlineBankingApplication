import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CustomerHome from './Components/CustomerHome/CustomerHome';
import TransactionHistroy from './Components/Accounts/TransactionHistory';
import Balance from './Components/Accounts/Balance';
import Transfer from './Components/Accounts/Transfer';
import Profile from './Components/Accounts/Profile.';
import LoginHome from './Components/JoinWithUs/LoginHome';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="customerhome" element={<CustomerHome />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="transaction" element={<TransactionHistroy/>} />
          <Route path="balance" element={<Balance/>} />
          <Route path="transfer" element={<Transfer/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="/home" element = {<LoginHome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
