import {SliderContainer, MLeftMenu, MRightMenu} from './EDashboard';
import styled from 'styled-components';
import EmployeeMenu from './EmployeeMenu';

const EAllContainer = styled.div`
    width: 81vw;
    height: 85vh;
    /* background-color: red; */
    padding: 2vh 2vw;

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

function CustomerDeposit() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <EmployeeMenu/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>Account Id Deposits</h2>
                <hr/>
                <AllCTable>
                    <tr>
                        <th>Deposit ID</th>
                        <th>Deposit Date</th>
                        <th>Amount Fixed</th>
                        <th>Account Type</th>
                        <th>Nominee Name</th>
                        <th>Nominee Account No</th>
                        <th>Current Deposit Balance</th>
                        <th>Deposit Close Date</th>
                        <th>Deposit Status</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2021-05-01</td>
                        <td>10000</td>
                        <td>Fixed Deposit</td>
                        <td>John</td>
                        <td>123456789</td>
                        <td>10000</td>
                        <td>2021-05-01</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2021-05-01</td>
                        <td>10000</td>
                        <td>Fixed Deposit</td>
                        <td>John</td>
                        <td>123456789</td>
                        <td>10000</td>
                        <td>2021-05-01</td>
                        <td>Active</td>
                    </tr>
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default CustomerDeposit;