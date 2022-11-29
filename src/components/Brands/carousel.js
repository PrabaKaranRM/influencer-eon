import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./brand.css"
import Log1 from "../../assets/logos/log1.png"
import Log2 from "../../assets/logos/log2.png"
import Log3 from "../../assets/logos/log3.png"
import Log4 from "../../assets/logos/log4.png"
import Log5 from "../../assets/logos/log5.png"
import Log6 from "../../assets/logos/log6.png"


export default () => (
    <Carousel autoPlay={true}>
        
      <img src={Log1} alt={Log2} className="log"></img>
      
     
        <img src={Log2} alt={Log2} className="log"></img>
        
        
        <img src={Log3} alt={Log2} className="log"></img>
        
        
        <img src={Log4} alt={Log2} className="log"></img>
        
        
        <img src={Log5} alt={Log2} className="log"></img>
        
        
        <img src={Log6} alt={Log2} className="log"></img>
        
    </Carousel>
)