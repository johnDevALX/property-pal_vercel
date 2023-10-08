import React from 'react';
import blog1 from "../../../assets/images/sellBlog1.jpg";
import blog2 from "../../../assets/images/sellBlog2.jpg";
import blog3 from "../../../assets/images/sellBlog3.jpg";

const BlogBody5 = () => {
    return (
        <div>
            <div className={` flex justify-between py-4 px-10 font-bold`} >
                <h4 className={`text-2xl`} >Selling</h4>
                <h4>See all</h4>
            </div>

            <div className={`flex py-4 px-6`} >
                <div className={`grid border mr-2 rounded-3xl shadow-2xl `} style={{width: "45%"}} >
                    <img src={blog3} className={`rounded-3xl`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-sm mt-6 px-4`} >
                        <a className={`p-2  text-xs font-bold bg-slate-300 rounded-3xl`} >12 min read</a>
                        <h4 className={`my-6`}>9 Mistakes to Avoid When Selling Your Home</h4>
                    </div>
                </div>

                <div className={`grid border mr-2 rounded-3xl shadow-2xl `} style={{width: "45%"}} >
                    <img src={blog1} className={`rounded-3xl`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-sm mt-6 px-4`} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >6 min read</a>
                        <h4 className={`my-6`} >Best Interior Paint Colors for Selling Your House</h4>
                    </div>
                </div>

                <div className={`grid border mr-2 rounded-3xl shadow-2xl `} style={{width: "45%"}} >
                    <img src={blog2} className={`rounded-3xl`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-sm mt-6 px-4`} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >5 min read</a>
                        <h4 className={`my-6`} >Should You Renovate Your Home or Sell? Take This Quiz to Help You Decide Your Next Move</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBody5;
