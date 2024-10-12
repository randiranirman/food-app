import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore porro, obcaecati exercitationem, inventore odio nihil nemo facilis numquam molestias consectetur aliquid veritatis laboriosam quam fugiat quibusdam cum eius beatae?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li> +94 70555 311</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 Tomato.com</p>
        </div>
    )
}

export default Footer
