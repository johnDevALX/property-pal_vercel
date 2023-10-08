import React from 'react';
import './RentDropdown.css'
const RentDropdown = () => {
    return (
        <div className="dropdown bg-white w-full px-20">
            <div className="flex" >
                <div className=" mr-6 mb-10" >
                    <h4 className="menu">Search For Rentals</h4>
                    <div className="grid mt-3 text-blue-700 text-sm " >
                        <a href="#" className="hover:underline" >Rental buildings</a>
                        <a href="#" className="hover:underline">Apartments for rent</a>
                        <a href="#" className="hover:underline">Houses for rent</a>
                        <a href="#" className="hover:underline">All rental listings</a>
                        <a href="#" className="hover:underline">All rental buildings</a>
                    </div>
                </div>
                <div className="">
                    <h4 className="menu1 " >Renter Hub</h4>
                    <div className="grid mt-3 text-blue-700 text-sm" >
                        <a href="#" className="hover:underline">Contacted rentals</a>
                        <a href="#" className="hover:underline">Your rental</a>
                        <a href="#" className="hover:underline">Messages</a>
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="menu" >Resources</h4>
                    <div className="grid mt-3 text-blue-700 text-sm" >
                        <a href="#" className="hover:underline">Affordability calculator</a>
                        <a href="#" className="hover:underline">Renters guide</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentDropdown;
