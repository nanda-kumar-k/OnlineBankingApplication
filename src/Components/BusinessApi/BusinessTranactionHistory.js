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


function BusinessTransactionHistory() {
    
    const [transData, setTransData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNDataService.getAllBusinessTractionsHistory().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setTransData(response.data);
            }
            else {
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
                        <h2>Business Transaction History</h2>
                        <hr/>
                        <TranTable>
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
                        </TranTable>
                    </CHRightContainer>
                </CHRight>
              
            </CHContainer>
        </>
    )
};

export default BusinessTransactionHistory;