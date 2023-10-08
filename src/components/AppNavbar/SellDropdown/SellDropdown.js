import React from 'react';
import './SellDropdown.css'
const SellDropdown = () => {
    return (
        <div className="dropdown bg-white w-full px-20">
            <div className="flex" >
                <div className=" mr-6 mb-10" >
                    <h4 className="menu-ui">Resources</h4>
                    <div className="grid mt-3 text-blue-700 text-sm " >
                        <a href="#" className="hover:underline" >Explore your options</a>
                        <a href="#" className="hover:underline">See your home's Zestimate</a>
                        <a href="#" className="hover:underline">Houses for rent</a>
                        <a href="#" className="hover:underline">Home values</a>
                        <a href="#" className="hover:underline">Sellers guide</a>
                    </div>
                </div>
                <div className="">
                    <h4 className=" " >Sellers options</h4>
                    <div className="grid mt-3 text-blue-700 text-sm" >
                        <a href="#" className="hover:underline">Find a seller's agent</a>
                        <a href="#" className="hover:underline">Post For Sale by Owner</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellDropdown;
