import background from './Images/background.png';
import styled from 'styled-components';


export const SliderContainer = styled.div`
background-image: url(${background});
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: center;
/* position: absolute; */
width: 100%;
height: 70vh;
display: flex;
`;

export const MLeftMenu = styled.div`
    width: 13vw;
    height: 77vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #3498db;
    padding: 10vh 1vw 2vh 1vw;
    /* display: flex; */
    justify-content: center;
    /* flex-wrap: wrap; */
    overflow: scroll;

`;

export const MRightMenu = styled.div`
width: 85vw;
height: 70vh;
/* background-color: #F5F5F5; */
`;