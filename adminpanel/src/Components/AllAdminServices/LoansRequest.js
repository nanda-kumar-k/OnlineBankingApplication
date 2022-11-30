import {SliderContainer, MLeftMenu, MRightMenu} from './DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import RLNAllAdminDataService from '../services/AllAdminServices/rln.alladmin.service'
import { useParams, useNavigate,NavLink } from "react-router-dom";


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

const TranTable = styled.table`
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


function LoansRequest() {

    const [allData, setAllData] = React.useState('');
    // const [noHomeData, setNoHomeData] = React.useState(false);
    //const [noEduData, setNoEduData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNAllAdminDataService.LoansRequest().then((response) => {
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
        <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>All Home Loans Request</h2>
                <hr/>
                <TranTable>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Date</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Home Address</th>
                            <th>Loan Duration</th>
                            <th>Nominee Name</th>
                            <th>Pending Amount</th>
                            <th>Loan Status</th>
                            <th>Loan Verification</th>
                            <th>Loan Payments</th>
                            <th>More Info</th>
                        </tr>
                        {allData && allData.homeloans.map((data) => (
                            <tr key={data.homeLoanId}>
                                <td>{data.homeLoanId}</td>
                                <td>{data.loanDate}</td>
                                <td>{data.loanAmount}</td>
                                <td>{data.loanInterest}</td>
                                <td>{data.homeAddress}</td>
                                <td>{data.loanEndDate}</td>
                                <td>{data.nomineeName}</td>
                                <td>{data.loanPendingAmount}</td>
                                {data.loanStatus ? <td style={{color: "green"}}>Active</td> : <td style={{color: "red"}}>Closed</td> }
                                {data.loanVerification ? <td style={{color: "green"}}>Done</td> : <td style={{color: "red"}}>Pending</td> }
                                <td><NavLink to={"/specificloanpayments/" +data.homeLoanId}>Check</NavLink></td>
                                <td><NavLink to={"/specificloan/" + data.homeLoanId}>View</NavLink></td>
                            </tr>
                        ))}
                        { !allData.homeloans && <tr><td colSpan="9">No Data Found</td></tr>}
                    </TranTable>

                    <h2 style={{marginTop:"50px"}}>All Educational Loans Request </h2>
                    <hr/>
                    <TranTable>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Date</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Institution Name</th>
                            <th>Degree</th>
                            <th>Year Of Study</th>
                            <th>Institution Address</th>
                            <th>Loan Duration</th>
                            <th>Nominee Name</th>
                            <th>Pending Amount</th>
                            <th>Loan Status</th>
                            <th>loan Verification</th>
                            <th>More Info</th>
                        </tr>
                        {allData && allData.educationalLoans.map((data) => (
                            <tr key={data.educationalLoanId}>
                                <td>{data.educationalLoanId}</td>
                                <td>{data.loanDate}</td>
                                <td>{data.loanAmount}</td>
                                <td>{data.loanInterest}</td>
                                <td>{data.institutionName}</td>
                                <td>{data.degree}</td>
                                <td>{data.yearOfStudy}</td>
                                <td>{data.institutionAddress}</td>
                                <td>{data.loanEndDate}</td>
                                <td>{data.nomineeName}</td>
                                <td>{data.loanPendingAmount}</td>
                                {data.loanStatus ? <td style={{color: "green"}}>Active</td> : <td style={{color: "red"}}>Closed</td> }
                                {data.loanVerification ? <td style={{color: "green"}}>Done</td> : <td style={{color: "red"}}>Pending</td> }
                                <td><NavLink to={"/specificloan/" + data.educationalLoanId}>View</NavLink></td>
                            </tr>
                        ))}
                        { !allData.educationalLoans && <tr><td colSpan="9">No Data Found</td></tr>}
                    </TranTable>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
        </>
    )
}

export default LoansRequest;