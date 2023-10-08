import React from 'react';
import './AppBodyBelowCard.css'
import {BsArrowRightShort} from "react-icons/bs";

const AppBodyBelowCard = () => {
    return (
        <div>
            <div className="flex justify-between py-12">
                <div className="below flex" >
                    <a href="#" className="hover:underline" >Real Estate </a> <span className="ps-4 text-blue-700 text-2xl" ><BsArrowRightShort/></span>
                </div>
                <div className="below below-card flex" >
                    <a href="#" className="hover:underline"  >Rentals</a><span className="ps-4 text-blue-700 text-2xl" ><BsArrowRightShort/></span>
                </div>
                <div className="below below-card flex" >
                    <a href="#" className="hover:underline" >Mortgage Rates</a><span className="ps-4 text-blue-700 text-2xl" ><BsArrowRightShort/></span>
                </div>
                <div className="below below-card flex" >
                    <a href="#" className="hover:underline" >Browse Homes</a><span className="ps-4 text-blue-700 text-2xl" ><BsArrowRightShort/></span>
                </div>
            </div>
        </div>
    );
};

export default AppBodyBelowCard;
