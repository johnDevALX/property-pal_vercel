import React from 'react';
import './RentalLeftCard.css'

const RentalLeftCard = ({bgImg, img, pOne, pTwo, btnText}) => {
    return (
        <div className={`flex justify-evenly gap-8 my-32 mx-3 items-center`} >
            <div className={`rc-below rc-leftBgImg`} style={{backgroundImage: `url(${bgImg})`}} >
                <img className={`absolute rc-leftImg`} src={img} alt={'willow'} />
            </div>
            <div className={`rc-left`}>
                <p className={`text-xl font-bold mb-3`} >{pOne}</p>
                <p className={`text-md mb-6`} >{pTwo}</p>
                <div>
                    <button className={`border font-bold text-blue-700 border-blue-700 rounded-lg py-3 px-10 mr-4`} >{btnText}</button>
                    <a href={`#`} className={`text-blue-900 hover:underline`} >Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default RentalLeftCard;
