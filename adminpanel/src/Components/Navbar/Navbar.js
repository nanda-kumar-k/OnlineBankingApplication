import styled from 'styled-components';
import rlnlogo from './Images/newlogo.png';
import navimg from './Images/finnav.png';
import { useParams } from 'react-router-dom';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';
const NavContainer = styled.div`
    height: 11vh;
    width: 100vh;
    position: relative;
    /* position: fixed; */
    top: 0;
    left: 0;
    z-index: 1;
    z-index: 100;
    
`;

const NavLogoContainer = styled.div`
    position: absolute;
    top: 4vh;
    left: 0;
    height: 10vh;
    width: 30vw;
    /* background-color: #000000; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    img{
        height: 8vh;
        width: 5vw;
        margin-top: -60px;
    }
    h2{
        margin-left: 0px;
        color: white;
        margin-top: -40px;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
`;

const NavTop = styled.div`
    background-color: #3498db;
    height: 4vh;
    width: 100vw;
`;

const NavMiddle = styled.div`
    background-color: black;
    height: 6vh;
    width: 100vw;
    display: flex;

    .NavLeft {
        height: 6vh;
        width: 30vw;
        background-color: #3498db;
    }
    .NavMiddle {
        height: 6vh;
        width: 5vw;
        background-color: green;
        img{
            height: 6vh;
            width: 5vw;
        }
    }
    .NavRight {
        height: 6vh;
        width: 65vw;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        a {
            text-decoration: none;
            color: black; 
        }

        .RouteLink {
            height: 5vh;
            /* background-color: #3498db; */
            margin-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            color:#3498db;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            margin-bottom: -2vh;
            &:hover{
                background-color: #3498db;
                color: white;
            }
            p {
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 1.2rem;
            }
        }
    }
`;

const NavBottom = styled.div`
    background-color: white;
    height: 2vh;
    width: 100vw;
    border-bottom: 1px solid black;
    box-shadow: 0px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
    box-shadow: 6px 3px 6px #0000001f;
`;

function Navbar() {
    const navigate = useNavigate();
    const [admin , setAdmin] = React.useState(false);
    const parms = useParams();
    React.useEffect(() => {
        const superadmin = JSON.parse(localStorage.getItem("superadmin"));
        const manager = JSON.parse(localStorage.getItem("manager"));
        const employee = JSON.parse(localStorage.getItem("employee"));
        if(superadmin || manager || employee){
            setAdmin(true);
        }
    }, [admin, parms]);

    const handleLogout = () => {
        localStorage.clear();
        setAdmin(false);
        navigate("/");
    }

    return(
        <>
            <NavContainer>
                <NavTop/>
                <NavMiddle>
                    <div className='NavLeft'>
                    </div>
                    <div className='NavMiddle'>
                        <img src={navimg} alt='navimg'/>
                    </div>
                    <div className='NavRight'>
                        <div className='RouteLink'  style={{width:'12vw', marginLeft:"10vw"}} ><PeopleIcon/><p style={{marginLeft:'5px'}} onClick={()=>{navigate('/employeelogin')}}>Employee Login</p></div>
                        <div className='RouteLink'  style={{width:'12vw'}} ><PeopleIcon/><p style={{marginLeft:'5px'}} onClick={()=>{navigate('/managerlogin')}}>Manager Login</p></div>
                        <div className='RouteLink'  style={{width:'14vw'}} ><AccountCircleIcon/><p style={{marginLeft:'5px'}} onClick={()=>{navigate('/superadminlogin')}} >Super Admin Login</p></div>
                        {admin ? 
                        <><div className='RouteLink'  style={{width:'7vw', border: '1px solid #3498db' }} onClick={handleLogout} ><AdminPanelSettingsIcon/><p style={{marginLeft:'5px'}}>Logout</p></div></>
                        : <></>}
                    </div>
                </NavMiddle>
                <NavBottom/>
                <NavLogoContainer>
                    <img src={rlnlogo} alt='logo'/>
                    <h2>RLN ONLINE BANK</h2>
                </NavLogoContainer>
            </NavContainer>
        </>
    )
}

export default Navbar;
