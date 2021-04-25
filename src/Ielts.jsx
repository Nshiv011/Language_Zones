import React from 'react';
import ieltsimg from './Images/ieltsimg.png'
import ieltsflag from './Images/ieltsflag.png'
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import data1 from '../src/Images/data1.png'
import data2 from '../src/Images/data2.png'

const Ielts=(props)=>{
    return(
<>
        <Navbar/>
        <Navbar2/>


        <div className='container-fluid'>
            <div className='row'>
                <div className='ielts'>
                    <img src={ieltsimg} className='frenchclass' />
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
                <div className='learn110'>
                <img src={ieltsflag} className='iflag'/>
                    <h1 className='learn-heading2'><b>IELTS</b> </h1>
                   
                    <p className='learn-ielts-body'>


                    We at Language zone provides the best training course for IELTS in Dehradun uttarakhand region. We have internationally accrediated trainers who work with us and provide the best quality training program on IELTS in dehradun. Language Zone dehradun is one of the Finest Training company to provide all the foreign langauge courses in dehradun.

</p> 
<p className='learn-duration'>Duration  : 1-2 Months</p>

                </div>
            </div>
        </div>










        <div className='container-fluid'>
            <div className='row'>
                <div className='levelL'>
                    <h1 className='levelLearn'>Why Learn IELTS at Language Zone, Dehradun</h1>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelbody'>
                    <h1 className='levelLearnbody'>
We at Language Zone dehradun provides the best IELTS Course training program in Dehradun. Language Zone is providing the IELTS training program in Dehradun with the best certified Instructor with a guaranteed Band7 IELTS Score.We also have inhouse IELTS Test dehradun in dehradun.<br/><br/>

International English Language Testing System or IELTS is an English language proficiency exam that measures the language ability of candidates willing to study or work in a country where English is the language of communication. The exam mainly assesses the ability of test-takers to communicate in the four basic language skills – listening, reading, speaking, and writing. Available world-wide in more than 110 countries including Australia, Canada, UK and the US, IELTS is jointly owned and administered by the University of Cambridge – Local Examination Syndicate, The British Council and the IDP Education Australia<br/><br/>

Apart from the academic purposes, many government agencies, scholarship programs, and certification agencies use IELTS scores to evaluate English pro¬ciency. You can take IELTS with the British Council up to once a week (four times a month). The British Council Global Schedule for global test dates is 48 days per year. However, if a candidate is not satis¬ed with his scores he can take the exam again after three months from the date of the first exam.<br/><br/>



</h1>
                </div>
            </div>
        </div>





        <div className="container-fluid ">
            <div className="row">
                <div className="upper12">

                </div>
                <div className="lower121">
                    <div className='content'>
                        
                        <p  className='abt120 test12' ><b><p className="test">TEST PATTERN & FORMAT</p></b>
                        The IELTS test provides scores in four skill areas - Reading, Listening, Speaking and Writing - along with the total score. The total score is the sum of the scores in the four skill areas.<br/><br/>

IELTS is available in two test formats: Academic or General. Students need to take the Academic test and other applicants who need IELTS results for Visa or scholarship purposes need to take General test. Here we cover the Academic test pattern. The total test duration covering all four sections of the test is 2 hours and 45 minutes, as shown in the table hereThe IELTS test provides scores in four skill areas - Reading, Listening, Speaking and Writing - along with the total score. The total score is the sum of the scores in the four skill areas.

IELTS is available in two test formats: Academic or General. Students need to take the Academic test and other applicants who need IELTS results for Visa or scholarship purposes need to take General test. Here we cover the Academic test pattern. The total test duration covering all four sections of the test is 2 hours and 45 minutes, as shown in the table here

</p>
                    </div>
                </div>
            </div>
        </div>



<div className="container-fluid">
    <div className="row">
        <div className="data1">
            <img src={data1} className="data1img"/>
        </div>
    </div>
</div>

<div className="container-fluid">
    <div className="row">
        <div className="data2">
            <img src={data2} className='data2img' />
        </div>
    </div>
</div>


        
        <Footer/>
</>
    );
};
export default Ielts;
