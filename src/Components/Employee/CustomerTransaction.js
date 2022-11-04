import {SliderContainer, MLeftMenu, MRightMenu} from './EDashboard';
import styled from 'styled-components';
import EmployeeMenu from './EmployeeMenu';

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

function CustomerTransaction() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <EmployeeMenu/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>Account Id Transaction History</h2>
                <hr/>
                <AllCTable>
                <tr>
                    <th>Transaction ID</th>
                    <th>Transaction Date</th>
                    <th>Transaction Type</th>
                    <th>Sender Account Number</th>
                    <th>Transaction Amount</th>
                    <th>Transaction Status</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2021-05-01</td>
                    <td>Transfer</td>
                    <td>Deposit</td>
                    <td>1000</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2021-05-01</td>
                    <td>Transfer</td>
                    <td>Deposit</td>
                    <td>1000</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2021-05-02</td>
                    <td>Transfer</td>
                    <td>Withdraw</td>
                    <td>500</td>
                    <td>Success</td>
                </tr>
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default CustomerTransaction;