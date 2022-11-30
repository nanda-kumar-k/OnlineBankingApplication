import {SliderContainer, MLeftMenu, MRightMenu} from './DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import RLNAllAdminDataService from '../services/AllAdminServices/rln.alladmin.service'
import { useParams, useNavigate } from "react-router-dom";

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

function AllBusinessApiTransactions() {

    const [transData, setTransData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNAllAdminDataService.getAllBusinessApiTransactions().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setTransData(response.data);
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },[parms,navigate]);

  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>All Transaction History</h2>
                <hr/>
                <AllCTable>
                    <tr>
                        <th>Username</th>
                        <th>Account No</th>
                        <th>Auth Domain</th>
                        <th>Payment ID</th>
                        <th>Payment Date</th>
                        <th>Payment Request Id</th>
                        <th>Request Date</th>
                        <th>Purpose</th>
                        <th>Client Username</th>
                        <th>Payment From</th>
                        <th>Payment Amount</th>
                        <th>Request Count</th>
                        <th>Redirect Url</th>
                        <th>Redirect Get Url</th>
                        <th>Payment Status</th>
                    </tr>
                    
                    {transData && transData.map((data) => {
                        return (
                            <tr>
                                <td>{data.businessAPI.customer.username}</td>
                                <td>{data.businessAPI.customer.accountNumber}</td>
                                <td>{data.authDomain}</td>
                                <td>{data.paymentId}</td>
                                <td>{data.paymentDate}</td>
                                <td>{data.paymentRequestId}</td>
                                <td>{data.paymentRequestDate}</td>
                                <td>{data.purpose}</td>
                                <td>{data.clientUsername}</td>
                                <td>{data.paymentCustomeAccountNumber}</td>
                                <td>{data.amountPaid}</td>
                                <td>{data.paymentRequestCount}</td>
                                <td>{data.redirectURL}</td>
                                <td>{data.redirectGetURL}</td>
                                {data.paymentStatus ? <td style={{color: "green"}}>Success</td> : <td style={{color: "red"}}>Failed</td> }
                            </tr>
                        )
                    }
                    )}

                    {noData && <tr><td colSpan="8" id="notfound">No Data Found</td></tr>}
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AllBusinessApiTransactions;