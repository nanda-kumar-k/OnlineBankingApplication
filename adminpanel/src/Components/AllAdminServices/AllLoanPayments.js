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

function AllLoanPayments() {

    const [allData, setAllData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNAllAdminDataService.getAllLoanPayments().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setAllData(response.data);
            }
            else  {
                //setNoData(true);
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
                <h2>All Loans Payments</h2>
                <hr/>
                <AllCTable>
                    <tr>
                        <th>Loan Payment Id</th>
                        <th>Account Number</th>
                        <th>Username</th>
                        <th>Loan ID</th>
                        <th>Payment Date</th>
                        <th>Amount Paid</th>
                        <th>Status</th>
                    </tr>
                    {allData && allData.map((data) => (
                        <tr key={data.loanPaymentId}>
                            <td>{data.loanPaymentId}</td>
                            <td>{data.customer.accountNumber}</td>
                            <td>{data.customer.username}</td>
                            <td>{data.loanId}</td>
                            <td>{data.paymentDate}</td>
                            <td>{data.amountPaid}</td>
                            {data.status ? <td style={{color: "green"}}>Success</td> : <td style={{color: "red"}}>Failed</td> }
                        </tr>
                    ))}
                    { !allData && <tr><td colSpan="9">No Data Found</td></tr>}
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AllLoanPayments;