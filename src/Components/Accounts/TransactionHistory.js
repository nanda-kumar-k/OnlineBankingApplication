import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";

export const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
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
        padding: 3px;
        position: sticky;
        top: 0vh;
        background-color: white;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 3px;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f4f8fc;
    }
    tr:nth-child(odd) {
        background-color: white;
    }

    #notfound {
        padding: 10vh 0;
        margin-top: 10vh;
        text-align: center;
        color: red;
    }

`

function TransactionHistroy() {

    const [transData, setTransData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNDataService.customerTransactionsDetails().then((response) => {
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
        <CHContainer>
                <BackImg src={background} alt="" />
                <CHLeft>
                    <CHNavbar>
                        <AllLinks/>
                    </CHNavbar>
                </CHLeft>
                <CHRight>
                    <CHRightContainer>
                        <h2>Transaction History</h2>
                        <hr/>
                        <TranTable>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Transaction Amount</th>
                                <th>Transfer To</th>
                                <th>Transfer To Name</th>
                                <th>Transfer From Account No</th>
                                <th>Transfer From Name</th>
                                <th>Transaction Status</th>
                            </tr>
                            
                            {transData && transData.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.transactionId}</td>
                                        <td>{data.transactionDate}</td>
                                        <td>{data.amountTransfer}</td>
                                        <td>{data.recieverAccountNumber}</td>
                                        <td>{data.recieverName}</td>
                                        <td>{data.senderAccountNumber}</td>
                                        <td>{data.senderName}</td>
                                        {data.transactionStatus ? <td style={{color: "green"}}>Success</td> : <td style={{color: "red"}}>Failed</td> }
                                    </tr>
                                )
                            }
                            )}

                            {noData && <tr><td colSpan="8" id="notfound">No Data Found</td></tr>}
                        </TranTable>
                    </CHRightContainer>
                </CHRight>
              
            </CHContainer>
        </>
    )
}

export default TransactionHistroy;