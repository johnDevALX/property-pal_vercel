import React from 'react';
import './BuyDropdown.css'
import {Link} from "react-router-dom";
const BuyDropdown = () => {
    return (
        <div className="dropdown bg-white w-full px-20">
            <div className="flex " >
                <div className=" mr-6 mb-10" >
                    <h4 className="menu">Homes For Sale</h4>
                    <div className="grid mt-3 text-blue-700 text-sm " >
                        <Link to={`/foreClosure`} className="hover:underline" >ForeClosures</Link>
                        <a href="#" className="hover:underline">Coming soon</a>
                        <a href="#" className="hover:underline">For sale by owners</a>
                        <a href="#" className="hover:underline">New construction</a>
                        <a href="#" className="hover:underline">Recent open</a>
                    </div>
                </div>
                <div className="ml-5">
                    <h4 className="menu" >Resources</h4>
                    <div className="grid mt-3 text-blue-700 text-sm" >
                        <a href="#" className="hover:underline">Buyers Guide</a>
                        <a href="#" className="hover:underline">ForeClosure Center</a>
                        <a href="#" className="hover:underline">Real estate app</a>
                        <a href="#" className="hover:underline">Down payment associate</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyDropdown;
