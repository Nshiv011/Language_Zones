import React from 'react';

const Box=()=>{
    return(
        <>
        <div className='container-fluid'>
            
                <div className='row boxes2'>
                <div className='col-lg-2 '>
                <div className='yellow'>
                    <h1 className='a1'> LEVEL A1</h1>
                </div>
                </div>
                
                <div className='col-lg-2 '>
                <div className='red'>
                    <h1 className='a1'> LEVEL A2</h1>
                </div>
                </div>

                <div className='col-lg-2 '>
                <div className='purple'>
                    <h1 className='a1'> LEVEL B1</h1>
                </div>
                </div>

                <div className='col-lg-2 '>
                <div className='blue'>
                    <h1 className='a1'> LEVEL B2</h1>
                </div>
                </div>


            </div>
        </div>

        
        </>
    );
};

export default Box;