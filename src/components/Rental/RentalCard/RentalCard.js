import React from 'react';
import './RentalCard.css'
import Trust from '../../../assets/images/trust.webp';
import Vacancy from '../../../assets/images/vacancy.webp'
import Million from '../../../assets/images/million.webp'

const RentalCard = ({id}) => {
    return (
        <div>
            <div className={`p-14 `} id={id} >
                <div className="flex justify-evenly gap-12 py-3 " >
                    <a className="rc-body " >
                        <img className="rbody-img rounded-t-lg m-auto" src={Vacancy} alt="Buy" />
                        <div className="mb-14 text-center">
                            <p className=" text-2xl font-medium pt-3 text-black mb-4 " >Fill vacancies and manage properties</p>
                            <p className=" text-md font-medium text-black mb-2 " >Landlording made simple, whether you have one rental or an entire portfolio.</p>
                        </div>
                    </a>
                    <a className="rc-body" >
                        <img className="rbody-img rounded-t-lg m-auto" src={Million} alt="million" />
                        <div className="mb-14 text-center">
                            <p className=" text-2xl font-medium pt-3 text-black mb-4 " >Over 30 million visitors each month*</p>
                            <p className=" text-md font-medium text-black mb-2 " >List your property for free on PropertyPal, Trulia and HotPads to help you find your perfect renter.</p>
                        </div>
                    </a>
                    <a className="rc-body" >
                        <img className="rbody-img rounded-t-lg m-auto" src={Trust} alt="network" />
                        <div className="mb-14 text-center">
                            <p className=" text-2xl font-medium pt-3 text-black mb-4 " >A brand you can trust</p>
                            <p className=" text-md font-medium text-black mb-2 " >Landlord tools built by industry experts and the brand that knows real estate.</p>
                        </div>
                    </a>
                </div>
            </div>
            <p className={`text-3xl m-auto text-center font-medium`} >It's easier than ever to be a landlord</p>
            <p className={`text-center mt-2`} >Save time with our property management tools that help you get what you need — signed leases and rent payments.</p>
        </div>
    );
};

export default RentalCard;
