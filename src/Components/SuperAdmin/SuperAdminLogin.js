// Super Admin Login Component




import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/SuperAdminActions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2980b9;
    background-image: linear-gradient(315deg, #2980b9 0%, #6dd5fa 74%);
`;

const LoginBox = styled.div`
    width: 30vw;
    height: 60vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginTitle = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    font-size: 2.5vw;
    color: #2980b9;
    color: #6dd5fa;
`;

const LoginInput = styled.input`
    width: 80%;
    height: 5vh;
    border: none;
    border-bottom: 1px solid #2980b9;
    border-bottom: 1px solid #6dd5fa;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    font-size: 1.5vw;
    color: #2980b9;
    color: #6dd5fa;
    margin-bottom: 2vh;
`;

const LoginButton = styled.button`
    width: 80%;
    height: 5vh;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #2980b9;
    background-image: linear-gradient(315deg, #2980b9 0%, #6dd5fa 74%);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    font-size: 1.5vw;
    color: white;
    cursor: pointer;
`;

const LoginLink = styled(NavLink)`
    width: 80%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    font-size: 1.5vw;
    color: #2980b9;
    color: #6dd5fa;
    text-decoration: none;
    cursor: pointer;
`;

class SuperAdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {
        if (this.state.username === '' || this.state.password === '') {
            toast.error('Please enter all the fields', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            this.props.login(this.state.username, this.state.password);
        }
    }

    render() {
        if (this.props.superAdminLoginStatus === 'SUCCESS') {
            return <Redirect to='/superadmin/dashboard' />
        }
        return (
            <LoginContainer>
                <LoginBox>
                    <LoginTitle>Super Admin Login</LoginTitle>
                    <LoginInput type='text' placeholder='Username' onChange={this.handleUsernameChange} />
                    <LoginInput type='password' placeholder='Password' onChange={this.handlePasswordChange} />
                    <LoginButton onClick={this.handleLogin}>Login</LoginButton>
                    <LoginLink to='/'>Back to Home</LoginLink>
                </LoginBox>
                <ToastContainer />
            </LoginContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        superAdminLoginStatus: state.superAdminLoginStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminLogin);

