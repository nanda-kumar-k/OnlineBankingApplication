import CustomerAuth from "./Components/Authentication/CustomerAuth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerAuth/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
