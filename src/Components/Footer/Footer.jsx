import React from 'react';
import "./Footer.css";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/vimeo'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/instagram'
import 'react-social-icons/meetup'
const Footer = () => {
    return (
        <div className='footer-container p-4'>
            <div >
                <h2 className='header'>Job Hunter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos ullam incidunt dolores quam pariatur similique provident. Dolore, vel praesentium.</p>
                <div className='footer-icon px-1.5'>
                    <SocialIcon  url="www.facebook.com" />
                    <SocialIcon url="www.twitter.com" />
                    <SocialIcon url="www.instagram.com" />
                </div>
                </div>
                <div>
                    <h5 className='semi-header'>Company</h5>
                    <ul>
                       <li>About Us</li>
                       <li>Work</li>
                       <li>Latest News</li>
                       <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h5 className='semi-header'>Product</h5>
                    <ul>
                       <li>Prototype</li>
                       <li>Plans and Pricing</li>
                       <li>Customers</li>
                       <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h5 className='semi-header'>Support</h5>
                    <ul>
                       <li>Help Desk</li>
                       <li>Self</li>
                       <li>Become a Partner</li>
                       <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h5 className='semi-header'>Contact</h5>
                    <ul>
                       <li>52/BroadWay,NYC</li>
                       <li>Wo+8801672229710rk</li>
                      
                    </ul>
                </div>
            </div>
       
    );
};

export default Footer;