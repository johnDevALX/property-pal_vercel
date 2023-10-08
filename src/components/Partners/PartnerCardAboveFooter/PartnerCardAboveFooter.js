import React from 'react';
import './PartnerCardAboveFooter.css'

const PartnerCardAboveFooter = () => {
    return (
        <div className={`bc p-14 `} >
            <p className={`text-center font-bold text-2xl pb-3 text-white`} >PropertyPal Group Audience</p>
            <div className="flex justify-center gap-2 py-3 " >
                <a className="pc-body bg-blue-900 " >
                    <img className="body-img rounded-t-lg m-auto" src="https://i.postimg.cc/pdH4y965/buy.png" alt="Buy" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-medium pt-3 text-white mb-4 " >41% to buy or sell</p>
                        <p className=" text-sm font-medium text-white mb-4 " >Nearly 41% of people who visited Zillow and/or Trulia in the past 12 months are planning to buy and/or sell a home in the next 12 months.</p>
                    </div>
                </a>
                <a className="pc-body bg-blue-900" >
                    <img className="body-img rounded-t-lg m-auto" src="https://i.postimg.cc/zXFBhgqN/million.png" alt="million" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-medium pt-3 text-white mb-4 " >194 million</p>
                        <p className=" text-sm font-medium text-white mb-4 " >More than 194 million average monthly unique users visited Zillow Group brands’ mobile apps and websites in Q2 2019.</p>
                    </div>
                </a>
                <a className="pc-body bg-blue-900" >
                    <img className="body-img rounded-t-lg m-auto" src="https://i.postimg.cc/cH1zMpZs/network.png" alt="network" />
                    <div className="mb-14 text-center">
                        <p className=" text-2xl font-medium pt-3 text-white mb-4 " >Most visited rental network</p>
                        <p className=" text-sm font-medium text-white mb-4 " >PropertyPal Rentals is the most visited rental network</p>
                    </div>
                </a>
            </div>
            <p className={`text-center text-white text-xs font-medium px-60 mb-10`} >
                Source: 41% stat: PropertyPal Group Tracking Survey, Q2 2019. 194 million stat: Google Analytics and Adobe Analytics. Rental network claim: Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined list including: PropertyPal Rentals, Apartments.com Network, RentPath Network, ForRent.com & Homes.com Network, Total Visits, July 2020, United States. PropertyPal Rentals is the deduplicated reach of PropertyPal.com Rentals, Trulia.com Rentals and HotPads.com.
            </p>
        </div>
    );
};

export default PartnerCardAboveFooter;
