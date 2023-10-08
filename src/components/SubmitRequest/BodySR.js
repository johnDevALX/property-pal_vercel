import React from 'react';

const BodySR = () => {
    const a = "Homebuyer, Homeowner or Home Seller";
    const b = "Real Estate Professional";
    const c = "Renter, Landlord or Property Manager";
    const d = "Lender";
    const e = "Lender co-marketing";
    const empty = "_"

    return (
        <div className={`mt-10 text-black px-20 mb-60`}>
            <h4 className={`text-2xl mb-9`} >Submit a request</h4>
            <p className={`text-xs mb-2`} >Please tell us who you are</p>
            <select className={`w-6/12 border text-sm border-slate-300 focus:border-blue-600 rounded-md px-4 py-2 focus:outline-none`}>
                <option>{empty}</option>
                <option>{a}</option>
                <option>{b}</option>
                <option>{c}</option>
                <option>{d}</option>
                <option>{e}</option>
            </select>
        </div>
    );
};

export default BodySR;
