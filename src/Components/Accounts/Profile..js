import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import CustomerImage from "./Images/customer.jpg";
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
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Account Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Account Number</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Account Type</p>
                            <hr style={{width:'10vw'}}/>
                            <p>Nanda Kumar K</p>
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
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Last Name</p>
                            <hr style={{width:'5vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'7vw'}}/>
                            <p>Date Of Birth</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'3vw'}}/>
                            <p>Aadhaar UUID</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>Gender</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Marital Status</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
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
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Phone Number</p>
                            <hr style={{width:'25vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'8vw'}}/>
                            <p>Address</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>City</p>
                            <hr style={{width:'25vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>State</p>
                            <hr style={{width:'5vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'10vw'}}/>
                            <p>Country</p>
                            <hr style={{width:'25vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'3vw'}}/>
                            <p>Pincode</p>
                            <hr style={{width:'25vw'}}/>
                            <p>Nanda Kumar K</p>
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
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'8vw'}}/>
                            <p>Pan Id</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'4vw'}}/>
                            <p>Voter Id</p>
                            <hr style={{width:'8vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                    <OneSpecificInfo>
                        <TitleContainer>
                            <hr/>
                            <h2>Professional Details</h2>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'2vw'}}/>
                            <p>Occupation Type</p>
                            <hr style={{width:'25vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'6vw'}}/>
                            <p>Organisation Type</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'12vw'}}/>
                            <p>Designation</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'1vw'}}/>
                            <p>Nature of Employment</p>
                            <hr style={{width:'10vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'4vw'}}/>
                            <p>Nature of Business</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'20vw'}}/>
                            <p>Annual Income</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'8vw'}}/>
                            <p>Net Worth</p>
                            <hr style={{width:'21vw'}}/>
                            <p>Nanda Kumar K</p>
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
                            <p>Nanda Kumar K</p>
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
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'5vw'}}/>
                            <p>Father's DOB</p>
                            <hr style={{width:'10vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'15vw'}}/>
                            <p>Mother's Name</p>
                            <hr style={{width:'16vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'9vw'}}/>
                            <p>Mother's DOB</p>
                            <hr style={{width:'15vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'2vw'}}/>
                            <p>Guardian Name</p>
                            <hr style={{width:'18vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                        <TitleContainer>
                            <hr style={{width:'17vw'}}/>
                            <p>Guardian DOB</p>
                            <hr style={{width:'20vw'}}/>
                            <p>Nanda Kumar K</p>
                        </TitleContainer>
                    </OneSpecificInfo>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default Profile;