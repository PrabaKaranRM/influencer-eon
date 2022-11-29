import React, { useEffect, useState } from 'react'
import "./main.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Check from '../../images/assets/images/checked.png'
import Im1 from '../../images/influencer-collage.png'
import Add from '../../images/assets/images/add.png'
import Arrow from '../../images/assets/images/arrow.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-number-input'


function Main () {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (

    <Container>
      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header className='modal-h' closeButton>
          <Modal.Title className='text-center tx-q'>Quick Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-h'>
          <Form className='text-center'>
            <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
              
              <Form.Control className='in-c'
                type="email"
                placeholder="Email"
                autoFocus
                
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              
              <Form.Control className='in-c'
                type="name"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              
              <Form.Control className='in-c'
                type="Country"
                placeholder="Country"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group >
            <PhoneInput className='po-ph'
      placeholder="Enter phone number" 
      defaultCountry="US"
      value={value}
      onChange={setValue}/>
      </Form.Group>
            <Form.Group className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            ><br></br>
              <Form.Label className='lab'>Type your message here</Form.Label>
              <Form.Control className='in-t' as="textarea"  rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modal-f'>
        
          <Button className='sub-btn ' onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
        <Row>
            <Col md={6}>
             
            <h1 data-end="Growth">Our Oath For Your Brand's </h1>
            <br></br><br></br>
            
            <img src={Check} className="check" width="6%" ></img>
            <div className='sm-txt p-3'>Your first Influencer Marketing service will be      
            </div>
<img  data-aos="fade-right" className="arrow" width="27%" src={Arrow}></img>
</Col>  
            
            <Col md={6}> 
        
          <div class="circles" >
         
          <div class="pulse-base">
            
          <div class="pulse-base1">
         

          
          
          </div>
         
          </div>
          <div  className="add-bg"><button className='add-bn' onClick={handleShow}>+</button>
          </div>
          </div>
          
         
          
          <img width="83%" className="im1" src={Im1}></img>
          
        
           
            </Col>
     
        </Row>
    </Container>
  )
}

export default Main