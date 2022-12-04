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
import Navbar from './Components/Navbar/Navbar';
import SpecificDeposit from './Components/Deposits/SpecificDeposit';
import LoanDocumentUpload from './Components/Loans/LoanDocumentUpload';
import LoanPayment from './Components/Loans/LoanPayment';
import LoanPaymentsHistory from './Components/Loans/LoanPaymentsHistory';
import SpecificLoan from './Components/Loans/SpecificLoan';
import LifeInsurance from './Components/Insurance/LifeInsurance';
import ApiKeyGeneration from './Components/BusinessApi/ApiKeyGeneration.js';
import BusinessTransactionHistory from './Components/BusinessApi/BusinessTranactionHistory';
import ApiDocumentation from './Components/BusinessApi/ApiDocumentation';
import SpringBootDocumentation from './Components/BusinessApi/SpringBootDocumentation';
import PythonDocumentation from './Components/BusinessApi/PythonDocumentation';
import CustomerLogin from './Components/JoinWithUs/CustomerLogin/CustomerLogin';
import CustomerProfileUpdate from './Components/Accounts/CustomerProfileUpdate';
import CustomerRating from './Components/Rating/CustomerRating';


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
          <Route path="logintype" element = {<LoginHome/>} />
          <Route path="customerprofileupdate" element = {<CustomerProfileUpdate/>} />

          <Route path="contractregister" element={<ContactRegister/>}/>
          <Route path="personaldetails" element={<PersonalRegister/>}/>
          <Route path="identification" element={<IdentificationRegister/>}/>
          <Route  path="professional" element={<ProfessionalRegister/>}/>
          <Route path="educational" element={<EducationalRegister/>}/>
          <Route path="family" element={<FamilyRegister/>}/>
          <Route path="setpassword" element={<PasswordRegister/>}/>


          
          <Route path="managerdashboard" element={<MDashboard/>}/>
          <Route path="macountrequest" element={<MAccountRequest/>}/>



          <Route path="newdeposit" element={<NewDeposit/>}/>
          <Route path="newhomeloan" element={<NewHomeLoan/>}/>
          <Route path="neweducationloan" element={<NewEducationalLoan/>}/>
          <Route path="alldeposits" element={<AllDeposits/>}/>
          <Route path="allloans" element={<AllLoans/>}/>
          <Route path="loandocuments" element={<LoanDocumentUpload/>}/>
          <Route path="loanpayment" element={<LoanPayment/>}/>
          <Route path="loanpaymentshistory" element={<LoanPaymentsHistory/>}/>
          <Route path="specificloan/:id" element={<SpecificLoan/>}/>
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



          <Route path="lifeinsurance" element={<LifeInsurance/>}/>
          <Route path="customerlogin" element={<CustomerLogin/>}/>


          <Route path="apikey" element={<ApiKeyGeneration/>}/>
          <Route path="businesstransactionhistory" element={<BusinessTransactionHistory/>}/>
          <Route path="apidocmentation" element={<ApiDocumentation/>}/>
          <Route path="springbootdocmentation" element={<SpringBootDocumentation/>}/>
          <Route path="pythondoc" element={<PythonDocumentation/>}/>

          <Route path="rating" element={<CustomerRating/>}/>

          <Route path="testing" element={<ConnectionTest/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;


/* it appears that the problem is with the routes. I am not able to navigate to the pages. I am getting the following error:

*/
