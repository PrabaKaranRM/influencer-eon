import React,{useState,useEffect} from 'react'
import "./projects.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NumberCounter from 'number-counter';
import "aos/dist/aos.css"
import Aos from 'aos'
import { Waypoint } from "react-waypoint";



const Projects = () => {

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const onVWEnter = () => {
    setViewPortEntered(true);
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container className='tp'>
        <Row>
            <Col md={1}></Col>
            <Col md={10}>
            <h1 className='text-center mb-fr'>A free influencer service is just a Single step away.</h1>
            </Col>
            <Col md={1}></Col>
        </Row>
        <Row>
            <Col md={1}></Col>
            <Col md={10}>
            <div className='nd-tx text-center'>If you want to win the NFT market, then you will need a solid NFT marketing strategy. Our wide range of experience and extensive market research back us and help us in building a successful NFT marketing campaign for your NFT growth.</div>
            </Col>
            <Col md={1}></Col>
        </Row>
        <Waypoint onEnter={onVWEnter} ></Waypoint>
        <Row className='count-sec' data-aos="fade-in">
           
            <Col md={3}> {viewPortEntered && <NumberCounter className="counter" end={1177} delay={1} postFix={"+"} />}
            <div className='proj'>Project Completed</div>
            </Col>
            
            <Col md={3}>{viewPortEntered &&<NumberCounter className="counter" end={516} delay={1} postFix={"+"} />}
            <div className='proj'>Our Happy Clients</div></Col>
            <Col md={3}>{viewPortEntered &&<NumberCounter className="counter" end={12} delay={2} postFix={"+"} />}
            <div className='proj'>Years of Experience</div></Col>
            <Col md={3}>{viewPortEntered &&<NumberCounter className="counter" end={236} delay={2} postFix={"+"} />}
            <div className='proj'>Development Experts</div></Col>
           
        </Row>
    </Container>
  )
}

export default Projects