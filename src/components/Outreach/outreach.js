import React from 'react'
import "./outreach.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nich from '../../images/assets/nich.png'


const outreach = () => {
  return (
    <Container className="bot" >
        <Row>
            <Col md={4}>
                 <h1 className='ho-txt'> Niche in Outreaching</h1>
                 <div className='out-2'>Niche in outreaching</div>
                 <button className="nx-gen-btn">
         Book a Call
        </button>
            </Col>
            <Col md={8}>
                <img className='nic' src={Nich}></img>
                <button className="onx-gen-btn">
         Book a Call
        </button>
            </Col>
        </Row>
    </Container>
  )
}

export default outreach