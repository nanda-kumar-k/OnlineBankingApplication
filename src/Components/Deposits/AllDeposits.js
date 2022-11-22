import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        padding: 4px;
        position: sticky;
        top: 0vh;
        background-color: white;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 4px;
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

    const [alldeposits, setAlldeposits] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();
    // const fetchDataFun = () => {
    //     navigate('/login');
    // }
    React.useEffect(() => {
        RLNDataService.getAllDeposits().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setAlldeposits(response.data);
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
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
                    <h2>All Fixed Deposits</h2>
                    <hr/>
                    <TranTable>
                        <tr>
                            <th>Deposit ID</th>
                            <th>Deposit Date</th>
                            <th>Deposit Amount</th>
                            <th>Deposit Interest</th>
                            <th>Deposit Duration</th>
                            <th>Nominee Name</th>
                            <th>Deposit Status</th>
                        </tr>
                        {alldeposits && alldeposits.map((item) => {
                            return (
                                <tr key={item.depositId}>
                                    <td>{item.depositId}</td>
                                    <td>{item.depositDate}</td>
                                    <td>{item.depositAmount}</td>
                                    <td>{item.depositInterest}</td>
                                    <td>{item.depositEndDate}</td>
                                    <td>{item.nomineeName}</td>
                                    {item.depositeActiveStatus ? <td style={{color: "green"}}>Active</td> : <td style={{color: "red"}}>Closed</td> }
                                </tr>
                            )
                        })}

                        {noData && <tr><td colSpan="7" style={{textAlign: "center"}}>No Data Found</td></tr>}
                        
                    </TranTable>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default AllDeposits;