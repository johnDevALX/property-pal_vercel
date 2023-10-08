import React from 'react';
import RentalBg from '../../../assets/images/rental.webp'
import './RentalBody.css'
import {BsArrowDownCircle} from "react-icons/bs";

const RentalBody = ({id}) => {
    return (
        <div >
            <div className={`flex items-center font-medium text-sm my-4 ml-7`} >
                <a className={`mr-4`} >PropertyPal rental manager</a>
                <a className={`mr-4`}>Resources</a>
                <a className={`mr-4`}>Price my rental</a>
                <a>Post a listing</a>
            </div>
            <div >
                <div className={`rental-body  `} style={{backgroundImage: `url(${RentalBg})`}}>
                    <div className={`text-center pt-44 m-auto text-white font-bold`} >
                        <p className={`text-5xl `} >List your rental. Screen tenants.</p>
                        <p className={`text-5xl py-3`} >Sign a lease. Get paid.</p>
                        <p className={`rent text-1xl `} >All in one place with PropertyPal Rental Manager.</p>
                        <div className={`py-5`} >
                            <button className={`rent bg-blue-600 rounded-lg p-4`} >List Your properties for free</button>
                        </div>
                        <span className={`text-sm font-medium`} >Already have an account? <a href={`#`} className={`underline text-md`} >Sign in</a></span>
                        <div className={`grid items-center m-auto mt-16 mb-4`} >
                            <a href={`#${id}`} className={`text-xl text-center m-auto font-bold`} ><BsArrowDownCircle/></a>
                            <p className={`text-sm font-medium `} >More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalBody;
