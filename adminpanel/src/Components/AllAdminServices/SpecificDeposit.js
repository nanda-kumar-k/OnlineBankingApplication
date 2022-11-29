import {SliderContainer, MLeftMenu, MRightMenu} from './DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import RLNAllAdminDataService from '../services/AllAdminServices/rln.alladmin.service'
import { useParams, useNavigate } from "react-router-dom";

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



function SpecificDeposit() {

    const [deposit, setDeposit] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();
    // const fetchDataFun = () => {
    //     navigate('/login');
    // }
    React.useEffect(() => {
        let urlElements = window.location.href.split('/');
        let depositId = urlElements[urlElements.length - 1];
        console.log(depositId);
        RLNAllAdminDataService.specificDeposit(depositId).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                if (response.data.customer !== undefined ) {
                    setDeposit(response.data);
                    setNoData(true);
                }   
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
    },[parms,navigate]);


  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2> Deposit Id : {deposit.depositId} </h2>
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
                                        <h3>Account Number</h3>
                                        <p>{deposit.customer.accountNumber}</p>
                                    </EachInfo>
                                    <EachInfo>
                                        <h3>Username</h3>
                                        <p>{deposit.customer.username}</p>
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
                    </SpecificDepositContainer>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default SpecificDeposit;