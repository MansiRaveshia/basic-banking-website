import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare ,faTwitterSquare,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="f" id='footersect'>
             <h3 className="h">Address</h3>
             <h5>3rd floor,Shivaay Apartments,New Ring Road,Ahemadabad</h5>
             <br/>
             
             <h3 className="h">Contact Details</h3>
             <h5>Phone no:+919999888800</h5>


             <p class="f4">
        facebook      twitter      instagram
        <br/>
        <FontAwesomeIcon className="ic" icon={faFacebookSquare}/>
        <FontAwesomeIcon className="ic" icon={faTwitterSquare}/>
        <FontAwesomeIcon className="ic" icon={faInstagramSquare}/>
        
        </p>
        <br/>
        <p style={{color:"black"}}>© Copyright 2021-Mansi</p>
            
        </div>
    )
}

export default Footer
