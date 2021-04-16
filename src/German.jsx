import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Box3 from './Box3';
import germanimg from '../src/Images/german.png';
import japanflag from '../src/Images/japanflag.png';
import germanflag from '../src/Images/germanflag.png';
import AboutL from './AboutL';


const German=()=>{
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='french'>
                    <img src={germanimg} className='frenchclass' />
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
                <div className='learn3'>
                    <h1 className='learn-heading'>Learn German</h1>
                    <p className='learn-german'>Language Zone Dehradun is the best German Language Training Institute in 
Dehradun,Uttarakhand.</p>
                    <p className='learn-french-body'>
Germany one of the most beautiful country and third largest exporter in the world 
(1.21 trillion euros) in goods and services exported in 2016. Germany is the home 
to numerous international corporations and they do direct investment in the 
United States is over ten billion dollars.
German language is widely studied as a foreign language in India as it is one of the 
main cultural languages of the Western world. German is the official language of 
four other countries except Germany are Luxembourg, Switzerland, Liechtenstein 
and Austria. It’s also spoken in many parts of Northern Italy, as well as in the 
French provinces of Alsace and Lorraine.
</p> 

<img src={germanflag} className='gflag'/>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelSgerman'>
                    <h1 className='levelgerman'>LEVEL AND DURATION</h1>
                    
                    <p className='levelp'>
                    These six modules from beginning basic skills of a Language ( A1 Level ) till the end, 
gaining a strong command over the language ( C2 Level ) helps an individual to 
complete the professional course of specific Language.Best German language training course certification in Dehradun uttarakhand.</p>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
        <div className='row'>
                <Box3/>    
        </div>
        </div>




        <div className='container-fluid'>
            <div className='row le'>
                <div className='levelL'>
                    <h1 className='levelLearn'>Examination Parttern of ZERTIFIKAT DEUTSCH 2020</h1>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelbody'>
                    <h1 className='levelLearnbody'><b>About The Institute</b><br/><br/>

                    Language Zone, Dehradun Uttarakhand is a foreign language hub for learning German language in Dehradun Uttarakhand, working in co-operation with Goethe Institut-Max Mueller Bhavan, New Delhi.<br/><br/>

                    German is in great demand in today’s Hi-Tech world. If you are interested in studying, working or settling down in Germany, then the proficiency in this language is your passport.<br/><br/>
                   
                    For professionals wanting to work in multi-nationals, elite schools, top-rated universities or world-class German companies and multi-nationals and practically all the airlines, knowledge of German is the deciding factor to get the job in the teeth of highest competition.<br/><br/>
                    Language Zone provide the best German language training in Dehradun, uttarakhand with the best certified faculties.<br/><br/>
</h1>


<h1 className='levelLearnbody'><b>ABOUT ZERTIFIKAT DEUTSCH EXAMINATION</b><br/><br/>

The Zertifikat Deutsch (ZD) is an internationally recognized exam of German language ability. It tests for a level of ability equivalent to the advance fluent level in the Common European Framework of Reference for Languages (CEFR) scale. Candidates typically need between 300 and 600 hours of instruction in German in order to obtain the necessary fluency to pass the Zertifikat Deutsch exam.<br/><br/>
      
                   
</h1>
<h1 className='levelLearnbody'><b>Examination parttern of ZERTIFIKAT DEUTSCH 2020</b><br/><br/></h1>
<h1 className='levelLearnbody'><b>Reading Comprehension.</b><br/><br/></h1>
<h1 className='levelLearnbody'><b>Listening Comprehension.</b><br/><br/></h1>
<h1 className='levelLearnbody'>
The Zertifikat Deutsch is the result of a joint collaboration between the Goethe Institute, the Österreichisches Sprachdiplom (ÖSD), the Schweizer Erziehungsdirektorenkonferenz (EDK) and WBT Weiterbildungs-Testsysteme gGmbH.<br/><br/>

Dates for Zertifikat Deutsch2020 examination<br/><br/>
Unfortunetly, Zertifikat Deutsch 2020 has been postponed due to COVID-19 . And the further details related to postponed Dates have not been issued by the concerned authorities.<br/><br/>
Details to be uploaded soon, after getting the datesheet from the authorities.<br/><br/>
</h1>




                </div>
            </div>
        </div>



<AboutL/>
<br/>
<br/>
<br/>
        <Footer/>
        </>

    );
};
export default German;