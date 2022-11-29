import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./influencer.css";
import Path from "../../images/assets/Path.png"
import L1 from "../../images/assets/images/l1.png"
import M1 from "../../images/assets/images/m1.png"
import R1 from "../../images/assets/images/curly.png"
import Circle from "../../images/assets/s1.png"
import Poly from "../../images/assets/p1.png"
import Parallax from 'react-rellax';

const influencer = () => {
  return (
   <Container fluid >
    
    <Row >
    <div className='influ text-center'>Influencer Marketing Uncovered</div>
   
        <Col md={4} >
        <div className='oinf-txt text-center'>Influencer Selection</div>
        <img className='cir' src={Circle}></img>
         <img className='imge' src={L1}></img>
        
        </Col>
     
       

        <Col md={4} >
        <div className='inf-txt text-center'>Influencer Relations</div>
        <img className='imge1' src={M1}></img>
        </Col>
        <Col md={4} >
        <div className='tinf-txt text-center'>Campaingn Management</div>
        
        <img className='imge2' src={R1}></img>
        <img className='poly' src={Poly}></img>
        </Col>
   
    </Row>
   
    <img className="path" src={Path}></img>

   </Container>
   
  )
}

export default influencer