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

    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
`;

const AllCTable = styled.table`
    width: 81vw;
    height: 15vh;
    border-collapse: collapse;

    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        position: sticky;
        top: 0vh;
        background-color: white;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f4f8fc;
    }
    tr:nth-child(odd) {
        background-color: white;
        
    }
`

function AccountRequest() {

    const [allAccountRequestData, setAllAccountRequestData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        RLNAllAdminDataService.allAccountRequest()
            .then((response) => {
                if(response.statusCode === 200) {
                    setAllAccountRequestData(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },[parms,navigate]);


  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>Account Request</h2>
                <hr/>
                <AllCTable>
                    <tbody>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Account Type</th>
                        <th>Request On</th>
                        <th>Verification Status</th>
                        <th>Verification</th>
                    </tr>
                    {allAccountRequestData && allAccountRequestData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.emailId}</td>
                                <td>{item.accountType}</td>
                                <td>{item.created_date}</td>
                                {item.verificationStatus ? <td style={{color: 'green'}}>Active</td> : <td style={{color: 'red'}}>Pending</td>}
                                <td><NavLink to={"/customerprofile/" + item.username }>Verfiy</NavLink></td>
                            </tr>
                        )
                    })}
                    {!allAccountRequestData && <tr><td id="notfound" colSpan="9">No Account Request Found</td></tr>}
                    </tbody>
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AccountRequest;