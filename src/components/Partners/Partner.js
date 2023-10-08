import React from 'react';
import AppNavbar from "../AppNavbar/AppNavbar";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";
import PartnerCard from "./PartnerCard/PartnerCard";
import PartnerCardAboveFooter from "./PartnerCardAboveFooter/PartnerCardAboveFooter";

const Partner = () => {
    return (
        <div>
            <AppNavbar/>
            <hr/>
            <div>
                <div className={`text-center my-16`} >
                    <h4 className={`font-bold text-2xl mb-8`} >Drive Success with Property<i className={`text-blue-700`} >Pal</i> Business Solutions</h4>
                    <p>Reach millions of buyers, sellers and renters on the largest real estate network on the web.</p>
                    <p className={`font-bold text-2xl mt-6`} >Select your industry to get started</p>
                </div>
            </div>
            <div>
                <PartnerCard/>
            </div>
            <div className={`mt-36 mb-28`} >
                <h4 className={`font-bold text-2xl mt-6 text-center`} >Reach your target audience on our network of leading real estate sites.</h4>
                <div>
                    <img className={`m-auto py-6 px-24`} src={`https://i.postimg.cc/yd2KfY8y/zillow.png`} alt={`Brands`} />
                </div>
            </div>
            <PartnerCardAboveFooter/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default Partner;
