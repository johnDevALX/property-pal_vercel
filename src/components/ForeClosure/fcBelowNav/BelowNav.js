import React from 'react';
import {BsSearch} from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi";

const BelowNav = () => {
    return (
        <div className={``} >
            <hr/>
            <div className={`flex px-5 py-2`} >
                <div className={`flex border border-spacing-2 border-slate-400 rounded-lg`} >
                    <input type="text" className={`p-2 ml-1 mr-2 w-64 focus:outline-none text-sm `} placeholder={`City, Neighborhood, ZIP, Address`} />
                    <span className={`p-2`} ><BsSearch/></span>
                </div>
                <button className={`flex ml-4 items-center text-sm px-3 bg-blue-50 border rounded-lg text-center border-blue-700 hover:border-slate-400 hover:bg-slate-100`} >For Sale <span><BiChevronDown/></span></button>
                <button className={`flex ml-2 items-center text-sm px-3 border rounded-lg text-center border-slate-400 hover:bg-slate-100`} >Price <span><BiChevronDown/></span></button>
                <button className={`flex ml-2 items-center text-sm px-3 border rounded-lg text-center border-slate-400 hover:bg-slate-100`} >Beds & Baths <span><BiChevronDown/></span></button>
                <button className={`flex ml-2 items-center text-sm px-3 border rounded-lg text-center border-slate-400 hover:bg-slate-100`} >Home Type <span><BiChevronDown/></span></button>
                <button className={`flex ml-2 items-center text-sm px-3 bg-blue-50 border rounded-lg text-center border-blue-700 hover:border-slate-400 hover:bg-slate-100`} >More (1) <span><BiChevronDown/></span></button>
                <button className={`flex ml-4 items-center text-sm px-3 rounded-lg text-center text-white bg-blue-700 hover:bg-slate-200 hover:text-blue-700`} >Save search</button>
            </div>
            <hr/>
        </div>
    );
};

export default BelowNav;
