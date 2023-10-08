import React from 'react';
import blogDownload from '../../../assets/images/downloadBlog.jpg'

const BlogBody4 = () => {
    const backgroundColor = "rgb(212, 250, 255)"
    return (
        <div className={`p-4 `} >
            <div className={`flex justify-evenly pt-14 rounded-3xl `} style={{backgroundColor: backgroundColor}}>
                <div className={`ml-16`} style={{width: "40%"}} >
                    <h4 className={`font-bold text-3xl text-blue-700 mb-6`} >Download the PropertyPal App</h4>
                    <h4>Don’t miss out on the right home for you — browse up-to-date listings, refine your search and more.</h4>
                    <button className={`mt-6 bg-blue-700 text-white rounded-xl p-3 font-bold text-sm`} >Download the free app</button>
                </div>
                <div style={{width: "50%"}} >
                    <img src={blogDownload} className={`rounded-3xl`} style={{height: "90%"}} alt={`alt`} />
                </div>
            </div>
        </div>
    );
};

export default BlogBody4;
