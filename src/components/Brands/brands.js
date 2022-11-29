import React from 'react'
import "./brands.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "./brands.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Log1 from "../../images/assets/logos/log1.png"
import Log2 from "../../images/assets/logos/log2.png"
import Log3 from "../../images/assets/logos/log3.png"
import Log4 from "../../images/assets/logos/loggo.png"
import Log5 from "../../images/assets/logos/log5.png"
import Log6 from "../../images/assets/logos/log6.png"


const brands = () => {

    var settings = {
     
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
  
      };

      var settingsmb = {
     
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000 ,
        pauseOnHover: true
  
      };


  return (

    <Container >
     <Row>
        <Col>
        <div className='hb-txt'>Your Brand Is Next</div>
        </Col>
        <Row>
            <Col p-3 >
            <div className='slid'>
        <Slider {...settings}>
        <div>
        <img src={Log1} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log2} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log3} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img p-3 src={Log4} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log5} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log6} alt={Log2} className="logs"></img>
        </div>
        
    </Slider>
    </div>
    </Col>
        </Row>
        <Row>
            <Col p-3 >
            <div className='slid-mb'>
        <Slider {...settingsmb}>
        <div>
        <img src={Log1} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log2} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log3} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img p-3 src={Log4} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log5} alt={Log2} className="logs"></img>
        </div>
        <div>
        <img src={Log6} alt={Log2} className="logs"></img>
        </div>
        
    </Slider>
    </div>
    </Col>
        </Row>
     </Row>
    </Container>
  )
}

export default brands