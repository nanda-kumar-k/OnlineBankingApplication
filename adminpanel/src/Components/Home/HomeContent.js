import styled from "styled-components"
import rlnobt from "./Images/rlnobt.png";
import React from "react";
// import logo from "./Images/logo.png";
const HomeContainer = styled.div`
    margin-top: 100vh;
    width: 90vw;
    height: auto;
    padding: 0vh 5vw;
`;

const AboutRLN = styled.div`
    padding-top: 5vh;
    width: 90vw;
    height: 60vh;
    background-color: #f5f5f5;

    #mainheading {
        text-align: center;
        font-size: 2rem;
        /* font-weight: 600; */
        color: #000;
        font-family: 'Lato', sans-serif;
    }
`;

const AboutRLNContent = styled.div`
    width: 80vw;
    height: auto;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const AboutRLNContentLeft = styled.div`
    width: 30vw;
    height: auto;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    color: #707070 !important;

    #abt {
        font-size: 1rem;
        margin-top: 2vh;
    }
`;

const AboutRLNContentRight = styled.div`
    width: 50vw;
    height: auto;
    padding: 0vh 0vw 0vh 5vw;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    text-align: justify;
    #abt {
        
        margin-top: 4vh;
        margin-bottom: 2vh;
        color: #707070 !important;
    }
    p{
        /* color: #707070 !important; */
        font-size: 1.1rem;
        margin-bottom: 10px;
        justify-content: justify;
    }
`;

const ObjectivesContainer = styled.div`
    margin-top: 10vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${rlnobt});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column; 
`;

const ObjectivesContentTop = styled.div`
    padding: 5vh 5vw 0vh 5vw;
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3rem;
        color: #000;
        margin-bottom: 30px;
    }
`;


function HomeContent() {

    return(
        <>
        <HomeContainer>
            <AboutRLN>
                <h1 id="mainheading">RLN Bank</h1>
                <h1 id="mainheading">Everything you need, Everything is here.</h1>
                <AboutRLNContent>
                    <AboutRLNContentLeft>
                        <h2>"&lrm;Banking that's ethical"</h2>
                        <img src="https://www.bandhanbank.com/sites/default/files/2020-12/Banking%20thats%20ethical_0.png" alt="Banking that's ethical" />
                        <p id="abt">At RLN Bank, we believe in banking that's ethical. We are committed to providing you with a banking experience that is transparent, fair and ethical.</p>
                    </AboutRLNContentLeft>
                    <AboutRLNContentRight>
                        <h2 id="abt">About RLN Bank</h2>
                        <p>RLN BANK is an industry that handles online banking and other financial transactions for individual consumers and businesses alike. Bank provides the liquidity needed for families and businesses to invest in the future.
                        RLN Bank is a lawful organisation that accepts deposits that can be withdrawn on demand.This is an  institutions that help the public in the management of their finances, public deposit their savings in banks with the assurance to withdraw money from the deposits whenever required.</p>
                        <p>RLN Bank also lend and recycle excess money within the financial system and create, distribute, and trade securities.
                        RLN Bank have several ways of making money besides pocketing the difference (or spread) between the interest they pay on deposits and borrowed money and the interest they collect from borrowers or securities they hold.</p>
                    </AboutRLNContentRight>
                </AboutRLNContent>
                <ObjectivesContainer>
                    <ObjectivesContentTop>
                        <h2 id="tit">"Objectives of RLN Bank"</h2>
                        <p id="maintit">Everything you need, Everything is here.</p>
                        <p>1. To establish as an institution for maximizing profits and to conduct overall economic activities.</p>
                        <p>2. To collect savings or idle money from the public at a lower rate of interests and lend these public money at a higher rate of interests.</p>
                        <p>3. To create propensity of savings amongst the people.</p>
                        <p>4. To motivate people for investing money with a view to bringing solvency in them .</p>
                        <p>5. To create money against money as an alternative for enhancing supply of money.</p>
                        <p>6. To build up capital through savings.</p>
                        <p>7. To expedite investments.</p>
                        <p>8. To extend services to the customers</p>
                        <p>9. Acceptance of deposits from the public</p>
                        <p>10.Provide demand withdrawal facility</p>
                        <p>11.Lending facility</p>
                        <p>12.Transfer of funds</p>
                        <p>13.Issue of drafts</p>
                        <p>14.Provide safe custody of valuables</p>
                        <p>15.Provide safe custody of securities</p>
                        <p>16.Provide safe custody of documents</p>
                        <p>17.Provide safe custody of cash</p>
                        <p>18.Provide safe custody of insurance policies</p>
                        </ObjectivesContentTop>
                </ObjectivesContainer>
                
            </AboutRLN>
           
        </HomeContainer>
        </>
    )
}

export default HomeContent;


// <FinalBottom>
//                     <FinalBottomImg src={logo} alt="Final Bottom" />
//                     <h1>RLN BANK</h1>
//                     <h2>Everything you need, Everything is here.</h2>
//                     <hr/>
//                 </FinalBottom>