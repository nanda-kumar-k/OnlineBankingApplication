import manager from './Images/manager.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const MImgCon = styled.div`
    width: 12vw;
    height: 24vh;
    border-radius: 50%;
    margin-left: 0.5vw;
`;

const MImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const MenusList = styled.div`
    width: 13vw;
    height: 5vh;
    display: flex;
    justify-content: left;
    align-items: center;
    /* margin-bottom: 2vh; */
    cursor: pointer;
    color: white;
    /* background-color: #2980b9; */
    font-family: inherit;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    &:hover {
        background-color: #3498db;
        background-color: #2980b9;
    }
   
`;

function ManagerMenu (){
    return (
        <>
        <MImgCon>
            <MImg src={manager} alt=""/>
        </MImgCon>
        
        <NavLink to="/managerdashboard" style={{textDecoration : 'none'}}>
            <MenusList style={{marginTop:'50px'}}>
                <DashboardIcon style={{marginRight: '1vw', height:'20px', marginLeft:'20px'}}/> 
                <p>Dashboard</p>
            </MenusList>
        </NavLink>
        <NavLink to="/mallcustomers" style={{textDecoration : 'none'}}>
            <MenusList style={{marginTop:'15px'}}>
                <SupervisedUserCircleIcon style={{marginRight: '1vw', height:'20px', marginLeft:'20px'}}/> 
                <p>All Customers</p>
            </MenusList>
        </NavLink>
        
        <NavLink to="/macountrequest" style={{textDecoration : 'none'}}>
            <MenusList style={{marginTop:'15px'}}>
                <AdminPanelSettingsIcon style={{marginRight: '1vw', height:'20px', marginLeft:'20px'}}/> 
                <p>Account Request</p>
            </MenusList>
        </NavLink>
        <MenusList style={{marginTop:'15px'}}>
            <NoEncryptionIcon style={{marginRight: '1vw', height:'20px', marginLeft:'20px'}}/> 
            <p>Logout</p>
        </MenusList>
        </>
    )
}

export default ManagerMenu;