import React from 'react';

const ProfessionalForm = () => {
    return (
        <div>
            <h4 className={`mt-5 mb-3 font-medium text-2xl text-black`} >Professional Information</h4>
            <div className="grid" >
                <span className="text-sm font-bold text-black my-2" >Professional type </span>
                <select className={`border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5 `} >
                    <option>Select your category</option>
                    <option>Real estate agent/broker</option>
                    <option>Mortgage lender</option>
                    <option>Landlord</option>
                    <option>Home inspector</option>
                    <option>Home builder</option>
                    <option>Home improvement services</option>
                    <option>Other Professional services</option>
                </select>
            </div>
            <div className={`flex justify-between`} >
                <div className="grid" >
                    <span className="text-sm font-bold text-black my-2" >First name</span>
                    <input type="text" className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="First name"  required/>
                </div>
                <div className="grid" >
                    <span className="text-sm font-bold text-black my-2" >Last name </span>
                    <input type="text" className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="Last name"  required/>
                </div>
            </div>
            <div className="grid" >
                <span className="text-sm font-bold text-black my-2" >Zip/Postal</span>
                <input type="text" className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="Zip/Postal"  required/>
            </div>
            <div className="grid" >
                <span className="text-sm font-bold text-black my-2" >Phone number</span>
                <input type="text" className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="Phone number"  required/>
            </div>

        </div>
    );
};

export default ProfessionalForm;
