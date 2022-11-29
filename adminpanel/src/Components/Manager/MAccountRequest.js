import {MLeftMenu} from './MDashboard';
import ManagerMenu from './ManagerMenu';
import styled from 'styled-components';
import background from './Images/background.png';
// import MAllCustomerData from './MAllCustomerData';
const SliderContainer = styled.div`
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    /* position: absolute; */
    width: 100%;
    height: 70vh;
    display: flex;
`;

const MRightMenu = styled.div`
    width: 75vw;
    height: 73vh;
    /* background-color: green; */
    padding: 8vh 5vw;
    /* background-color: black; */
    overflow-y: scroll;
`;


function MAccountRequest() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <ManagerMenu/>
        </MLeftMenu>
        <MRightMenu>
            
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default MAccountRequest;