import styled from 'styled-components';
import background from './Images/background.png'
// import { NavLink } from 'react-router-dom';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';


const SliderContainer = styled.div`
    margin-top: 11vh;
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70vh;
`;


const OuterContainer = styled.div`
    width: 70vw;
    height: 82vh;
    padding: 5vh 15vw 0vh 15vw;
    /* background-color: yellow; */
`;

const TitleContainer = styled.div`
    width: 70vw;
    height: 10vh;
    /* background-color: red; */
    display: flex;
    position: relative;
    justify-content: space-around;

    hr{
        position: absolute;
        top: 3.5vh;
        left: 5vw;
        width: 60vw;
        /* height: 1px; */
        background-color: #E6E6E6;

    }
`;

const SingleTitleInfo = styled.div`
    width: 10vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    z-index: 2;
   

    .numcon{
        width: 2vw;
        height: 4vh;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #active {
        background-color: #3498db;
        width: 2.5vw;
        height: 5vh;
    }
`;

const AllInputContainer = styled.div`
    width: 66vw;
    height: 66vh;
    margin-top: 2vh;
    background-color: white;
    display: flex;
    padding: 2vh 2vw;
`;

const InputContainer = styled.div`
    /* width: 43vw;
    height: 66vh;
    background-color: white; */

    width: 38vw;
    height: 62vh;
    /* background-color: white; */

    padding: 4vh 2vw 0vh 2vw;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    h2{
        font-family: "Lato-Bold" !important;
        color: #4a4a4a;
        font-size: 1.5rem;
        margin-bottom: 2vh;
    }
    #but {
        width: 150px;
        margin-left: 0vw;
        margin-top: 8vh;
    }
    #errormsg {
        color: red;
        font-size: 1rem;
        margin-top: 1vh;
        width: 40ch;
        text-align:center ;
    }
`;

const NotePointContainer = styled.div`
    width: 22vw;
    height: 62vh;
    padding: 4vh 2vw 0vh 0vw;
    li {
        margin-left: 20px;
    }
    p{
        font-family: "Lato-Bold" !important;
        color: #4a4a4a;
        font-size: 1rem;
        margin-bottom: 1vh;
        text-align: justify !important;
    }
    /* background-color: blue; */
`;

function EducationalRegister() {
    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        qualification: '',
    });
    React.useEffect(() => {
        let find = JSON.parse(localStorage.getItem("customerRegister"));
        if (find) {
            setValues({
                qualification: find.qualification,
            })
        }
    }, []);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.qualification)  {
            let obj = JSON.parse(localStorage.getItem("customerRegister"));;
            obj.qualification = values.qualification;
            localStorage.setItem("customerRegister", JSON.stringify(obj));
            navigate('/family');
        }
        else {
            setErrorMessages("Please fill all the fields");
        }
    };

    return (
        <>
            <SliderContainer>
                <OuterContainer>
                    <TitleContainer>
                        <hr/>
                        <SingleTitleInfo>
                            <div className='numcon' >
                               1
                            </div>
                            <p>Contact Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                2
                            </div>
                            <p>Personal Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                3
                            </div>
                            <p>Identification Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                4
                            </div>
                            <p>Professional Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}} >
                            <div className='numcon' id='active'>
                                5
                            </div>
                            <p>Educational Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                6
                            </div>
                            <p>Family Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                7
                            </div>
                            <p>Set Password</p>
                        </SingleTitleInfo>
                    </TitleContainer>

                    <AllInputContainer>
                        <InputContainer>
                        <h2>Enter Educational Details</h2>
                        <br/>

                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Highest Qualification</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.qualification || ''}
                            onChange={handleChange('qualification')}
                            />
                        </FormControl>
                        <p id='errormsg'>{errorMessages}</p>
                        <Stack spacing={2} direction="row">
                            <NavLink to="/professional">
                                <Button variant="outlined" id="but" >Back</Button>
                            </NavLink>
                            <Button variant="outlined" id="but" style={{marginLeft:'50px'}} onClick={handleSubmit} >Next</Button>
                        </Stack>
                        </InputContainer>
                        <NotePointContainer>
                            <p style={{fontSize:'1.3rem'}}><b>Please Note</b></p>
                            <ul>
                                <li><p>Please enter your highest  gradation with all the letters are completely specified</p></li>
                                <li><p>Enter complete details about your higher education</p></li>
                            </ul>                          
                        </NotePointContainer>
                    </AllInputContainer>
                </OuterContainer>
            </SliderContainer>
            <div style={{marginTop:"15vh"}}>
                <Footer/>
            </div>
        </>
    )
}

export default EducationalRegister;