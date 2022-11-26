import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";
import { useNavigate, useParams } from "react-router-dom";

export const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    overflow: scroll;
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
`;
const TranTable = styled.table`
    width: 64vw;
    height: auto;
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



function LoanPaymentsHistory() {

    const [allData, setAllData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNDataService.allLoanPayments().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setAllData(response.data);
            }
            else if (response.statusCode === 204) {
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
        <CHContainer>
            <BackImg src={background} alt="" />
            <CHLeft>
                <CHNavbar>
                    <AllLinks/>
                </CHNavbar>
            </CHLeft>
            <CHRight>
                <CHRightContainer>
                    <h2>Loan Payments</h2>
                    <hr/>
                    <TranTable>
                        <tr>
                            <th>Loan Payment Id</th>
                            <th>Loan ID</th>
                            <th>Payment Date</th>
                            <th>Amount Paid</th>
                            <th>Status</th>
                        </tr>
                        {allData && allData.map((data) => (
                            <tr key={data.loanPaymentId}>
                                <td>{data.loanPaymentId}</td>
                                <td>{data.loanId}</td>
                                <td>{data.paymentDate}</td>
                                <td>{data.amountPaid}</td>
                                {data.status ? <td style={{color: "green"}}>Success</td> : <td style={{color: "red"}}>Failed</td> }
                            </tr>
                        ))}
                        { !allData && <tr><td colSpan="9">No Data Found</td></tr>}
                    </TranTable>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default LoanPaymentsHistory;