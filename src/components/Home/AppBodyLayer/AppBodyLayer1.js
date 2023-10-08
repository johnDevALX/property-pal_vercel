import React from 'react';
import './AppBodyLayer1.css'
import {Link} from "react-router-dom";

const AppBodyLayer1 = () => {
    return (
        <div>
            <div className="flex flex-cols-4 justify-around py-12">
                <div className="col-span-1 block justify-center m-auto items-center text-black" >
                    <h2 className="m-auto text-center text-2xl pb-4" >Get home recommendations</h2>
                    <p className="pb-4" >Sign in for a more personalized experience</p>
                    <div className="text-center">
                        <Link to={`/signIn`} className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:text-black" >Sign in</Link>
                    </div>
                </div>
                <div className="col-span-3 flex justify-center me-8" >
                    <div className="layer-img  w-96" >
                        <img src="https://i.postimg.cc/nzsGGndF/western-House1.jpg" alt="WesternHouse1" />
                    </div>
                    <div className="layer-img1 w-80" >
                        <img src="https://i.postimg.cc/MGRfCjy8/western-House2.jpg" alt="WesternHouse2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBodyLayer1;
