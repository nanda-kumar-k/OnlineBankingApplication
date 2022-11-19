import styled from "styled-components";

const DevelopmentErrorContainer = styled.div`
    background-color: rgb(0,0,0 );
    color: #721c24;
    padding: 2.5vh 1vw;
    width: 98vw;
    height: 84vh;

    hr {
        border: 1px solid #721c24;
        margin-bottom: 2vh;    
    }
`;


function DevelopmentError(props) {
    return (
       <>
         <DevelopmentErrorContainer>
            <h1>Development Error</h1>
            <hr/>
            <h2> !!! Sorry, this page is under development. Please try again later.</h2>

         </DevelopmentErrorContainer>
       </>
    );
}

export default DevelopmentError;