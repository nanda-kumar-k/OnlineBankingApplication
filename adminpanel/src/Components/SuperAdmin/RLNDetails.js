import {SliderContainer, MLeftMenu, MRightMenu} from '../AllAdminServices/DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import { useNavigate, useParams} from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import RLNDataService from '../services/SuperAdmin/rln.superadmin.service'
const EAllContainer = styled.div`
    width: 81vw; 
    height: 85vh;
    padding: 5vh 10vw 0vh 10vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* justify-content: flex-start; */
    /* align-items: flex-start; */

    /* background-color: red; */
    padding: 2vh 2vw;

    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
    hr {
        width: 100%;
        height: 1px;
        background-color: #E6E6E6;
    }
`;

const AddManagerContainer = styled.div`
    width: 70vw;
    height: 80vh;
    margin-top: 2vh;
    padding: 2vh 0vw;
    /* background-color: red; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    #but{
        margin-top: 5vh;
        width: 25vw;
    }
    
`;

const EachServiceCard = styled.div`
    width: 25vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    cursor: pointer;
    background: transparent linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%) 0% 0% no-repeat padding-box;
    &:hover {
        transform: scale(1.1);
    }
    #abt {
        margin-top: 2vh;
        font-size: 1rem;
        color: #707070 !important;
        margin-bottom: 2vh;
    }
`;

function RLNDetails() {

    const navigate = useNavigate();
    const params = useParams();
    const [rlndetails, setRLNDetails] = React.useState('');

    React.useEffect(() => {
        window.scrollTo(0, 0);
        const superadmin = JSON.parse(localStorage.getItem("superadmin"));
        const manager = JSON.parse(localStorage.getItem("manager"));
        const employee = JSON.parse(localStorage.getItem("employee"));
        if( superadmin || manager || employee){}
        else{
          navigate('/');
        }

        RLNDataService.getRLNDetails().then((response) => {
            if(response.statusCode === 200){
                setRLNDetails(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        }
        );

        
    }, [navigate,params]);

  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <AddManagerContainer>
                    <EachServiceCard>
                        <CurrencyRupeeIcon style={{ fontSize: 50 }} />
                        <h2>Balance</h2>
                        <h2>₹ {rlndetails.balance}</h2>
                    </EachServiceCard>
                    <EachServiceCard>
                        <AddHomeWorkIcon style={{ fontSize: 50 }} />
                        <h2>Home Loan Interest</h2>
                        <h2>₹ {rlndetails.homeLoanInterest}</h2>
                    </EachServiceCard>
                    <EachServiceCard>
                        <CastForEducationIcon style={{ fontSize: 50 }} />
                        <h2>Education Loan Interest</h2>
                        <h2>₹ {rlndetails.educationLoanInterest}</h2>
                    </EachServiceCard>
                    <EachServiceCard>
                        <CreditScoreIcon style={{ fontSize: 50 }} />
                        <h2>Deposit Interest</h2>
                        <h2>₹ {rlndetails.depositInterest}</h2>
                    </EachServiceCard>
                </AddManagerContainer>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default RLNDetails;