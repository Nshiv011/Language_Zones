import React from 'react';
import { Form } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please fill the form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <div className="container-fluid">
            <div className="row">
                <div className="formp" id="mymodal">
<form action="action_page.php" />
  <div className="container">

    <label for="name">     </label>
    <input type="text" placeholder="Enter Name" name="name" required/>

    <label for="psw">       </label>
    <input type="email" placeholder="Enter Email" name="mail" required/>

    <label for="course"> -------  Select Course  -------   </label><br/>

    <input type="radio" id="German Language" name="German Language" value="German Language"/>
  <label for="German Language">German Language</label><br/> 
  <input type="radio" id="French Language" name="French Language" value="French Language"/>
  <label for="French Language">French Language</label><br/>
  <input type="radio" id="Spanish Language" name="gender" value="Spanish Language"/>
  <label for="Spanish Language">Spanish Language</label><br/>
  <input type="radio" id="Japanese Language" name="gender" value="Japanese Language"/>
  <label for="Japanese Language">Japanese Language</label><br/>
  <input type="radio" id="IELTS" name="gender" value="IELTS"/>
  <label for="IELTS">IELTS</label><br/>
    <div class="clearfix">
<button type="submit" class="signupbtn">SUBMIT </button>    
<button type="button" class="cancelbtn"> CANCLE</button>
      
    </div>
  </div>
                </div>
            </div>
        </div>




        </Modal.Body>
        
      </Modal>
    );
  }

const Icon=()=>{
    const [modalShow, setModalShow] = React.useState(false);
    return (
<>
<div className='icon'>

                <div className='form '>
                
                <i class="fa fa-wpforms fa-2x" onClick={() => setModalShow(true)} ></i>
                <MyVerticallyCenteredModal
        show={modalShow} onHide={() => setModalShow(false)}/>
                </div>
                

                <div className='whatsapp'>
                <a href="https://api.whatsapp.com/send/?phone=918979544473&text&app_absent=0">
                <i class="fa fa-whatsapp fa-2x"></i>
                </a>
                </div>

                <div className='message'>
                <a href="mailto:info@brillicaservices.com">
                <i class="fa fa-envelope fa-2x"></i>
                </a>
                </div>

            </div>
</>
    );
};

export default Icon;