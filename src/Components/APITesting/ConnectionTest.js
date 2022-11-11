
import RLNDataService from "../../services/rln.customer.service";
import React from 'react';

function ConnectionTest() {

    // const [RLN, setRLN] = React.useState('');
    React.useEffect(  () => {
        async function fun() {
        await RLNDataService.checkUsernameAvailability('nandau')
            .then(response => {
                // setRLN(response.data);
                console.log(response.data.statusCode);
                // console.log(RLN);
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