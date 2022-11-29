import React from 'react'
import "./expertise.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mill from '../../images/assets/images/mill.png';
import Lady from '../../images/assets/images/inf.png';
import Prefer from '../../images/assets/images/prefer.png';

const expertise = () => {

   
  return (
    <Container fluid className='fluid'>
        <Row className="cont ">
            <Col md={6}>
              <div className='h2-tx'>We Have The Experts</div>
              <div className='h1-txt'>To Do both!</div>
              <div className='bttns'>
        <button className="hum-btn">
         Human Brilliance
        </button>
        <br></br>
        <button className="hum-btn">
         Next-Gen Data
        </button>
        
        <br></br>
        <button className="hum-btn">
         Sclable Performance
        </button>
        </div>
            </Col>
            <Col md={6}>
                <img className="mill" src={Mill}></img>
                <img class="prefer" src={Prefer}></img>
                <img className='lady' src={Lady}></img>
                
                
            </Col>
        </Row>
    </Container>
  )
}

export default expertise