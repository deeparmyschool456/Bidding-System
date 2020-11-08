import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/footer.css';

const footer=()=>{

    return(
            <div>
            <footer>
            <div className="main-content">
        
                <div className="left box">
                <h2>About us</h2>
                <div className="content">
                    <h6 style={{color:"black"}}>“AGROMART" – The Market for Farmers</h6>
                    <div className="social">
                    <a href="#"><span className="fab fa-facebook-f"></span></a>
                    <a href="#"><span className="fab fa-twitter"></span></a>
                    <a href="#"><span className="fab fa-instagram"></span></a>
                    <a href="#"><span className="fab fa-github"></span></a>
                    </div>
                </div>
                </div>

                <div className="center box">
                <h2>Address</h2>
                <div className="content">
                
                    <div className="place">
                    <span className="fas fa-map-marker-alt"></span>
                    <span className="text">Office 311,Bengaluru,India</span>
                    </div>
                    <div className="phone">
                    <span className="fas fa-phone-alt"></span>
                    <span className="text">+91-7839057391</span>
                    </div>
                    <div className="email">
                    <span className="fas fa-envelope"></span>
                    <span className="text">agromart@agro.com</span>
                    </div>
                </div>
                
                </div>

        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required></input>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="#">TEAM AARIV</a> | </span>
          <span className="far fa-copyright"></span><span> 2020 All rights reserved.</span>
        </center>
      </div>
      </footer>
    </div>
)}

export default footer;