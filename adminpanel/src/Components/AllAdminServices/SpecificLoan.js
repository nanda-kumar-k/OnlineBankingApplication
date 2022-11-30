import {SliderContainer, MLeftMenu, MRightMenu} from './DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import RLNAllAdminDataService from '../services/AllAdminServices/rln.alladmin.service'
import { useParams, useNavigate, NavLink } from "react-router-dom";

const EAllContainer = styled.div`
    width: 81vw;
    height: 85vh;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 2vw;

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
    background-color: #F2F2F2;
    border-radius: 10px;
    overflow: scroll;
    
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
    height: 3vh;
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

function SpcificLoan() {

    const [loansData, setLoansData] = React.useState('');
    const [eduData, setEduData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();
    const [errormessage, setErrormessage] = React.useState('');

    React.useEffect(() => {
        let urlElements = window.location.href.split('/');
        let loanId = urlElements[urlElements.length - 1];

        RLNAllAdminDataService.getSpecificLoan(loanId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {

                if(response.data.homeloans !== undefined) {
                    setLoansData(response.data.homeloans);
                }
                if(response.data.educationalLoans !== undefined) {
                    setEduData(response.data.educationalLoans);
                }
                // setLoansData(response.data);
                setNoData(true);
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
    },[parms,navigate]);

    const AccpectLoanHandle = () => {
        let urlElements = window.location.href.split('/');
        let loanId = urlElements[urlElements.length - 1];
        console.log(loanId);
        RLNAllAdminDataService.loanVerification(loanId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setErrormessage(response.message);
                // navigate('/customerhome/loans');
            }
            else {
                setErrormessage(response.message);
                // setNoData(true);
                // navigate('/login');
            }
        })
    }

  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <hr/>
                <SpecificDepositContainer>
                
                <>
                    {loansData ? 
                        <>
                            <EachRow>
                                <EachInfo>
                                    <h3>Loan ID</h3>
                                    <p>{loansData.homeLoanId}</p>
                                </EachInfo>
                                <EachInfo>
                                    <h3>Loan Date</h3>
                                    <p>{loansData.loanDate}</p>
                                </EachInfo>
                            </EachRow>
                            <EachRow>
                                <EachInfo>
                                    <h3>Loan Amount</h3>
                                    <p>{loansData.loanAmount}</p>
                                </EachInfo>
                                <EachInfo>
                                    <h3>Loan Interest</h3>
                                    <p>{loansData.loanInterest}</p>
                                </EachInfo>
                            </EachRow>
                            <EachRow>
                                <EachInfo>
                                    <h3>Home Address</h3>
                                    <p>{loansData.homeAddress}</p>
                                </EachInfo>
                                <EachInfo>
                                    <h3>Loan Duration</h3>
                                    <p>{loansData.loanEndDate}</p>
                                </EachInfo>
                            </EachRow>
                            <EachRow>
                                <EachInfo>
                                    <h3>Nominee Name</h3>
                                    <p>{loansData.nomineeName}</p>
                                </EachInfo>
                                <EachInfo>
                                    <h3>Pending Amount</h3>
                                    <p>{loansData.loanPendingAmount}</p>
                                </EachInfo>
                            </EachRow>
                            <EachRow>
                                <EachInfo>
                                    <h3>Loan Verification</h3>
                                    {loansData.loanVerification ? <p style={{color: "green"}}>Done</p> : <p style={{color: "red"}}>Pending</p> }
                                </EachInfo>
                                <EachInfo>
                                    <h3>Loan Status</h3>
                                    {loansData.loanStatus ? <p style={{color: "green"}}>Active</p> : <p style={{color: "red"}}>Closed</p> }
                                </EachInfo>
                            </EachRow>
                        </>
                         : 
                         <>
                         <EachRow>
                             <EachInfo>
                                 <h3>Loan ID</h3>
                                 <p>{eduData.educationalLoanId}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Loan Date</h3>
                                 <p>{eduData.loanDate}</p>
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                             <EachInfo>
                                 <h3>Loan Amount</h3>
                                 <p>{eduData.loanAmount}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Loan Interest</h3>
                                 <p>{eduData.loanInterest}</p>
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                             <EachInfo>
                                 <h3>Institution Name</h3>
                                 <p>{eduData.institutionName}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Degree</h3>
                                 <p>{eduData.degree}</p>
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                             <EachInfo>
                                 <h3>Year Of Study</h3>
                                 <p>{eduData.yearOfStudy}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Institution Address</h3>
                                 <p>{eduData.institutionAddress}</p>
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                            <EachInfo>
                                 <h3>Loan Duration</h3>
                                 <p>{eduData.loanEndDate}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Nominee Name</h3>
                                 <p>{eduData.nomineeName}</p>
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                            <EachInfo>
                                 <h3>Pending Amount</h3>
                                 <p>{eduData.loanPendingAmount}</p>
                             </EachInfo>
                             <EachInfo>
                                 <h3>Loan Verification</h3>
                                 {eduData.loanVerification ? <p style={{color: "green"}}>Done</p> : <p style={{color: "red"}}>Pending</p> }
                             </EachInfo>
                         </EachRow>
                         <EachRow>
                             <EachInfo>
                                 <h3>Loan Status</h3>
                                 {eduData.loanStatus ? <p style={{color: "green"}}>Active</p> : <p style={{color: "red"}}>Closed</p> }
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
                            <>{
                                loansData ?
                                <>
                                    {loansData.loanVerification ? <></> :
                                        <><SButton id="close" onClick={AccpectLoanHandle} > Accpect Loan </SButton>
                                        <NavLink to="/loansrequest"><SButton> Reject Loan </SButton></NavLink> </>
                                    }
                                </>
                                :
                                <>
                                    {eduData.loanVerification ? <></> :
                                        <><SButton id="close" onClick={AccpectLoanHandle} > Accpect Loan </SButton>
                                        <NavLink to="/loansrequest"><SButton> Reject Loan </SButton></NavLink> </>
                                         
                                    }
                                </>
                            }</>
                             
                        </EachButton>
                    </EachRow>
                </SpecificDepositContainer>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default SpcificLoan;