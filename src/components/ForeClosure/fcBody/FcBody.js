import React from 'react';
import staticLogo from '../../../assets/images/helpImg.jpg'
import './FcBody.css'
import AppLowerFooter from "../../Home/AppLowerFooter/AppLowerFooter";

const FcBody = () => {
    return (

            <div className={`fcs flex`} >
                <div className={`sss1`} >
                    <img src={staticLogo} className={`sss1-img`}  alt={`static`}/>
                </div>
                <div className={`sss2`} >
                    <p className={`font-bold mt-3 mb-8 pl-5`}>ForeClosures</p>
                    <p className={`font-extrabold pl-5 text-xl mb-2`} >No matching results</p>
                    <p className={`mb-10 pl-5`}>Try changing your search</p>
                    <span className={`pl-5`} ><button className={`text-blue-700 hover:bg-slate-100 hover:text-sky-300 `} >Save this search</button> to get email alerts when listings hit the market.</span>

                    <div className={`bg-slate-100 mb-3 mt-12 px-4 py-6 max-w-fit`} >
                        <h2 className={`text-xs`} >
                            <p className={`font-bold`} >Disclaimer:</p> School attendance zone boundaries are supplied by Pitney Bowes and are subject to change. Check with the applicable school district prior to making a decision based on these boundaries.
                        </h2>
                        <h2 className={` text-xs mt-3`}>
                            <p className={`font-bold`} >About the ratings:</p> GreatSchools ratings are based on a comparison of test results for all schools in the state. It is designed to be a starting point to help parents make baseline comparisons, not the only factor in selecting the right school for your family. <a href="#" className={`underline hover:text-black text-blue-700`} >Learn more</a>
                        </h2>
                    </div>
                    <AppLowerFooter/>

                </div>
            </div>

    );
};

export default FcBody;
