import React from 'react';
import AppNavbar from "../AppNavbar/AppNavbar";
import AboutBody from "./AboutBody";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";

const About = () => {
    return (
        <div>
            <AppNavbar/>
            <hr/>
            <AboutBody/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default About;
