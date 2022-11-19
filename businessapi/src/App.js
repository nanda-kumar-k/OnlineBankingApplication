import CustomerAuth from "./Components/Authentication/CustomerAuth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import PaymentConformation from "./Components/Authentication/PaymentConformation";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerAuth/>} />
          <Route path="paymentconformation" element={<PaymentConformation/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
