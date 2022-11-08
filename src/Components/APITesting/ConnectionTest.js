
import RLNDataService from "../../services/rln.service";
import React from 'react';

function ConnectionTest() {

    const [RLN, setRLN] = React.useState('');

 
    React.useEffect(  () => {
        async function fun() {
        RLNDataService.testconnection()
            .then(response => {
                setRLN(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    fun();
},[])

   

    return (
        <>
            <h1>Connection Test</h1>
        </>
    )
}

export default ConnectionTest;