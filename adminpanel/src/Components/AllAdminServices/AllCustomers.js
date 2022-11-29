import {SliderContainer, MLeftMenu, MRightMenu} from './DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import RLNAllAdminDataService from '../services/AllAdminServices/rln.alladmin.service'
import { useParams, useNavigate, NavLink } from "react-router-dom";


const EAllContainer = styled.div`
    width: 81vw;
    height: 85vh;
    /* background-color: red; */
    padding: 2vh 2vw;
    overflow: scroll;
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
    hr {
        /* border: 1px solid #E6E6E6; */
        width: auto;
    }
`;

const AllCTable = styled.table`
    width: 81vw;
    height: 15vh;
    border-collapse: collapse;

    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 6px;
        position: sticky;
        top: 0vh;
        background-color: white;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 6px;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f4f8fc;
    }
    tr:nth-child(odd) {
        background-color: white;
    }
`

function AllCustomers() {

    const [allCustomerData, setAllCustomerData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        RLNAllAdminDataService.getAllCustomers()
            .then((response) => {
                if(response.statusCode === 200) {
                    setAllCustomerData(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [parms, navigate]);

  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>All Customers</h2>
                <hr/>
                <AllCTable>
                    <tr>
                        <th>Account Number</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Account Type</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Verification</th>
                        <th>Profile</th>
                        <th>Deposits</th>
                        <th>Loans</th>
                        <th>Transactions</th>
                    </tr>
                    {allCustomerData && allCustomerData.map((data) => {
                        return (
                            <tr>
                                <td>{data.accountNumber}</td>
                                <td>{data.username}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.accountType}</td>
                                <td>{data.contactNumber}</td>
                                <td>{data.emailId}</td>
                                <td>{data.balance}</td>
                                {data.verificationStatus ? <td style={{color: 'green'}}>Verified</td> : <td style={{color: 'red'}}>Pending</td>}
                                <td><NavLink to={"/customerprofile/" + data.username}>Profile</NavLink></td>
                                <td><NavLink to={"/customerdeposit/"+ data.username}>Deposits</NavLink></td>
                                <td><NavLink to={"/customerloans/"+ data.username}>Loans</NavLink></td>
                                <td><NavLink to={"/customertransactions/"+ data.username}>Transactions</NavLink></td>
                            </tr>
                        )
                    })}
                    { allCustomerData ? <></> : <tr><td colSpan="12">No Data Found</td></tr>}
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AllCustomers;