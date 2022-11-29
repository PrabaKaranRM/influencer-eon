import React,{useState} from 'react'
import "./reach.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Reach = () => {

    const [value, setValue] = useState();


  return (
    <>    <div className='gr-bg'>
    <Container >
        <Row>
            <Col md={12}>
            <div className='reach-h'>Reach Out To Us</div>
          
            </Col>
     <Col md={4}>
        <div className='label'>Your Input Email</div>
            <input type="email" placeholder="Email" className="inp"></input>
            </Col>
            <Col md={4}>
            <div className='label'>Your Phone Number</div>
            <PhoneInput  
      placeholder="Enter phone number" className='ph-in'
      defaultCountry="US"
      value={value}
      onChange={setValue}/>
            </Col>
            <Col md={4}>
                <button className='enq'>ENQUIRE</button>
            </Col>
        </Row>
    </Container>
    </div>
    <Container fluid className='colr'>
        <Row>
            <Col>
             <div className='text-center cpr'>© 2022 Eon8. All Rights Reserved.</div>
            </Col>
        </Row>
    </Container>
    </>

  )
}

export default Reach