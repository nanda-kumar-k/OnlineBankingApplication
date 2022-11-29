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

function AllDeposits() {

    const [CustomerDepositData, setCustomerDepositData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        RLNAllAdminDataService.getAllCustomersDeposits()
            .then((response) => {
                if(response.statusCode === 200) {
                    setCustomerDepositData(response.data);
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
                <h2>Account Id Deposits</h2>
                <hr/>
                <AllCTable>
                        <tr>
                            <th>Deposit ID</th>
                            <th>Deposit Date</th>
                            <th>Deposit Amount</th>
                            <th>Deposit Interest</th>
                            <th>Deposit Duration</th>
                            <th>Nominee Name</th>
                            <th>Deposit Status</th>
                            <th>More Info</th>
                        </tr>
                        {CustomerDepositData && CustomerDepositData.map((item) => {
                            return (
                                <tr key={item.depositId}>
                                    <td>{item.depositId}</td>
                                    <td>{item.depositDate}</td>
                                    <td>{item.depositAmount}</td>
                                    <td>{item.depositInterest}</td>
                                    <td>{item.depositEndDate}</td>
                                    <td>{item.nomineeName}</td>
                                    {item.depositeActiveStatus ? <td style={{color: "green"}}>Active</td> : <td style={{color: "red"}}>Closed</td> }
                                    <td><NavLink to={"/specificdeposit/" + item.depositId}>View</NavLink></td>
                                </tr>
                            )
                        })}

                        {CustomerDepositData  && CustomerDepositData.length === 0 && (
                            <tr>
                                <td colSpan="8">No Deposits Found</td>
                            </tr>
                        )}
                        
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AllDeposits;