import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import RLNDataService from "../../services/rln.customer.service";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
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


function SpecificLoan() {

    const [loansData, setLoansData] = React.useState('');
    const [eduData, setEduData] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const [errormessage, setErrormessage] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
        let urlElements = window.location.href.split('/');
        let loanId = urlElements[urlElements.length - 1];

        RLNDataService.specificLoan(loanId).then((response) => {
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
    

    const closeLoanSubmit = () => {
        let urlElements = window.location.href.split('/');
        let loanId = urlElements[urlElements.length - 1];
        console.log(loanId);
        RLNDataService.closeLoan(loanId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Loan Closed Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if(result.isConfirmed) {
                        navigate('/rating');
                    }
                })
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
        <CHContainer>
        <BackImg src={background} alt="" />
        <CHLeft>
            <CHNavbar>
                <AllLinks/>
            </CHNavbar>
        </CHLeft>
        <CHRight>
            <CHRightContainer>
                <h2>Loan</h2>
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
                                    <h3>Cibil SCore</h3>
                                    <p>{loansData.cibilSCore}</p>
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
                                    <h3>Cibil SCore</h3>
                                    <p>{eduData.cibilSCore}</p>
                                </EachInfo>
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
                                    {loansData.loanStatus ? 
                                        <SButton id="close" onClick={closeLoanSubmit} > Close loan </SButton> : <></>
                                    }
                                </>
                                :
                                <>
                                    {eduData.loanStatus ?
                                        <SButton id="close" onClick={closeLoanSubmit} > Close loan </SButton> : <></>
                                    }
                                </>
                            }</>
                            <NavLink to="/allloans"><SButton> Back </SButton></NavLink> 
                        </EachButton>
                    </EachRow>
                </SpecificDepositContainer>
            </CHRightContainer>
        </CHRight>
    </CHContainer>
    <div style={{marginTop:"10vh"}}>
        <Footer/>
    </div>
        </>
    )
}

export default SpecificLoan;

