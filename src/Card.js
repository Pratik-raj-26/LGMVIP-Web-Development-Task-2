import './Card.css';
import React from 'react';
/*import {
  faTwitter,faInstagram,faFacebook,faLinkedin
}from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';*/
const Card =({userData})=>{
  return(
    // <i class="fas fa-user"></i>
    <div className="cards">
    <div className="card-title">
      <div className="card-name">
       <h1>{userData.first_name} </h1> 
       <h1> {userData.last_name} </h1>
      </div>
      <div className="card-email">
       <h2> {userData.email}</h2>
    </div>
    </div>
    <div className="card-img">
      <img src={userData.avatar} alt='avatar' />
    </div>
    
  </div>
  );
};
export default Card;