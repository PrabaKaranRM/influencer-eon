import React from "react";
import './App.css';
import Main from "./components/Main/main"
import Nav from "./components/Nav/nav"
import Brands from "./components/Brands/brands"
import Campaigns from "./components/campaigns/campaigns"
import Work from "./components/work/menu"
import Expertise from  "./components/Expertise/expertise"
import Influencer from "./components/Influencer/influencer"
import Outreach from "./components/Outreach/outreach"
import Project from "./components/Projects/projects"
import Reach from  "./components/Reach/reach"

import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
     {/* <AnimatedCursor  color="#000"
  outerSize={55}
  innerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #60DD4E'
  }}/> */}
  <AnimatedCursor className="anim"
  innerSize={10}
  outerSize={65}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  hasBlendMode={true}
  outerStyle={{
    border: '3px solid #60DD4E'
  }}
  innerStyle={{
    backgroundColor: '#60DD4E'
  }}
/>
    <Nav />
   <Main />
   <Brands />
   <Campaigns />
   <Work />
   <Expertise />
   <Influencer />
   <Outreach />
   <Project />
   <Reach />
   </>
  );
}

export default App;
