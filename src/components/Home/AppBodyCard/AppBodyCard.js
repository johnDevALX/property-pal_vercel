import React from 'react';
import './AppBodyCard.css';
import 'animate.css';

const AppBodyCard = () => {
    return (
        <div>
            <div className="flex justify-center gap-2 py-12 bg-slate-100 " >
                <div className="body-card " >
                    <img className="mt-5" src="https://i.postimg.cc/Ls98wMbj/Buy-a-home.webp" alt="Buy-A-Home" />
                    <div className="my-7 mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >Buy A Home</p>
                        <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                        <button className=" mt-10 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Browse Homes</button>
                    </div>

                </div>
                <div className="body-card " >
                    <img className="mt-5" src="https://i.postimg.cc/CMBjR8sB/Sell-a-home.webp" alt="Sell-A-Home" />
                    <div className="my-7 mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >Sell A Home</p>
                        <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                        <button className=" mt-10 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >See Your Options</button>
                    </div>
                </div>
                <div className="body-card " >
                    <img className="mt-5" src="https://i.postimg.cc/5ybc1JZS/Rent-a-home.webp" alt="Rent-A-Home" />
                    <div className="my-7 mb-14 text-center">
                        <p className=" text-2xl font-bold text-black mb-4 " >Rent A Home</p>
                        <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                        <button className=" mt-10 bg-white border-2 border-blue-900 text-black px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white hover:border-none" >Find Rentals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBodyCard;
