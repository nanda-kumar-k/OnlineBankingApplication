import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import * as React from 'react';
import RLNDataService from "../../services/rln.customer.service";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    /* background-color: red; */
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* margin-bottom: 25px; */
    }

    .css-dqr9h-MuiRating-label {
        width: 50px;
        height: 50px;
        font-size: 50px;

    }
`;

const SubmitButton = styled.button`
    width: 120px;
    height: 40px;
    background-color: #1A73E8;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #1A73E8;
        opacity: 0.8;
    }
`;



function CustomerRating() {
    const [valueHome, setValueHome] = React.useState(2);
    const [valueEdu, setValueEdu] = React.useState(2);
    const [valueDeposit, setValueDeposit] = React.useState(2);
    const [valueInsurance, setValueInsurance] = React.useState(2);
    const [valueBusi, setValueBusi] = React.useState(2);
    
    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
    }, [navigate,params]);

     
      const handleSubmit = async () => {
           let data = {
            homeLoan: valueHome,
            educationalLoan: valueEdu,
            deposits: valueDeposit,
            insurance: valueInsurance,
            businessApi: valueBusi
           }

           RLNDataService.ratingSubmission(data)
            .then(response => {
                Swal.fire({
                    title: 'Thank You!',
                    text: 'Your Rating has been submitted',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate('/customerhome');
            })
            .catch(e => {
                console.log(e);
            });
        };  
        
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
                <h2>Deposits Rating Please...!!</h2>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={valueDeposit}
                    onChange={(event, newValue) => {
                      setValueDeposit(newValue);
                    }}
                  />
                </Box>
                <h2>Educational Rating please...!!</h2>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={valueEdu}
                    onChange={(event, newValue) => {
                      setValueEdu(newValue);
                    }}
                  />
                </Box>
                <h2>Home Loan Rating Please....</h2>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={valueHome}
                    onChange={(event, newValue) => {
                      setValueHome(newValue);
                    }}
                  />
                </Box>
                <h2>Insurance Rating please...!!</h2>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={valueInsurance}
                    onChange={(event, newValue) => {
                      setValueInsurance(newValue);
                    }}
                  />
                </Box>
                <h2>BusinessApi Rating please...!!</h2>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={valueBusi}
                    onChange={(event, newValue) => {
                      setValueBusi(newValue);
                    }}
                  />
                </Box>
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        <div style={{marginTop:"10vh"}}>
            <Footer/>
        </div>
        </>
    )
}

export default CustomerRating;