import { NavLink } from 'react-router-dom';

function AllLinks() {
    return (
        <>
        <h3>Account</h3>
            <NavLink to="/profile"><p>Profile</p></NavLink>
            <NavLink to="/transaction"><p>Transactions</p></NavLink>
            <NavLink to="/balance"><p>Balance</p></NavLink>
            <NavLink to="/transfer"><p>Transfer</p></NavLink>
            <hr/>
            <h3>Deposits</h3>
            <NavLink to="/newdeposit"><p>Open New Deposit</p></NavLink>
            <NavLink to="/alldeposits"><p>All Deposits</p></NavLink>
            <hr/>
            <h3>Loans</h3>
            <NavLink to="/newhomeloan"><p>Open New Home Loan</p></NavLink>
            <NavLink to="/neweducationloan"><p>Open New Educational Loan</p></NavLink>
            <NavLink to="/allloans"><p>All Loans</p></NavLink>
            <NavLink to="/loanpayment"><p>Loan Payment</p></NavLink>
            <NavLink to="/loanpaymentshistory"><p>Loan Payments History</p></NavLink>
            <hr/>
            <h3>Insurances</h3>
            <NavLink to="/lifeinsurance"><p>Life Insurance</p></NavLink>
            <hr/>
            <h3>Business API</h3>
            <NavLink to="/apikey"><p>API Key</p></NavLink>
            <NavLink to="/"><p>API Documentation</p></NavLink>
            <NavLink to="/businesstransactionhistory"><p>Transaction History</p></NavLink>
        </>
    )
}

export default AllLinks;