import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import CustomerHome from './Components/CustomerHome/CustomerHome';
import TransactionHistroy from './Components/Accounts/TransactionHistory';
import Balance from './Components/Accounts/Balance';
import Transfer from './Components/Accounts/Transfer';
import Profile from './Components/Accounts/Profile.';
import LoginHome from './Components/JoinWithUs/LoginHome';
import ContactRegister from './Components/JoinWithUs/ContactRegister';
import PersonalRegister from './Components/JoinWithUs/PersonalRegister';
import IdentificationRegister from './Components/JoinWithUs/IdentificationRegister';
import ProfessionalRegister from './Components/JoinWithUs/ProfessionalRegister';
import EducationalRegister from './Components/JoinWithUs/EducationalRegister';
import FamilyRegister from './Components/JoinWithUs/FamilyRegister';
import PasswordRegister from './Components/JoinWithUs/PasswordRegister';
import MDashboard from './Components/Manager/MDashboard';
import MAllCustomers from './Components/Manager/MAllCustomers';
import MAccountRequest from './Components/Manager/MAccountRequest';
import NewDeposit from './Components/Deposits/NewDeposit';
import NewHomeLoan from './Components/Loans/NewHomeLoan';
import NewEducationalLoan from './Components/Loans/NewEducationalLoan';
import AllDeposits from './Components/Deposits/AllDeposits';
import AllLoans from './Components/Loans/AllLoans';
import EDashboard from './Components/Employee/EDashboard';
import SDashboard from './Components/SuperAdmin/SDashboard';
import EAllCustomers from './Components/Employee/EAllCustomers';
import AccountRequest from './Components/Employee/AccountRequest';
import LoansRequest from './Components/Employee/LoansRequest';
import CustomerProfile from './Components/Employee/CustomerProfile';
import CustomerDeposit from './Components/Employee/CustomerDeposit';
import CustomerTransaction from './Components/Employee/CustomerTransaction';
import CustomerLoan from './Components/Employee/CustomerLoan';
import ConnectionTest from './Components/APITesting/ConnectionTest';
import BusinessCustomer from './Components/JoinWithUs/CustomerLogin/BusinessCustomer';
import SavingsCustomer from './Components/JoinWithUs/CustomerLogin/SavingsCustomer';
import Navbar from './Components/Navbar/Navbar';
import SpecificDeposit from './Components/Deposits/SpecificDeposit';
import LoanDocumentUpload from './Components/Loans/LoanDocumentUpload';
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
          <Route path="home" element = {<LoginHome/>} />

          <Route path="contractregister" element={<ContactRegister/>}/>
          <Route path="personaldetails" element={<PersonalRegister/>}/>
          <Route path="identification" element={<IdentificationRegister/>}/>
          <Route  path="professional" element={<ProfessionalRegister/>}/>
          <Route path="educational" element={<EducationalRegister/>}/>
          <Route path="family" element={<FamilyRegister/>}/>
          <Route path="setpassword" element={<PasswordRegister/>}/>
          <Route path="managerdashboard" element={<MDashboard/>}/>
          <Route path="mallcustomers" element={<MAllCustomers/>}/>
          <Route path="macountrequest" element={<MAccountRequest/>}/>
          <Route path="newdeposit" element={<NewDeposit/>}/>
          <Route path="newhomeloan" element={<NewHomeLoan/>}/>
          <Route path="neweducationloan" element={<NewEducationalLoan/>}/>
          <Route path="alldeposits" element={<AllDeposits/>}/>
          <Route path="allloans" element={<AllLoans/>}/>
          <Route path="loandocuments" element={<LoanDocumentUpload/>}/>
          <Route path="specificdeposit/:id" element={<SpecificDeposit/>}/>
          <Route path="superadmindashboard" element={<SDashboard/>}/>
          <Route path="employeedashboard" element={<EDashboard/>}/>
          <Route path="employeeallcustomers" element={<EAllCustomers/>}/>
          <Route path="accountrequest" element={<AccountRequest/>}/>
          <Route path="loanrequest" element={<LoansRequest/>}/>
          <Route path="customerprofile" element={<CustomerProfile/>}/>
          <Route path="customerdeposit" element={<CustomerDeposit/>}/>
          <Route path="customertransaction" element={<CustomerTransaction/>}/>
          <Route path="customerloan" element={<CustomerLoan/>}/>
          
          <Route path="bussinesslogin" element={<BusinessCustomer/>}/>
          <Route path="savingslogin" element={<SavingsCustomer/>}/>

          <Route path="testing" element={<ConnectionTest/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;


/* it appears that the problem is with the routes. I am not able to navigate to the pages. I am getting the following error:

*/
