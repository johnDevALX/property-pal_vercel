import React from 'react';
import './AppBodyMid.css';
import {BsSearch} from "react-icons/bs";
import bgImage from '../../../assets/images/PPbrand.webp';



const AppBodyMid = () => {
    return (
        <div className="mb-8">
            <div className="body text-center" style={{backgroundImage: `url(${bgImage})`}} >
                <div className="child block justify-center items-center">
                    <p className="child-text font-bold text-2xl text-white" >Agents. Tours. Loans. Homes.</p>
                    <div className=" child-input flex justify-between items-center ">
                        <input className="input-form py-4 text-1xl text-black" type="text"  placeholder="Enter an address, neighborhood, city or zip code" />
                        <span className="input-span" > <BsSearch/></span>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AppBodyMid;
