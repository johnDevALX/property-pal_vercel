import React from 'react';
import {BsSearch} from "react-icons/bs";

const BelowNav = () => {
    return (
        <div className={`flex justify-between shadow-2xl p-6 bg-white`}>
            <div className={`text-sm flex items-center font-bold text-black`} >
                <a className={` p-2  border-r-2 border-slate-300`} >Learning Center</a>
                <a className={`m-4 text-blue-600 hover:text-black`} >Buying</a>
                <a className={`m-4 text-blue-600 hover:text-black`} >Renting</a>
                <a className={`m-4 text-blue-600 hover:text-black`} >Selling</a>
                <a className={`m-4 text-blue-600 hover:text-black`} >Financing</a>
                <a className={`m-4 text-blue-600 hover:text-black`} >Owning</a>
            </div>
            <div className={`flex border text-sm border-slate-200 rounded-3xl px-3 py-3 bg-blue-100 `} >
                <p className={`w-6 mt-1 text-blue-700 `} ><BsSearch/></p>
                <input className={`w-60 bg-blue-100 font-bold text-blue-700 focus:outline-none`} placeholder={`Search learning center`} />
            </div>
        </div>
    );
};

export default BelowNav;
