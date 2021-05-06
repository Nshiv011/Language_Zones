import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Box2 from './Box2';
import japanimg from '../src/Images/japan.png';
import japanflag from '../src/Images/japanflag.png';
import jap from '../src/Images/jap.png';
import Icon from "./Icon";



const Japan=()=>{
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <div className='container-fluid'>
            <div className='row jp'>
                <div className='french'>

                    <img src={japanimg} className='japanclass' />
                    <Icon/>
            
                </div>
                <div className='learn1'>
                <img src={jap} className='flag'/>
                    <h1 className='learn-heading'>Learn French</h1>
                    <p className='learn-french'>Learn French with Language Zone Dehradun Uttarakhand</p>
                    <p className='learn-french-body'>

French is spoken as a first language in France, Haiti, Monaco and in parts of Switzerland, Belgium, Canada, and the US (notably in parts of Louisiana and New England region), and by various communities elsewhere.
</p> 
<p className='learn-duration'>Duration  : 3-9 Months</p>

                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='level'>
                    <h1 className='levelD'>LEVEL AND DURATION</h1>
                </div>
            </div>
        </div>
<div className='container-fluid'>
<div className='row'>
        <Box2/>    
</div>
</div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='levelL'>
                    <h1 className='levelLearn'>Why Choose Language Zone dehradun for Japanese Language 
Training Course</h1>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelbody'>
                    <h1 className='levelLearnbody'>We at Language Zone provide the Best Japanese language Training course program in Dehadun,uttarakhand.We help candidates to prepare for the JLPT Exam in dehradun. We provide the japanese language program from the industry expert mentor. Our Instructors are certifiec in JLPT level.<br/><br/>

The JLPT has five levels: N1, N2, N3, N4 and N5. The easiest level is N5 and the most difficult level is N1.<br/><br/>

N4 and N5 measure the level of understanding of basic Japanese mainly learned in class. N1and N2 measure the level of understanding of Japanese used in a broad range of scenes in actual everyday life. N3 is a bridging level between N1/N2 and N4/N5.<br/><br/>


</h1>
                </div>
            </div>
        </div>




        <Footer/>
        </>

    );
};
export default Japan;