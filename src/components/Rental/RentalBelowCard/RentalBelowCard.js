import React from 'react';
import './RentalBelowCard.css'

const RentalBelowCard = ({bgImg, img, pOne, pTwo, btnText}) => {
    return (
        <div className={`flex justify-evenly gap-8 my-32 mx-3 items-center`} >
            <div className={`rc-below`}>
                <p className={`text-xl font-bold mb-3`} >{pOne}</p>
                <p className={`text-md mb-6`} >{pTwo}</p>
                <div>
                    <button className={`border border-blue-700 text-blue-700 rounded-lg py-3 px-10 mr-4 font-bold`} >{btnText}</button>
                    <a href={`#`} className={`text-blue-900 hover:underline`} >Learn more</a>
                </div>
            </div>
            <div className={`rc-below rc-bgImg`} style={{backgroundImage: `url(${bgImg})`}} >
                <img className={`absolute rc-img`} src={img} alt={'willow'} />
            </div>
        </div>
    );
};

export default RentalBelowCard;
