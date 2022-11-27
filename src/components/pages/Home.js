import React, {useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sliderbar from '../Sliderbar';
import Background from '../Background';
import InfoSection from '../InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree} from '../InfoSection/Data';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  };

  return <div>
      <Navbar  toggle={toggle}/>
      <Sliderbar isOpen={isOpen} toggle={toggle}/>
      <Background/>
      {/* <img src={require("../images/my.jpg")} alt='alt'/> */}
      <InfoSection {...homeObjOne}/>
      <hr></hr>
      <InfoSection {...homeObjTwo}/>
      <hr></hr>
      <InfoSection {...homeObjThree}/>
      <Footer/>
  </div>;
};

export default Home;
