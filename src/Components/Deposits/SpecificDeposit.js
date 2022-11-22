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

function SpecificDeposit() {

    const [deposit, setDeposit] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const [errormessage, setErrormessage] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();
    // const fetchDataFun = () => {
    //     navigate('/login');
    // }
    React.useEffect(() => {
        let urlElements = window.location.href.split('/');
        let depositId = urlElements[urlElements.length - 1];
        console.log(depositId);
        RLNDataService.specificDeposit(depositId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setDeposit(response.data);
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
                        {deposit && (
                            <>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Deposit ID</h3>
                                        <p>{deposit.depositId}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Deposit Date</h3>
                                        <p>{deposit.depositDate}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Deposit Amount</h3>
                                        <p>{deposit.depositAmount}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Deposit Interest</h3>
                                        <p>{deposit.depositInterest}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Deposit Closing Date</h3>
                                        <p>{deposit.depositEndDate}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Deposit Nominee Name</h3>
                                        <p>{deposit.nomineeName}</p>
                                    </EachInfo>
                                </EachRow>
                                <EachRow>
                                    <EachInfo>
                                        <h3>Deposit Current Amount</h3>
                                        <p>{deposit.depositeCurrentAmount}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Deposit Status</h3>
                                        {deposit.depositeActiveStatus ? <p>Active</p> : <p>Closed</p>}
                                    </EachInfo>
                                </EachRow>
                            </>
                        )}
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
                                <>{deposit.depositeActiveStatus ?  <SButton id="close" onClick={closeDepositFun}> Close Deposit </SButton> : <></>}</>
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

export default SpecificDeposit;