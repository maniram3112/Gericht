import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../Constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app_navbar">
        <div className="app_navbar-logo">
            <img src={images.gericht} alt="app_logo" />
        </div>
        <ul className="app_navbar-links">
            <li className="p_opensans"><a href="#home">Home</a></li>
            <li className="p_opensans"><a href="#about">About</a></li>
            <li className="p_opensans"><a href="#menu">Menu</a></li>
            <li className="p_opensans"><a href="#awards">Awards</a></li>
            <li className="p_opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app_navbar-login">
            <a href="#login" className="p_opensans">Log In / Registration</a>
            <div />
            <a href="/" className="p_opensans">Book Table</a>
        </div>
        <div className="app_navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
            <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
                <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
                <ul className="app_navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                </ul>
            </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;