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

function CustomerBusinessApiTransactions() {

    const [transData, setTransData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        let urlElements = window.location.href.split('/');
        let username = urlElements[urlElements.length - 1];

        RLNAllAdminDataService.getCustomerBusinessApiTransactions(username).then((response) => {
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
                        <th>Payment ID</th>
                        <th>Payment Request Id</th>
                        <th>Purpose</th>
                        <th>Payment Date</th>
                        <th>Client Username</th>
                        <th>Payment From</th>
                        <th>Payment Amount</th>
                        <th>Payment Status</th>
                    </tr>
                    
                    {transData && transData.map((data) => {
                        return (
                            <tr>
                                <td>{data.paymentId}</td>
                                <td>{data.paymentRequestId}</td>
                                <td>{data.purpose}</td>
                                <td>{data.paymentDate}</td>
                                <td>{data.clientUsername}</td>
                                <td>{data.paymentCustomeAccountNumber}</td>
                                <td>{data.amountPaid}</td>
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

export default CustomerBusinessApiTransactions;