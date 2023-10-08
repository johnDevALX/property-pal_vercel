import React from 'react';
import RentalNavbar from "./RentalNavbar/RentalNavbar";
import RentalBody from "./RentalBody/RentalBody";
import RentalCard from "./RentalCard/RentalCard";
import RentalBelowCard from "./RentalBelowCard/RentalBelowCard";
import RentalLeftCard from "./RentalLeftCard/RentalLeftCard";
import applicationBg from '../../assets/images/applicationBg.webp';
import application from '../../assets/images/application.webp';
import willowBg from '../../assets/images/willowBg.webp'
import willow from '../../assets/images/willow.webp'
import leaseBg from '../../assets/images/leaseBg.webp'
import lease from '../../assets/images/lease.webp'
import paymentBg from '../../assets/images/paymentBg.webp'
import payment from '../../assets/images/payment.webp'
import RentalBelow from "./RentalBelow/RentalBelow";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";

const Rental = () => {
    let id = "move";
    let applicationT1 = "Screen tenants with online rental applications";
    let applicationT2 = "Sign your next tenant with confidence using our online rental applications. Save time with credit reports, background checks, eviction history and income verification — all in one place. ⓘ";
    let applicationBtn = "Accept application";
    let willowT1 = "Post your rental listing for free";
    let willowT2 = "PropertyPal Rental Manager's easy-to-use tools let you list your property where millions of renters search each month. Plus, messaging and tenant screening are integrated into our listing platform to help you find and screen applicants quickly.";
    let willowBtn = "Get Started";
    let leaseT1 = "Sign a rental lease";
    let leaseT2 = "Create your rental lease using our online lease builder and templates drafted with local law firms, or upload your own lease and e-sign it with your renters. ⓘ";
    let leaseBtn = "Create a lease";
    let paymentT1 = "Collect rent payments";
    let paymentT2 = "The convenient way for landlords to get paid. Rent, utilities, move-in fees and more are deposited straight into your bank account — at no cost to you.";
    let paymentBtn = "Get paid";

    return (
        <div>
            <RentalNavbar/>
            <hr/>
            <RentalBody id={id} />
            <RentalCard id={id} />
            <RentalBelowCard bgImg={willowBg} img={willow} pOne={willowT1} pTwo={willowT2} btnText={willowBtn}   />
            <RentalLeftCard bgImg={applicationBg} img={application} pOne={applicationT1} pTwo={applicationT2} btnText={applicationBtn} />
            <RentalBelowCard bgImg={leaseBg} img={lease} pOne={leaseT1} pTwo={leaseT2} btnText={leaseBtn}   />
            <RentalLeftCard bgImg={paymentBg} img={payment} pOne={paymentT1} pTwo={paymentT2} btnText={paymentBtn} />
            <RentalBelow/>
            <hr/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default Rental;
