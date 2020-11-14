import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/footer.css';

const footer = () => {

    const footer = {
      margin : "10px" ,
      justifyContent : "space-around"
    }
    return(
            <div style = {footer}>
            <footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">About AgroMart</h4></li>
    <li><a class="generic-anchor footer-list-anchor">"AGROMART" – The Market for Farmers</a></li>
    
  </ul>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">ADDRESS </h4></li>

    <div className="content">
                      <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <span className="text">Office 007,Pune,India</span>
                      </div>
                      <div className="phone">
                        <span className="fas fa-phone-alt"></span>
                        <span className="text">+91-783907391</span>
                      </div>
                      <div className="email">
                        <span className="fas fa-envelope"></span>
                        <span className="text">agromart@agro.com</span>
                      </div>
    </div>
    
    
  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">HELP</h4></li>
    <li><a class="generic-anchor footer-list-anchor">CONTACT</a></li>
    <li><a class="generic-anchor footer-list-anchor">FAQ</a></li>
    <li id='find-a-store'><a class="generic-anchor footer-list-anchor">GOVT. BIDDERS</a></li>
    
    
  </ul>
  <section class="footer-social-section flex-rw">
      <span class="footer-social-overlap footer-social-connect">
      CONNECT <span class="footer-social-small">with</span> US
      </span>
      <span class="footer-social-overlap footer-social-icons-wrapper">
      <a class="generic-anchor" target="_blank" title="Pinterest"><i class="fa fa-pinterest"></i></a>
      <a class="generic-anchor" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a>
      <a class="generic-anchor" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a>
      <a class="generic-anchor" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a>
      <a class="generic-anchor" target="_blank" title="Youtube"><i class="fa fa-youtube"></i></a>
      <a class="generic-anchor" target="_blank" title="Google Plus"><i class="fa fa-google-plus"></i></a>
      </span>
  </section>
  <section class="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" role="copyright">
 
</i> 2020 Pavilion in <address class="footer-address" role="company address">AgroMart, PUNE</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div class="footer-bottom-wrapper">
    <a class="generic-anchor" rel="nofollow">Terms</a> | <a class="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>
    </div>
)}

export default footer;