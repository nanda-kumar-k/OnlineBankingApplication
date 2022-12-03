import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";
import { useNavigate, useParams,NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

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

function AllLoans() {

    const [allData, setAllData] = React.useState('');
    // const [noHomeData, setNoHomeData] = React.useState(false);
    //const [noEduData, setNoEduData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
        RLNDataService.getAllLoans().then((response) => {
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
                    <h2>All Home Loans</h2>
                    <hr/>
                    <TranTable>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Date</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Cibil Score</th>
                            <th>Home Address</th>
                            <th>Loan Duration</th>
                            <th>Nominee Name</th>
                            <th>Pending Amount</th>
                            <th>Loan Status</th>
                            <th>Loan Verification</th>
                            <th>More Info</th>
                        </tr>
                        {allData && allData.homeloans.map((data) => (
                            <tr key={data.homeLoanId}>
                                <td>{data.homeLoanId}</td>
                                <td>{data.loanDate}</td>
                                <td>{data.loanAmount}</td>
                                <td>{data.loanInterest}</td>
                                <td>{data.cibilSCore}</td>
                                <td>{data.homeAddress}</td>
                                <td>{data.loanEndDate}</td>
                                <td>{data.nomineeName}</td>
                                <td>{data.loanPendingAmount}</td>
                                {data.loanStatus ? <td style={{color: "green"}}>Active</td> : <td style={{color: "red"}}>Closed</td> }
                                {data.loanVerification ? <td style={{color: "green"}}>Done</td> : <td style={{color: "red"}}>Pending</td> }
                                <td><NavLink to={"/specificloan/" + data.homeLoanId}>View</NavLink></td>
                            </tr>
                        ))}
                        { !allData.homeloans && <tr><td colSpan="9">No Data Found</td></tr>}
                    </TranTable>

                    <h2 style={{marginTop:"50px"}}>All Educational Loans</h2>
                    <hr/>
                    <TranTable>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Date</th>
                            <th>Loan Amount</th>
                            <th>Loan Interest</th>
                            <th>Cibil Score</th>
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
                                <td>{data.cibilSCore}</td>
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
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        <div style={{marginTop:"10vh"}}>
            <Footer/>
        </div>
        </>
    )
}

export default AllLoans;