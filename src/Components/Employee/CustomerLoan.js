import {SliderContainer, MLeftMenu, MRightMenu} from './EDashboard';
import styled from 'styled-components';
import EmployeeMenu from './EmployeeMenu';

const CHRightContainer = styled.div`
    padding: 2vh 10vw;
    width: 65vw;
    height: 85vh;
    overflow: scroll;
    box-shadow: 1px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;

    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* position: sticky;
        top: 0vh; */
    }
    #tophr{
        /* border: 1px solid #E6E6E6; */
        margin-left: -5vw;
        width: 75vw;
        /* position: sticky;
        top: 5vh; */
    }
`;


const OneSpecificLoan = styled.div`
    width: 63vw;
    height: auto;
    border-collapse: collapse;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1vh 1vw;
    border-collapse: collapse;
    background-color: white;
    margin: 1vh 0vh;
    box-shadow: 1px 1px whitesmoke;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
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
    h2{
        padding: 0px;
        margin: 0px;
    }
`;

const OneSpecificInfo = styled.div`
    width: 64vw;
    height: auto;
    border-left: 5px solid #3498db;
    /* margin-top: 50px; */
`
const OneButtonContainer = styled.div`
    width: 64vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    button{
        width: 10vw;
        height: 5vh;    
        border-radius: 5px;
        border: none;
        background-color: #3498db;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin: 0px 10px;
    }

`;

function CustomerLoan() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <EmployeeMenu/>
        </MLeftMenu>
        <MRightMenu>
        <CHRightContainer>
            <h2>Account Id Loans</h2>
            <hr id='tophr'/>
            <OneSpecificLoan>
                <OneSpecificInfo>
                    <TitleContainer style={{marginTop:'0px'}}>
                        <hr style={{width:'10vw'}}/>
                        <h2>Loan Id</h2>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Loan Type</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'10vw'}}/>
                        <p>Loan Amount</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'15vw'}}/>
                        <p>Account Type</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Loan Date</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'3vw'}}/>
                        <p>Home Address</p>
                        <hr style={{width:'5vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'20vw'}}/>
                        <p>Close Date</p>
                        <hr style={{width:'10vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Nominee Account Id</p>
                        <hr style={{width:'10vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'10vw'}}/>
                        <p>Nominee Name</p>
                        <hr style={{width:'18vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Document</p>
                        <hr style={{width:'18vw'}}/>
                        <p>Click Here</p>
                    </TitleContainer>
                </OneSpecificInfo>
                <OneButtonContainer>
                    <button>Approve</button>
                    <button>Reject</button>
                </OneButtonContainer>
            </OneSpecificLoan>
            <OneSpecificLoan>
                <OneSpecificInfo>
                    <TitleContainer style={{marginTop:'0px'}}>
                        <hr style={{width:'10vw'}}/>
                        <h2>Loan Id</h2>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Loan Type</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'10vw'}}/>
                        <p>Loan Amount</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'15vw'}}/>
                        <p>Account Type</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Loan Date</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'8vw'}}/>
                        <p>Collage Name</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'15vw'}}/>
                        <p>Stream</p>
                        <hr style={{width:'10vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'15vw'}}/>
                        <p>Year Of Study</p>
                        <hr style={{width:'15vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'3vw'}}/>
                        <p>Collage Address</p>
                        <hr style={{width:'5vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'20vw'}}/>
                        <p>Close Date</p>
                        <hr style={{width:'10vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Nominee Account Id</p>
                        <hr style={{width:'10vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'10vw'}}/>
                        <p>Nominee Name</p>
                        <hr style={{width:'18vw'}}/>
                        <p>Nanda Kumar K</p>
                    </TitleContainer>
                    <TitleContainer>
                        <hr style={{width:'5vw'}}/>
                        <p>Document</p>
                        <hr style={{width:'18vw'}}/>
                        <p>Click Here</p>
                    </TitleContainer>
                </OneSpecificInfo>
                <OneButtonContainer>
                    <button>Approve</button>
                    <button>Reject</button>
                </OneButtonContainer>
            </OneSpecificLoan>
        </CHRightContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default CustomerLoan;