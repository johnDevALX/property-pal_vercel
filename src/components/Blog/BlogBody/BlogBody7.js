import React from 'react';
import f1 from '../../../assets/images/financeBlog.jpg'
import f2 from '../../../assets/images/financeBlog2.jpg'
import f3 from '../../../assets/images/financeBlog3.jpg'
import f4 from '../../../assets/images/financeBlog4.jpg'

const BlogBody7 = () => {
    return (
        <div className={` py-10 bg-white `}>
            <div className={` flex justify-between py-4 px-10 font-bold`} >
                <h4 className={`text-2xl`} >Owning</h4>
                <h4>See all</h4>
            </div>

            <div className={`flex justify-evenly py-3`} >

                <div className={`grid border mr-2 rounded-3xl shadow-2xl `} style={{width: "45%"}} >
                    <img src={f1} className={`rounded-3xl`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-sm mt-6 px-4`} >
                        <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >5 min read</a>
                        <h4 className={`mt-3 font-bold text-3xl mb-5 `} >8 Value-Adding Home Improvements You Can Do for $1,000 or Less</h4>
                        <h4 className={`mb-3`} > Looking for home upgrades that add value without blowing your renovation budget? This list has great suggestions.</h4>
                    </div>
                </div>

                <div className={`grid`} style={{width: "45%"}}>
                    <div className={`flex border rounded-3xl shadow-2xl `} style={{width: "100%", height: "80%"}} >
                        <img src={f2} className={`rounded-3xl`} alt={`blog1`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >12 min read</a>
                            <h4 className={`mt-3 text-sm pb-4 mb-5 `} >Home Solar: A Beginner's Guide to Setting Up a Residential System</h4>
                        </div>
                    </div>

                    <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "100%", height: "80%"}} >
                        <img src={f3} className={`rounded-3xl`} alt={`blog2`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >9 min read</a>
                            <h4 className={`mt-3 text-sm mb-5 `} >Interior Design Styles 101: 17 Decor Styles You Need to Know</h4>
                        </div>
                    </div>

                    <div className={`flex border rounded-3xl shadow-2xl`}  style={{width: "100%", height: "80%"}} >
                        <img src={f4} className={`rounded-3xl`} alt={`blog2`} style={{width: "50%"}} />
                        <div className={`py-5 px-4 mt-6`} style={{width: "50%"}} >
                            <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >10 min read</a>
                            <h4 className={`mt-3 text-sm mb-5 `} >Home Stagers and Landscapers Swear By These 7 Plants for Your Home </h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlogBody7;
