import React from 'react';
import HelpNavbar from "../AppNavbar/HelpNavbar/HelpNavbar";
import BelowNavSR from "./BelowNavSR";
import BodySR from "./BodySR";
import SRFooter from "./SRFooter";

const SubmitRequest = () => {
    return (
        <div>
            <HelpNavbar/>
            <hr/>
            <BelowNavSR/>
            <BodySR/>
            <hr/>
            <SRFooter/>
        </div>
    );
};

export default SubmitRequest;
