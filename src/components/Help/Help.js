import React from 'react';
import HelpNavbar from "../AppNavbar/HelpNavbar/HelpNavbar";
import {BsSearch} from "react-icons/bs";
import './Help.css'
import HelpImg from "../../assets/images/helpImg.jpg"


const Help = () => {
    return (
        <div className={`grid`} >
            <div><HelpNavbar/></div>
            <div>
                <div className="mb-8">
                    <div className="body-he text-center" style={{backgroundImage: `url(${HelpImg})`}} >
                        <div className="child block justify-center items-center ">
                            <div className="child-input flex justify-between items-center  ">
                                <span className="input-span pl-3" > <BsSearch/></span>
                                <input className="input-form py-3 text-sm text-black" type="search"  placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`grid mt-5 mb-7`} >
                <div className={`flex justify-center gap-14 `} >
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Agents</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Lender</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Property<i className={`text-black`} >Pal</i> home loans</button></div>
                </div>
                <div className={`flex justify-center gap-14`} >
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Rentals</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Homebuyers</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Homeowners</button></div>
                </div>
                <div className={`flex justify-center gap-14`} >
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Home sellers</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Privacy</button></div>
                    <div><button className={` w-80 text-blue-700 text-center py-5 px-6 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >Mobile Apps</button></div>
                </div>
                <div className={` `} >
                    <div className={`flex justify-center m-auto`} ><button className={` last-btn text-blue-700 text-center py-5 my-3 border border-blue-700 border-spacing-2 text-md rounded-md hover:bg-blue-700 bg-white hover:text-white`} >PropertyPal Nigeria</button></div>
                </div>
            </div>
            <hr/>
            <div>
                <div className={`flex justify-between items-center py-4 px-14`} >
                    <div className=" text-center text-sm font-medium text-black" >
                        <p>PropertyPal Help Center</p>
                    </div>
                    <div className={`flex justify-evenly items-center text-sm text-blue-700 pr-10 `}>
                        <p className={`pr-5 hover:underline `} >English (US)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
