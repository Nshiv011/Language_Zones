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
    <input type="email" placeholder="Enter Email" name="email" required/>

    <label for="pwd">       </label>
    <input type="password" placeholder="Enter Password" name="email" required/>

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






const Hero=()=>{
    const [modalShow, setModalShow] = React.useState(false);
    return (
<>
<div className='container-fluid heroo'>
    <div className='row'>
        <div className="col-lg-12 col-sm-12 hero">

            {/* <img className='hero' src={heroimg} /> */}
            <div className='icon'>

                <div className='form'>
                
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
            
        </div>
    </div>
    
</div>
<div className='container-fluid'>
<div className='row tt'>
<div className="text">
    <div className="text-block">
                <h4>Our Newly Introduced Course</h4>
            </div>
            </div>
</div>
</div>


</>
    );
};
export default Hero;