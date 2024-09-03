import React from 'react';
import  './styleFooter.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>התקשרו  אלינו</h3>
                    <p>123 Main Street, City, Country</p>
                    <p>Email:starsontheway1@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-content">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;