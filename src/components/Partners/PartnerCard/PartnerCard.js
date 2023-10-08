import React from 'react';
import './PartnerCard.css'

const PartnerCard = () => {
    return (
        <div>
            <div className="flex justify-center gap-2 py-3 " >
                <a className="p-body " >
                    <img className="body-img rounded-t-lg " src="https://i.postimg.cc/HkVD2tk1/agent.png" alt="Agent" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm an agent or broker</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
                <a className="p-body " >
                    <img className="body-img rounded-t-lg" src="https://i.postimg.cc/kg2CKbch/property.png" alt="property-manager" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm a property manager</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
                <a className="p-body " >
                    <img className="body-img rounded-t-lg" src="https://i.postimg.cc/d3MxMbvc/landlord.png" alt="Landlord" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm a landlord</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
            </div>
            <div className="flex justify-center gap-2 py-3" >
                <a className="p-body " >
                    <img className="body-img rounded-t-lg " src="https://i.postimg.cc/VkQ0884G/lender.png" alt="Lender" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm a lender or loan officer</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
                <a className="p-body " >
                    <img className="body-img rounded-t-lg" src="https://i.postimg.cc/mrWnkz69/builder.png" alt="Builder" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm a builder</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
                <a className="p-body " >
                    <img className="body-img rounded-t-lg" src="https://i.postimg.cc/05w2k2t9/advertiser.png" alt="Advertiser" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >I'm a brand or local advertiser</p>
                        <button className=" mt-6 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Get started</button>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default PartnerCard;
