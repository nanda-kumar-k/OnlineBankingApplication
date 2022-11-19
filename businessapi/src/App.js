import CustomerAuth from "./Components/Authentication/CustomerAuth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import PaymentConformation from "./Components/Authentication/PaymentConformation";
import Successfull from "./Components/PaymentStatus/Successfull";
import PaymentFailure from "./Components/PaymentStatus/PaymentFailure";
import DevelopmentError from "./Components/Errors/DevelopmentError";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerAuth/>} />
          <Route path="paymentconformation" element={<PaymentConformation/>} />
          <Route path="successfull" element={<Successfull/>} />
          <Route path="failure" element={<PaymentFailure/>} />
          <Route path="error" element={<DevelopmentError/>} /> 
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
