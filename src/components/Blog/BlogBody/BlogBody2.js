import React from 'react';
import blog1 from '../../../assets/images/blog1.jpg';
import blog2 from '../../../assets/images/blog2.jpg';
import blog from '../../../assets/images/blog.jpg';
import blog4 from '../../../assets/images/blog4.jpg';

const BlogBody2 = () => {
    return (
        <div className={` py-10 bg-white `}>
            <div className={` flex justify-between p-4 font-bold`} >
                <h4 className={`text-2xl`} >Buying</h4>
                <h4>See all</h4>
            </div>

            <div className={`flex justify-evenly px-4 py-3`} >

                <div className={`flex border mr-2 rounded-3xl shadow-2xl `} style={{width: "49%", height: "50%"}} >
                    <img src={blog1} className={`rounded-3xl`} alt={`blog1`} style={{width: "50%"}} />
                    <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >9 min read</a>
                        <h4 className={`mt-3 text-md mb-5 `} >How to use PropertyPal </h4>
                    </div>
                </div>

                <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "49%", height: "50%"}} >
                    <img src={blog2} className={`rounded-3xl`} alt={`blog2`} style={{width: "50%"}} />
                    <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >13 min read</a>
                        <h4 className={`mt-3 text-md mb-5 `} >A guide to First-Time Home Buyers Program</h4>
                    </div>
                </div>
            </div>
            <div className={`flex justify-evenly px-4 py-3`} >
                <div className={`flex border mr-2 rounded-3xl shadow-2xl `} style={{width: "49%", height: "50%"}} >
                    <img src={blog} className={`rounded-3xl`} alt={`blog1`} style={{width: "50%"}} />
                    <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >8 min read</a>
                        <h4 className={`mt-3 text-md mb-5 `} >6 causes of Buyer's remorse after buying a house, according to home owners </h4>
                    </div>
                </div>

                <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "49%", height: "50%"}} >
                    <img src={blog4} className={`rounded-3xl`} alt={`blog2`} style={{width: "45%"}} />
                    <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >18 min read</a>
                        <h4 className={`mt-3 text-md mb-5 `} >10 steps to buying a house</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBody2;
