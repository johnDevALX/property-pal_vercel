import React from 'react';

const SRFooter = () => {
    return (
        <div>
            <div>
                <div className={`flex justify-between items-center py-6 px-14`} >
                    <div className=" text-center text-sm font-medium text-black" >
                        <p>PropertyPal Help Center</p>
                    </div>
                    <div className={`flex justify-evenly items-center text-sm text-blue-700 pr-10 `}>
                        <p className={`pr-5 hover:underline `} >English (US)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SRFooter;
