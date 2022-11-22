import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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

function SpecificDeposit(props) {

    const [alldeposits, setAlldeposits] = React.useState('');
    const [noData, setNoData] = React.useState(false);
    const parms = useParams();
    const navigate = useNavigate();
    // const fetchDataFun = () => {
    //     navigate('/login');
    // }
    React.useEffect(() => {
        RLNDataService.getAllDeposits().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setAlldeposits(response.data);
            }
            else if (response.statusCode === 204) {
                setNoData(true);
                // navigate('/login');
            }
        })
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
                    <h2>All Fixed Deposits</h2>
                    <hr/>
                    
                        
             
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )

}

export default SpecificDeposit;