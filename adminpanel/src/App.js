import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MDashboard from './Components/Manager/MDashboard';
import MAccountRequest from './Components/Manager/MAccountRequest';
import EDashboard from './Components/Employee/EDashboard';
import SDashboard from './Components/SuperAdmin/SDashboard';
import EAllCustomers from './Components/Employee/EAllCustomers';
// import AccountRequest from './Components/Employee/AccountRequest';
import LoansRequest from './Components/Employee/LoansRequest';
import CustomerProfile from './Components/AllAdminServices/CustomerProfile';
import CustomerDeposit from './Components/AllAdminServices/CustomerDeposit';
import CustomerTransaction from './Components/AllAdminServices/CustomerTransaction';
import CustomerLoan from './Components/Employee/CustomerLoan';
import Navbar from './Components/Navbar/Navbar';
import SuperAdminLogin from './Components/AdminAuthentication/SuperAdmin/SuperAdminLogin';
import AccountRequest from './Components/AllAdminServices/AccountRequest';
import AllCustomers from './Components/AllAdminServices/AllCustomers';
import SpecificDeposit from './Components/AllAdminServices/SpecificDeposit';
import AllDeposits from './Components/AllAdminServices/AllDeposits';
import AllTransactions from './Components/AllAdminServices/AllTransactions';
import CustomerLoans from './Components/AllAdminServices/CustomerLoans';
import SpcificLoan from './Components/AllAdminServices/SpecificLoan';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>

          <Route path="/" element = {<SuperAdminLogin />} />


          <Route path="allaccountrequest" element = {<AccountRequest />} />
          <Route path="customerprofile/:id" element = {<CustomerProfile />} />
          <Route path="allcustomers" element = {<AllCustomers />} />
          
          <Route path="customerdeposit/:id" element={<CustomerDeposit/>}/>
          <Route path="specificdeposit/:id" element={<SpecificDeposit/>}/>
          <Route path="alldeposits" element={<AllDeposits/>}/>

          <Route path="customertransactions/:id" element={<CustomerTransaction/>}/>
          <Route path="alltransactions" element={<AllTransactions/>}/>

          <Route path="customerloans/:id" element={<CustomerLoans/>}/>
          <Route path="specificloan/:id" element={<SpcificLoan/>}/>

          <Route path="managerdashboard" element={<MDashboard/>}/>
          <Route path="macountrequest" element={<MAccountRequest/>}/>

          <Route path="superadmindashboard" element={<SDashboard/>}/>
          
          <Route path="employeedashboard" element={<EDashboard/>}/>
          <Route path="employeeallcustomers" element={<EAllCustomers/>}/>
          <Route path="accountrequest" element={<AccountRequest/>}/>
          <Route path="loanrequest" element={<LoansRequest/>}/>
          <Route path="customerprofile" element={<CustomerProfile/>}/>
          
          
          <Route path="customerloan" element={<CustomerLoan/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
