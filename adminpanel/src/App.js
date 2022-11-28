import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MDashboard from './Components/Manager/MDashboard';
import MAllCustomers from './Components/Manager/MAllCustomers';
import MAccountRequest from './Components/Manager/MAccountRequest';
import EDashboard from './Components/Employee/EDashboard';
import SDashboard from './Components/SuperAdmin/SDashboard';
import EAllCustomers from './Components/Employee/EAllCustomers';
import AccountRequest from './Components/Employee/AccountRequest';
import LoansRequest from './Components/Employee/LoansRequest';
import CustomerProfile from './Components/Employee/CustomerProfile';
import CustomerDeposit from './Components/Employee/CustomerDeposit';
import CustomerTransaction from './Components/Employee/CustomerTransaction';
import CustomerLoan from './Components/Employee/CustomerLoan';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="managerdashboard" element={<MDashboard/>}/>
          <Route path="mallcustomers" element={<MAllCustomers/>}/>
          <Route path="macountrequest" element={<MAccountRequest/>}/>
          <Route path="superadmindashboard" element={<SDashboard/>}/>
          <Route path="employeedashboard" element={<EDashboard/>}/>
          <Route path="employeeallcustomers" element={<EAllCustomers/>}/>
          <Route path="accountrequest" element={<AccountRequest/>}/>
          <Route path="loanrequest" element={<LoansRequest/>}/>
          <Route path="customerprofile" element={<CustomerProfile/>}/>
          <Route path="customerdeposit" element={<CustomerDeposit/>}/>
          <Route path="customertransaction" element={<CustomerTransaction/>}/>
          <Route path="customerloan" element={<CustomerLoan/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
