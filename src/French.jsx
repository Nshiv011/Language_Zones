import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import frenchimg from '../src/Images/french.png';
import flag from '../src/Images/flaf.png';
import Box from './Box';
import Footer from './Footer';

const French=()=>{
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='french'>
                    <img src={frenchimg} className='frenchclass' />
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
                <div className='learn22'>
                    <h1 className='learn-heading'>Learn French</h1>
                    <p className='learn-french'>Learn French with Language Zone Dehradun Uttarakhand</p>
                    <p className='learn-french-body'>

French is spoken as a first language in France, Haiti, Monaco and in parts of Switzerland, Belgium, Canada, and the US (notably in parts of Louisiana and New England region), and by various communities elsewhere.
</p> 
<p className='learn-duration'>Duration  : 3-9 Months</p>
<img src={flag} className='flag'/>
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
        <Box/>    
</div>
</div>

        <div className='container-fluid'>
            <div className='row le'>
                <div className='levelL'>
                    <h1 className='levelLearn'>Why Learn French Language at Language Zone, Dehradun</h1>
                </div>
            </div>
        </div>


        <div className='container-fluid'>
            <div className='row'>
                <div className='levelbody'>
                    <h1 className='levelLearnbody'>We at Language Zone dehradun provides the best Language training program in dehradun. Language Zone is providing the French language course training program in dehradun with the best certified Instructor.<br/><br/>

The French language is spoken on five continents. It has official-language status in 29 countries, including Belgium, Haiti, Luxembourg, Switzerland, Monaco, Niger, Senegal, Togo, Canada, Mali and more. It’s one of six official languages of the UN.<br/><br/>

If the French language were a credit card, it’d be MasterCard: inherently valuable and almost universally accepted. No matter what happens in the future, no matter what was ever going to happen, a language with that much influence and that much spread is in no danger of disappearing within the foreseeable future.<br/><br/>

If you are seriously considering the international job market, adding French to your English speaking abilities will boost your chances of landing a lucrative job.

</h1>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
};
export default French;