import React from 'react';
import premium from '../../../assets/images/premium.webp'
import confidence from '../../../assets/images/confidence.webp'
import {BsCheck2All} from "react-icons/bs";
const RentalBelow = () => {
    return (
        <div>
            <div className={`bg-stone-300 flex justify-evenly gap-8 px-4 py-20 mt-32`} >
                <div className={`rc-below`}>
                    <p className={`text-xl font-bold mb-3`} >Get the most from your listings with premium</p>
                    <p className={`text-md mb-6`} >For a one-time fee, you can upgrade your property to our premium listing experience — to help you manage your rental and fill vacancies fast.</p>
                    <span className={`flex mb-4 `} >
                        <p className={`text-blue-600 text-xl mr-5`} ><BsCheck2All/></p>
                        <div>
                            <p className={`text-sm font-bold`} >Increased exposure</p>
                            <p className={`text-sm`} >Get more eyes on your listing from renters searching in your area.</p>
                        </div>
                    </span>
                    <span className={`flex mb-4`} >
                        <p className={`text-blue-600 text-xl mr-5`} ><BsCheck2All/></p>
                        <div>
                            <p className={`text-sm font-bold`} >Pricing & market insights</p>
                            <p className={`text-sm`} >Track listing performance data and trends to price your rental competitively.</p>
                        </div>
                    </span>
                    <span className={`flex mb-8`} >
                        <p className={`text-blue-600 text-xl mr-5`} ><BsCheck2All/></p>
                        <div>
                            <p className={`text-sm font-bold`} >Listing recommendations</p>
                            <p className={`text-sm`} >Get customized tips to help your listing appeal to renters.</p>
                        </div>
                    </span>
                    <div>
                        <button className={`border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 rounded-lg py-3 px-10 mr-4 font-bold`} >Upgrade to premium</button>
                    </div>
                </div>
                <div className={`rc-below rc-bgImg`} style={{backgroundImage: `url(${premium})`}} >

                </div>
            </div>
            <div className={`h-96`} style={{backgroundImage: `url(${confidence})`}} >
                <div className={`pt-28 max-w-3xl m-auto text-white text-center`} >
                    <p className={`font-bold text-2xl mb-5`} >Rent with confidence</p>
                    <p className={`font-bold text-md mb-5`} >Take the hassle out of landlording with PropertyPal Rental Manager. Post a listing, screen tenants, sign a lease and collect payments all in one place.</p>
                    <button className={`bg-blue-700 text-white rounded-lg py-3 px-10 mr-4 font-bold`} >Get started</button>
                </div>
            </div>
            <div className={`h-96 mb-10`} style={{backgroundColor: '#001751'}} >
                <div className={`pt-20 max-w-xl m-auto text-white text-center`} >
                    <p className={`font-bold text-2xl mb-5`} >Get The App</p>
                    <p className={`font-bold text-md mb-6`} >Use PropertyPal Rental Manager anywhere, anytime</p>
                    <div>
                        <input type={`text`} className={`text-black p-3 rounded-lg  focus:outline-none text-sm`} placeholder={`Enter Phone Number`} />
                        <button className={`bg-blue-700 text-white rounded-lg py-3 px-10 ml-4 font-bold`} >Get started</button>
                    </div>
                    <p className={`text-slate-300 text-xs mt-6`} >Nigeria mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the PropertyPal Rental Manager app at the mobile number I provide above, and I confirm that the mobile number is mine.</p>
                </div>
            </div>
            <div className={`h-12`} >
                <p className={`items-center text-sm pl-10 my-auto`} >*Source: PropertyPal Internal Data, 2023</p>
            </div>
        </div>
    );
};

export default RentalBelow;
