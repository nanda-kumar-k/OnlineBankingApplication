import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import CustomerImage from "./Images/customer.jpg";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";

const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: auto;
    background-color: white;
    border-radius: 10px;

    .profileImgContainer{
        width: 64vw;
        height: 20vh;
        /* background-color: green; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border-radius: 10px; */
        /* box-shadow: 1px 1px whitesmoke; */
        border-bottom: 1px solid #E6E6E6;
        /* -webkit-box-shadow: 0px 3px  #0000001f; */
        /* position: sticky;
        top: 0;
        z-index: 1; */

        hr{
            width: 28vw;
            height: 2px;
            background-color:  #3498db;
        }
    }
`;

const ProfileImg = styled.img`
    width: 10vw;
    height: 20vh;
    border-radius: 50%;
`;

const TitleContainer = styled.div`
    width: 64vw;
    height: auto;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    hr{
            width: 10vw;
            height: 1px;
            background-color:  #3498db;
    }
    p{
        font-size: 1.2rem;
    }
`;

const OneSpecificInfo = styled.div`
    width: 64vw;
    height: auto;
    border-left: 5px solid #3498db;
    margin-top: 50px;
`

function Profile() {

    const [cpData, setCPData] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        RLNDataService.getCustomerProfile ().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {

                if (response.data.customer !== undefined ) {
                    setCPData(response.data);
                }
                
            }
            else if (response.statusCode === 204) {
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
                    <div className="profileImgContainer">
                        <hr/>
                        <ProfileImg src={CustomerImage} alt="" />
                        <hr/>
                    </div>
                    { cpData  ? <>
                         
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Account Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Account Number</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.customer.accountNumber}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Account Type</p>
                            <hr style={{width:'10vw'}}/>
                            <p>{cpData.customer.accountType}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Personal Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                        <hr style={{width:'17vw'}}/>
                            <p>First Name</p>
                            <hr style={{width:'5vw'}}/>
                            <p>{cpData.customer.firstName}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Last Name</p>
                            <hr style={{width:'5vw'}}/>
                            <p>{cpData.customer.lastName}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'7vw'}}/>
                            <p>Date Of Birth</p>
                            <hr style={{width:'20vw'}}/>
                            <p>{cpData.dob}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>Gender</p>
                            <hr style={{width:'20vw'}}/>
                            <p>{cpData.gender}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Marital Status</p>
                            <hr style={{width:'15vw'}}/>
                            {cpData.maritalStatus ? <p>Married</p> : <p>Unmarried</p>}
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Contact Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'2vw'}}/>
                            <p>Email Id</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.customer.emailId}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Phone Number</p>
                            <hr style={{width:'25vw'}}/>
                            <p>{cpData.customer.contactNumber}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'8vw'}}/>
                            <p>Address</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.address}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Identification Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>Aadhaar UUID</p>
                            <hr style={{width:'22vw'}}/>
                            <p>{cpData.aadhaarNumber}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'8vw'}}/>
                            <p>Pan Id</p>
                            <hr style={{width:'20vw'}}/>
                            <p>{cpData.panNumber}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Professional Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'6vw'}}/>
                            <p>Organisation Name</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.organisationName}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'12vw'}}/>
                            <p>Designation</p>
                            <hr style={{width:'20vw'}}/>
                            <p>{cpData.designation}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'1vw'}}/>
                            <p>Nature of Employment</p>
                            <hr style={{width:'10vw'}}/>
                            <p>{cpData.natureOfEmployment}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'20vw'}}/>
                            <p>Annual Income</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.annualIncome}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Educational Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'4vw'}}/>
                            <p>Qualification</p>
                            <hr style={{width:'25vw'}}/>
                            <p>{cpData.qualification}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Family Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'9vw'}}/>
                            <p>Father's Name</p>
                            <hr style={{width:'25vw'}}/>
                            <p>{cpData.fatherName}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Father's DOB</p>
                            <hr style={{width:'10vw'}}/>
                            <p>{cpData.fatherDob}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>Mother's Name</p>
                            <hr style={{width:'16vw'}}/>
                            <p>{cpData.motherName}</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'9vw'}}/>
                            <p>Mother's DOB</p>
                            <hr style={{width:'15vw'}}/>
                            <p>{cpData.motherDob}</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    </> : null}
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default Profile;