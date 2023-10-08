import React from 'react';
import {BsSearch} from "react-icons/bs";

const BelowNavSR = () => {
    return (
        <div className={`flex justify-between px-20 py-6`} >
            <div className={`flex text-xs items-center`} >
                <h4 className={`text-blue-700 mr-2`} >PropertyPal Help Center</h4>
                <p className={`mr-2`}> > </p>
                <h4>Submit a request</h4>
            </div>
            <div className={`flex border text-sm border-slate-200 rounded-2xl px-3 py-1`} >
                <p className={`w-6 mt-1 `} ><BsSearch/></p>
                <input className={`w-60 focus:outline-none`} placeholder={`Search`} />
            </div>
        </div>
    );
};

export default BelowNavSR;
