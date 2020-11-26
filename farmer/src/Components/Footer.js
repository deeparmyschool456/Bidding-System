import React from 'react';
import '../Css/footer.css';

const footer = () => {

    const footer = {
      margin : "10px" ,
      justifyContent : "space-around"
    }
    return(
            <div style = {footer}>
            <footer className="flex-rw">
  
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">About AgroMart</h4></li>
    <li><a className="generic-anchor footer-list-anchor">"AGROMART" – The Market for Farmers</a></li>
    
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">ADDRESS </h4></li>

    <div className="contentab">
                      <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <span className="text">007,Tech Park,Pune,India</span>
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
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">HELP</h4></li>
    <li><a className="generic-anchor footer-list-anchor">CONTACT</a></li>
    <li><a className="generic-anchor footer-list-anchor">FAQ</a></li>
    <li id='find-a-store'><a className="generic-anchor footer-list-anchor">GOVT. BIDDERS</a></li>
    
    
  </ul>
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      CONNECT <span className="footer-social-small">with</span> US
      </span>
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a className="generic-anchor" target="_blank" title="Pinterest"><i className="fa fa-pinterest"></i></a>
      <a className="generic-anchor" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a>
      <a className="generic-anchor" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a>
      <a className="generic-anchor" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a>
      <a className="generic-anchor" target="_blank" title="Youtube"><i className="fa fa-youtube"></i></a>
      <a className="generic-anchor" target="_blank" title="Google Plus"><i className="fa fa-google-plus"></i></a>
      <a className="generic-anchor" target="_blank" href="https://github.com/KUNAL-FALCON/Bidding-System" title="Github"><i className="fa fa-github"></i></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright" role="copyright">
 
</i> 2020 Pavilion in <address className="footer-address" role="company address">AgroMart, Pune</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
    <a className="generic-anchor" rel="nofollow">Terms</a> | <a className="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>
    </div>
)}

export default footer;