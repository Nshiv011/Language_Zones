import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import spanimg from '../src/Images/span.png';
import sflag from '../src/Images/sflag.png';
import Box from './Box';
import Footer from './Footer';

const Spanish=()=>{
    return(
       <>
       <Navbar/>
       <Navbar2/>
       <div className='container-fluid'>
            <div className='row'>
                <div className='french'>
                    <img src={spanimg} className='frenchclass' />
                    <div className='icon2'>

                <div className='form'>
                <i class="fa fa-wpforms fa-2x"></i>
                </div>

                <div className='whatsapp'>
                <i class="fa fa-whatsapp fa-2x"></i>
                </div>

                <div className='message'>
                <i class="fa fa-envelope fa-2x"></i>
                </div>

            </div>
            
                </div>
                <div className='learn2'>
                    <h1 className='learn-heading'>Learn Spanish</h1>
                    
                    <p className='learn-french-body'>Best Spanish Language Training course for beginner & Advance level in Dehadun, Uttarakhand.
                    </p> 

                    <p className='learn-french-body'>We at Language Zone,Dehradun uttarakhand follow the common European Frame Work (CEF). CEF divides Spanish in 6 levels, these levels are as below describing what the learner is suppose to do in reading, listening, speaking and writing. We provide the best Spanish language training course in Dehradun uttarakhand
                    </p> 

                    <p className='learn-french-body'>Spanish is the 2nd most widely spoken language in the world. With growing business relation between India and Latin America, thus opens more reasons for learning Spanish as it is second widely used language in business world. Spanish is the Official language of more then 20 countries, and the second most spoken language in USA.
                    </p> 
                    <p className='learn-french-body'>
Learning Spanish helps you to understand Portuguese to a large extent.
                    </p> 


<img src={sflag} className='flag2'/>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelSs'>
                    <h1 className='levelS'>LEVEL AND DURATION</h1>
                    <h4 className='levelsh'>Exam Preparation</h4>
                    <p className='levelp'>
We prepare you for Dele Institute Certification, where you are judged on skills like Listening, Writing ,Hearing & Speaking. We have intermediate and final tests after every course based on standard exam pattern.</p>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
        <div className='row'>
                <Box/>    
        </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelSPAN'>
                    <h1 className='levelLearn'>Why Learn Spanish Language at Language Zone, Dehradun</h1>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelbody'>
                    <h1 className='levelLearnbody'>We at Language Zone Dehradun provides the best Spanish Language training program in Dehradun. Language Zone is providing the Spanish language course training program in Dehradun with the best-certified Instructor.<br/><br/>

                    For many English speakers, Spanish is one of the most obvious languages to learn. Especially in the United States, it is often considered the most useful for going about daily life. But we get it: choosing a language to learn is a tough decision. You wouldn’t want to be months into Spanish before realizing that Dutch is your true calling.
<br/><br/>

Spanish is the second most spoken language in the world, and it is the most spoken language in the Americas. It’s the official (or co-official) language in Spain, most countries in Central and South America, and several Caribbean countries. It’s a useful language to know when doing business with Spanish or Latin American firms, and a great way to strengthen your resume and improve your career prospects. In the United States alone there are over 50 million people who speak Spanish as their native or second language.<br/><br/>



</h1>
                </div>
            </div>
        </div>

<Footer/>
       </>

    );
};
export default Spanish;