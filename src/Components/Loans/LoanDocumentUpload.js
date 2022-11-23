import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import React from "react";
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


const InputFileContainer = styled.div`
    width: 50ch;
    height: 7.7vh;
    display: flex;
    z-index: 1;
    justify-content:center ;
    align-items: center;
    background-color: white;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    border: solid 0.5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color:rgba(0, 0, 0, 0.6);
    button {
        cursor: pointer;
        background: transparent;
        border: 0;
        margin-right: 10px;
    } 

    button:focus {
        outline: none;
    }

     button img {
        width: 20px;
        height: 20px;
    }
    
    input[type='file'] {
        display: none;
    }
`;

const FImg = styled.img`
    width: 20px;
    height: 20px;
`;

function LoanDocumentUpload() {

    const [file, setFile] = React.useState([]);
    const inputFile = React.useRef(null);
    
    const FhandleChange = (e) => {
        setFile([...file, e.target.files[0]]);
    };  

    const FhandleClick = () => {
        let loanid = localStorage.getItem("loanId");
        let formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        RLNDataService.uploadLoanDocument(loanid, file).then((response) => {
            console.log(response);
        }
        ).catch((error) => {
            console.log(error);
        });
        
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
                        <h2>Loans Documents Upload</h2>
                        <hr/>
                        <InputFileContainer>   
                        <button onClick={() => inputFile.current.click()}>
                            <FImg src="https://www.svgrepo.com/show/12604/paper-clip.svg" />
                        </button>
                        <input type="file" onChange={FhandleChange} ref={inputFile} />
                        <p>Uploaded Files:</p> {file.map((x) => x.name).join(', ')}
                        </InputFileContainer>
                        <button onClick={FhandleClick}>Submit</button>
                    </CHRightContainer>
                </CHRight>
              
            </CHContainer>
        
        </>
    )
}

export default LoanDocumentUpload;