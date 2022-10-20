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
            <NavLink to="/"><p>Open New Deposit</p></NavLink>
            <NavLink to="/"><p>All Deposits</p></NavLink>
            <hr/>
            <h3>Loans</h3>
            <NavLink to="/"><p>Open New Home Loan</p></NavLink>
            <NavLink to="/"><p>Open New Educational Loan</p></NavLink>
            <NavLink to="/"><p>All Loans</p></NavLink>
            <hr/>
            <h3>Insurances</h3>
            <NavLink to="/"><p>Open New Life Insurance</p></NavLink>
            <NavLink to="/"><p>All Insurances</p></NavLink>
            <hr/>
            <h3>Business API</h3>
            <NavLink to="/"><p>API Key</p></NavLink>
            <NavLink to="/"><p>API Documentation</p></NavLink>
            <NavLink to="/"><p>Transaction History</p></NavLink>
        </>
    )
}

export default AllLinks;