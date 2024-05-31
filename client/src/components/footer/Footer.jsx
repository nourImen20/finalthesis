import React from 'react'
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className='sb__footer-links-div'>
                    <h4>About Us</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium earum praesentium eum. </p>
                    <Row className="follow d-flex ">
                        <p className='follow__text col-5'>follow us</p>
                        <div className='col-3 d-flex '>
                        <i class="bi bi-facebook me-2"></i>
                        <i class="bi bi-twitter me-2"></i>
                        <i class="bi bi-instagram me-2"></i>
                        <i class="bi bi-whatsapp me-2"></i>
                        </div>
                    </Row>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Links</h4>
                    <a href="#" className='text-decoration-none'>
                        <p>About us</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>meet our teams</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>news & media</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>our projects</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>contacts</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Help ?</h4>
                    <a href="#" className='text-decoration-none '>
                        <p className='text-uppercase'>FAQ</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>Term & condition</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>Contact support</p>
                    </a>
                    <a href="#" className='text-decoration-none'>
                        <p>Our services</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Quick Contact</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium earum praesentium eum.!</p>
                    
                    <p className='me-3'>
                        <i class="bi bi-envelope me-2"></i>infor@user.com
                    </p>
                    <p className='me-3'>
                        <i class="bi bi-telephone-fill me-2"></i>+777 2536 7885
                    </p>
                    
                </div>

                
            </div>
            
        </div>
        <hr className='mb-4 border-light' />
        <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} website.  All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        
                        <div><p>Terms & Conditions</p></div>
                        
                        <div><p>Privacy</p></div>
                        
                        <div><p>Security</p></div>
                        
                        <div><p>Cookie Declaration</p></div>
                    </div>
                </div>
    </div>
  )
}

export default Footer