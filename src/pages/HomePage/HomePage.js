import React from 'react';
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import AppBodyMid from "../../components/Home/AppBodyMid/AppBodyMid";
import AppBodyLayer1 from "../../components/Home/AppBodyLayer/AppBodyLayer1";
import AppBodyCard from "../../components/Home/AppBodyCard/AppBodyCard";
import AppBodyBelowCard from "../../components/Home/AppBodyBelowCard/AppBodyBelowCard";
import AppUpperFooter from "../../components/Home/AppUpperFooter/AppUpperFooter";
import AppLowerFooter from "../../components/Home/AppLowerFooter/AppLowerFooter";

const HomePage = () => {
    return (
        <div>
            <AppNavbar/>
            <hr/>
            <AppBodyMid/>
            <AppBodyLayer1/>
            <AppBodyCard/>
            <AppBodyBelowCard/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default HomePage;
