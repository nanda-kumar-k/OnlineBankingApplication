import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";


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

function AllLoans() {
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
                            <th>Loan ID</th>
                            <th>Loan Date</th>
                            <th>Loan Type</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Loan Duration</th>
                            <th>Nominee Name</th>
                            <th>Nominee Account No</th>
                            <th>Loan Status</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-01-01</td>
                            <td>Home</td>
                            <td>10000</td>
                            <td>10%</td>
                            <td>1 Year</td>
                            <td>John Doe</td>
                            <td>123456789012</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-01-01</td>
                            <td>Home</td>
                            <td>10000</td>
                            <td>10%</td>
                            <td>1 Year</td>
                            <td>John Doe</td>
                            <td>123456789012</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-01-01</td>
                            <td>Home</td>
                            <td>10000</td>
                            <td>10%</td>
                            <td>1 Year</td>
                            <td>John Doe</td>
                            <td>123456789012</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-01-01</td>
                            <td>Home</td>
                            <td>10000</td>
                            <td>10%</td>
                            <td>1 Year</td>
                            <td>John Doe</td>
                            <td>123456789012</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-01-01</td>
                            <td>Home</td>
                            <td>10000</td>
                            <td>10%</td>
                            <td>1 Year</td>
                            <td>John Doe</td>
                            <td>123456789012</td>
                            <td>Active</td>
                        </tr>
                        
                    </TranTable>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default AllLoans;