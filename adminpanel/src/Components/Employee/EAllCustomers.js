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

function EAllCustomers() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <EmployeeMenu/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>All Customers</h2>
                <hr/>
                <AllCTable>
                    <tr>
                        <th>Account ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Profile</th>
                        <th>Deposits</th>
                        <th>Loans</th>
                        <th>Transactions</th>
                        <th>Insurances</th>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Male</td>
                        <td>Checking</td>
                        <td>$1000</td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                        <td><button>View</button></td>
                    </tr>
                </AllCTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default EAllCustomers;