import React from 'react';
import country from './Images/OUIU.png' 
const Country=()=>{
    return (
       <>
<div className="container-fluid">
    <div className="row">
        <div className="country">
            <img src={country} className="country"/>
        </div>
    </div>
</div>
</>
    );
};
export default Country;