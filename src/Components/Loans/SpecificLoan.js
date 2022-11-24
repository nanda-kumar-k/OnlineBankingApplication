import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
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


const SpecificDepositContainer = styled.div`
    padding: 1vh 1vw;
    width: 50vw;
    height: 64vh;
    padding: 2vh 6vw;
    /* background-color: red; */
    border-radius: 10px;
    
`;

const EachRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 54vw;
    height: 10vh;
    margin-bottom: 10px;
`;

const EachInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 25vw;
    height: 10vh;
    /* background-color: white; */

    p {
        margin-top: 5px;
    }
`;

const EachButton = styled.div`
    width: 54vw;
    height: 5vh;
    /* margin-top: 100px; */
    display: flex;
    /* justify-content: center; */
    align-items: center;

    #close {
        background-color: #FF0000;
        margin-right: 150px;
        margin-left: 100px;
        &:hover {
        background-color: #fa3030;
    }
    }
    a {
        text-decoration: none;
        color: white;
    }
`;

const SButton = styled.div`
    width: 10vw;
    height: 5vh;
    background-color: #4CAF50;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
        background-color: #3e8e41;
    }
`;


function SpecificLoan() {

    const [loan, setLoan] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const [errormessage, setErrormessage] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        let urlElements = window.location.href.split('/');
        let loanId = urlElements[urlElements.length - 1];
        RLNDataService.specificLoan(loanId).then((response) => {
            // console.log(response);
            if(response.statusCode === 200) {
                setLoan(response.data);
                setNoData(true);
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
    },[parms,navigate]);

    const closeDepositFun = () => {
        let urlElements = window.location.href.split('/');
        let depositId = urlElements[urlElements.length - 1];
        RLNDataService.closeDeposit(depositId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                navigate('/alldeposits');
            }
            else if (response.statusCode === 400) {
                setErrormessage(response.message);
            }
        })
    }

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
                    <SpecificDepositContainer>
                    <>
                        {loan.homeloans[0] ? 
                            <>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Loan ID</h3>
                                        <p>{loan.homeloans[0].homeLoanId}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Loan Date</h3>
                                        <p>{loan.homeloans[0].loanDate}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Loan Amount</h3>
                                        <p>{loan.homeloans[0].loanAmount}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Loan Interest</h3>
                                        <p>{loan.homeloans[0].loanInterest}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Home Address</h3>
                                        <p>{loan.homeloans[0].homeAddress}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Loan Duration</h3>
                                        <p>{loan.homeloans[0].loanEndDate}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Nominee Name</h3>
                                        <p>{loan.homeloans[0].nomineeName}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Pending Amount</h3>
                                        <p>{loan.homeloans[0].loanPendingAmount}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Loan Verification</h3>
                                        {loan.homeloans[0].loanVerification ? <p style={{color: "green"}}>Done</p> : <p style={{color: "red"}}>Pending</p> }
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Loan Status</h3>
                                        {loan.homeloans[0].loanStatus ? <p style={{color: "green"}}>Active</p> : <p style={{color: "red"}}>Closed</p> }
                                    </EachInfo>
                                </EachRow>
                            </>
                             : 
                             <>
                             <EachRow>
                                 <EachInfo>
                                     <h3>Loan ID</h3>
                                     <p>{loan.educationalLoans[0].educationalLoanId}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Loan Date</h3>
                                     <p>{loan.educationalLoans[0].loanDate}</p>
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                 <EachInfo>
                                     <h3>Loan Amount</h3>
                                     <p>{loan.educationalLoans[0].loanAmount}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Loan Interest</h3>
                                     <p>{loan.educationalLoans[0].loanInterest}</p>
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                 <EachInfo>
                                     <h3>Institution Name</h3>
                                     <p>{loan.educationalLoans[0].institutionName}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Degree</h3>
                                     <p>{loan.educationalLoans[0].degree}</p>
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                 <EachInfo>
                                     <h3>Year Of Study</h3>
                                     <p>{loan.educationalLoans[0].yearOfStudy}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Institution Address</h3>
                                     <p>{loan.educationalLoans[0].institutionAddress}</p>
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                <EachInfo>
                                     <h3>Loan Duration</h3>
                                     <p>{loan.educationalLoans[0].loanEndDate}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Nominee Name</h3>
                                     <p>{loan.educationalLoans[0].nomineeName}</p>
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                <EachInfo>
                                     <h3>Pending Amount</h3>
                                     <p>{loan.educationalLoans[0].loanPendingAmount}</p>
                                 </EachInfo>
                                 <EachInfo>
                                     <h3>Loan Verification</h3>
                                     {loan.educationalLoans[0].loanVerification ? <p style={{color: "green"}}>Done</p> : <p style={{color: "red"}}>Pending</p> }
                                 </EachInfo>
                             </EachRow>
                             <EachRow>
                                 <EachInfo>
                                     <h3>Loan Status</h3>
                                     {loan.educationalLoans[0].loanStatus ? <p style={{color: "green"}}>Active</p> : <p style={{color: "red"}}>Closed</p> }
                                 </EachInfo>
                             </EachRow>
                         </> 
                        }
                        </>
                        <>{!noData && (
                            <>
                                <h3 styel={{textAlign : "center"}}>Invlaid Request...!!</h3>
                            </>
                        )}
                        </>
                        <EachRow>
                            <p >{errormessage}</p>
                        </EachRow>
                        <EachRow>
                            <EachButton>
                                <>{loan.educationalLoans[0].loanStatus || loan.homeloans[0].loanStatus ?  <SButton id="close" onClick={closeDepositFun}> Close Deposit </SButton> : <></>}</>
                                <NavLink to="/alldeposits"><SButton> Back </SButton></NavLink>
                            </EachButton>
                        </EachRow>
                    </SpecificDepositContainer>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default SpecificLoan;

