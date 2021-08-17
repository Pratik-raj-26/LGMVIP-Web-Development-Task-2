import React from 'react';
import Nav from './Nav.js';
import './Home.css';
const Home=()=>{
return(
 
  <section id="home">
     <Nav/>
  <div className="home">
    <div className="home-content">
       <h1>Welcome to everyone in Let Grow More(LGM) Group</h1>
       <p><h2>In these group we give a chance to show your talent in whole world. And become a programmer in any feild. Such as Web developer or Andriod developer</h2></p>
       <button className="hbtn">LEARN MORE FOR DETAIL</button>
       <button className="hbtn">LEARN MORE ABOUT GROUP</button>
    </div>
  </div>
 
  </section>
);

};
export default Home;