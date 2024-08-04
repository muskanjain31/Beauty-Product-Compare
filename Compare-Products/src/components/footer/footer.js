import React from 'react';
import './footer.css';
import navIcon1 from '../../assets/images/linkedin1.svg';
import navIcon2 from '../../assets/images/github1.svg';
import navIcon3 from '../../assets/images/instagram1.svg';

function Footer() {
  return (
    <div>
    <footer className="footer-distributed">
    
                <div className="footer-left">
    
                    <h3>Compare<span>Products</span></h3>
    
                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        
                        <a href="#">Blog</a>
                    
                        <a href="#">Pricing</a>
                    
                        <a href="#">About</a>
                        
                        <a href="#">Faq</a>
                        
                        <a href="#">Contact</a>
                    </p>
    
                    <p className="footer-company-name">Compare Products © 2024</p>
                </div>
    
                <div className="footer-center">
    
                    <div>
                        <div className="fa fa-map-marker"></div>
                        <p><span>Gittikhadan</span> RCOEM , Nagpur</p>
                    </div>
    
                    <div>
                        <div className="fa fa-phone"></div>
                        <p>+91996179889</p>
                    </div>
    
                    <div>
                        <div className="fa fa-envelope"></div>
                        <p><a href="mailto:muskanjain.3120@gmail.com">muskanjain.3120@gmail.com</a></p>
                    </div>
    
                </div>
    
                <div className="footer-right">
    
                    <p className="footer-company-about">
                        <span>About Compare Products</span>
                        Compare Products is your go-to platform for unbiased beauty product comparisons, helping you make informed choices for your skincare, haircare, and body care needs. </p>
    
                    <div className="footer-icons">
    
                    <a href="https://www.linkedin.com/in/muskan-jain-00517222b/"><img src={navIcon1} alt="" /></a>
                    <a  href="https://github.com/muskanjain31" className= 'Icon2'><img src={navIcon2} alt="" className="navIcon2"/></a>
                    <a href="https://www.instagram.com/muskanjain_3/"><img src={navIcon3} alt="" /></a>
    
                    </div>
    
                </div>
    
            </footer></div>
  )
}
export default Footer;
