import { useState } from "react";
import "./wpp.css";
import Handle from "../../images/assets/handle.png"
import Indus from "../../images/assets/indust.png"
import Bud from "../../images/assets/budget.png"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
         <h1 className='hw-txt text-center'>Why work with us?</h1>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Handle Specific
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Industry Specific
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Budget Specific
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
        
        <img className="ima text-center" src={Handle} ></img>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
        
          <img className="ima" src={Indus} ></img>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
        
          <img className="ima" src={Bud} ></img>
        </div>
      </div>
    </div>
  );
}

export default Tabs;