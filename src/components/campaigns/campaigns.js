import React, { useEffect} from 'react'
import "./campaigns.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Camp6 from "../../images/assets/campaigns/camp9.png"
import Camp4 from "../../images/assets/campaigns/camp4.png"
import Camp5 from "../../images/assets/campaigns/camp5.png"
import Camp9 from "../../images/assets/campaigns/camp6.png"
import Camp7 from "../../images/assets/campaigns/camp7.png"
import Camp8 from "../../images/assets/campaigns/camp8.png"
import Camp2 from "../../images/assets/campaigns/camp10.png"

import "aos/dist/aos.css"
import Aos from 'aos'

const Campaigns = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <Container className='bt-ht'>
        <Row>
            <Col md={5} >
            <h1 className='hc-txt' >Highly Performed <br></br>Campaigns</h1>
            
            <img  data-aos="fade-in" src={Camp5} className="camp1"></img>
           </Col>
           <Col md={7}>
            <img  data-aos="fade-down" src={Camp4} className="camp2"></img>
            <img  data-aos="fade-down" src={Camp7} className="camp3"></img>
            <img  data-aos="fade-down" src={Camp6} className="camp4"></img>
            <img  data-aos="fade-up" src={Camp9} className="camp5"></img>
            <img  data-aos="fade-up" src={Camp8} className="camp6"></img>
            <img  data-aos="fade-up" src={Camp2} className="camp7"></img>
           
           
            {/* <img src={Camp4} className="camp3"></img> */}
            </Col>
        </Row>
    </Container>
  )
}

export default Campaigns