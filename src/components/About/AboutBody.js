import React from 'react';

const AboutBody = () => {
    return (
        <div style={{fontFamily: "Ivar Headline, Times New Roman, serif"}} className={`grid w-6/12 py-20 items-center  m-auto `} >
            <h4 className={`font-bold text-3xl text-center mb-12`}  >PropertyPal</h4>
            <h4 className={`mb-8`} >PropertyPal Group is reimagining real estate to make it easier to unlock life’s next chapter.</h4>
            <h4 className={`mb-8`} >As the most-visited real estate website in Nigeria, PropertyPal and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. PropertyPal Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase.</h4>
            <h4 className={`mb-8`} >PropertyPal Group’s brands, affiliates and subsidiaries include PropertyPal, PropertyPal Premier Agent, PropertyPal Home Loans, PropertyPal Closing Services, PropertyPal Homes, Inc. Trulia, Out East, StreetEasy, HotPads, and ShowingTime.</h4>
            <p>Visit our <a className={`text-blue-700 underline`} href={`#`} >corporate site</a> and our <a className={`text-blue-700 underline`} href={`#`} >media room.</a></p>
        </div>
    );
};

export default AboutBody;
