import React from 'react';
import blog5 from '../../../assets/images/blog5.jpg';
import blog6 from '../../../assets/images/blog6.jpg';
import blog7 from '../../../assets/images/blog7.jpg';
import blog8 from '../../../assets/images/blog8.jpg';

const BlogBody3 = () => {
    return (
        <div className={` py-10 bg-white `}>
            <div className={` flex justify-between py-4 px-10 font-bold`} >
                <h4 className={`text-2xl`} >Financing</h4>
                <h4>See all</h4>
            </div>

            <div className={`flex justify-evenly py-3`} >

                <div className={`grid border mr-2 rounded-3xl shadow-2xl `} style={{width: "45%"}} >
                    <img src={blog5} className={`rounded-3xl`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={` px-4`} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >13 min read</a>
                        <h4 className={`mt-3 font-bold text-3xl mb-5 `} >21 Creative ways to save money for a home down payment</h4>
                        <h4>Budgeting for your first home? Try these tips for boosting your savings.</h4>
                    </div>
                </div>

                <div className={`grid`} style={{width: "45%"}}>
                    <div className={`flex border rounded-3xl shadow-2xl `} style={{width: "100%", height: "80%"}} >
                        <img src={blog6} className={`rounded-3xl`} alt={`blog1`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >5 min read</a>
                            <h4 className={`mt-3 text-md pb-4 mb-5 `} >Credit score Quiz for Home Buyers: How high can you score?</h4>
                        </div>
                    </div>

                    <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "100%", height: "80%"}} >
                        <img src={blog7} className={`rounded-3xl`} alt={`blog2`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >4 min read</a>
                            <h4 className={`mt-3 text-md mb-5 `} >7 Creative ways to save for your down payment</h4>
                        </div>
                    </div>

                    <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "100%", height: "80%"}} >
                        <img src={blog8} className={`rounded-3xl`} alt={`blog2`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >4 min read</a>
                            <h4 className={`mt-3 text-md mb-5 `} >6 Financing tips for first-time home buyers </h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlogBody3;
