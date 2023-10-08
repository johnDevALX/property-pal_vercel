import React from 'react';
import {BsFacebook, BsInstagram, BsTiktok, BsTwitter} from "react-icons/bs";
import Image from "../../../assets/svg/footer-art.svg";

const AppLowerFooter = () => {
    return (
        <div>
            <div className="grid py-10">
                <div className="flex m-auto text-xs text-center">
                    <p>PropertyPal is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please</p>
                </div>
                <div className="text-center  mb-5" >
                    <a href="#" className="text-blue-600  text-xs underline" >let us know.</a>
                </div>
                <div>
                    <p className=" m-auto text-xs text-center">For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
                </div>
                <img className="mt-6 m-auto w-48 items-center " src="https://i.postimg.cc/KYsn0Sgz/app.jpg" alt="app stores" />
                <div className="px-4 flex m-auto text-center mt-6" >
                    <p className="text-1xl font-medium text-black" >Property<span className="text-blue-700" >Pal</span></p>
                    <span className=" px-4 flex" >
                        <i className="text-xs pt-1" >Follow us:</i>
                        <div className="text-blue-700 flex text-2xl px-2 justify-between" >
                            <a href="https://www.facebook.com" className="px-1" ><BsFacebook/> </a>
                            <a href="https://www.instagram.com" className="px-1" ><BsInstagram/> </a>
                            <a href="https://www.tiktok.com" className="px-1" ><BsTiktok/> </a>
                            <a  href="https://www.twitter.com" ><BsTwitter/> </a>
                        </div>
                        <i className="text-xs pt-1"> © 2022-2023 PropertyPal</i>
                    </span>
                </div>
            </div>
            <div className={`mb-2`} >
                <img src={Image} alt="footer-art" />
            </div>
        </div>
    );
};

export default AppLowerFooter;
