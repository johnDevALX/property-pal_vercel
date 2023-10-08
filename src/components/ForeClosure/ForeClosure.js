import React from 'react';
import AppNavbar from "../AppNavbar/AppNavbar";
import BelowNav from "./fcBelowNav/BelowNav";
import FcBody from "./fcBody/FcBody";
import './ForeClosure.css'

const ForeClosure = () => {
    return (
        <div >
            <div className={`tcs`} >
                <AppNavbar/>
                <BelowNav/>
            </div>

            <FcBody/>
        </div>
    );
};

export default ForeClosure;
