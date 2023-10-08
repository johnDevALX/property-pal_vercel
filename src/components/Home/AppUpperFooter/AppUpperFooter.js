import React from 'react';
import {Link} from "react-router-dom";

const AppUpperFooter = () => {
    return (
        <div className={`bg-white`} >
            <hr/>
            <div className="flex justify-between py-12 mx-10">
                <div className="m-auto">
                    <Link to={`/about`} className="hover:underline" >About</Link>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Zestimates</a>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Research</a>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Careers</a>
                </div>
                <div className="m-auto">
                    <Link to={`/help`} className="hover:underline" >Help</Link>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Advertise</a>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Terms of use</a>
                </div>
                <div className="m-auto">
                    <Link to={`/learn`} className="hover:underline" >Blog</Link>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Cookie preferences</a>
                </div>
                <div className="m-auto">
                    <a href="#" className="hover:underline" >Mobile Apps</a>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default AppUpperFooter;
