import React from 'react';
import course from '../src/Images/girl.png';
const Course=()=>{
    return (
<>
<div className="Container-fluid">
<div className="row">
        <div className='course'>
            <img src={course} className="girl"/>
        </div>
</div>
</div>

</>
    );
};
export default Course;