import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
