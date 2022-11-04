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

function TransactionHistroy(){

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
                                <th>Transaction Type</th>
                                <th>Sender Account Number</th>
                                <th>Receiver Account Number</th>
                                <th>Transaction Amount</th>
                                <th>Transaction Status</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2021-05-01</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Deposit</td>
                                <td>1000</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2021-05-01</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Deposit</td>
                                <td>1000</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2021-05-02</td>
                                <td>Transfer</td>
                                <td>123456789</td>
                                <td>Withdraw</td>
                                <td>500</td>
                                <td>Success</td>
                            </tr>
                        </TranTable>
                    </CHRightContainer>
                </CHRight>
              
            </CHContainer>
        </>
    )
}

export default TransactionHistroy;