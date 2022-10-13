import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png"
import {Facebook, Instagram, Pinterest, Twitter, Youtube} from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="footer_wrapper">
            <a href="https://rapidapi.com/thecocktaildb/api/themealdb" className="footer_api_link"
               target="_blank">API</a>
            <div className="footer_social">
                <a href="https://www.instagram.com/yum.recipe/?igshid=YmMyMTA2M2Y%3D" className="footer_api_link"
                   target="_blank">
                    <Instagram className="footer_icon"/>
                </a>

                <a href="https://www.facebook.com/Easy.Recipes105/?ref=page_internal" className="footer_api_link"
                   target="_blank">
                    <Facebook className="footer_icon"/>
                </a>

                <a href="https://twitter.com/simplyrecipes" className="footer_api_link"
                   target="_blank">
                    <Twitter className="footer_icon"/>
                </a>

                <a href="https://www.youtube.com/c/tastyrecipes" className="footer_api_link"
                   target="_blank">
                    <Youtube className="footer_icon"/>
                </a>

                <a href="https://ru.pinterest.com/search/pins/?q=recipes&rs=typed" className="footer_api_link"
                   target="_blank">
                    <Pinterest className="footer_icon"/>
                </a>
            </div>
            <img src={logo} className="footer_logo" alt="Logo"/>
        </footer>
    );
};

export default Footer;