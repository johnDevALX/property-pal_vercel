import React from 'react';
import BelowNav from "./BelowNav";
import AppNavbar from "../AppNavbar/AppNavbar";
import BlogBody1 from "./BlogBody/BlogBody1";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";
import BlogBody2 from "./BlogBody/BlogBody2";
import BlogBody3 from "./BlogBody/BlogBody3";
import BlogBody4 from "./BlogBody/BlogBody4";
import BlogBody5 from "./BlogBody/BlogBody5";
import BlogBody6 from "./BlogBody/BlogBody6";
import BlogBody7 from "./BlogBody/BlogBody7";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";

const Blog = () => {

    return (
        <div  >
            <AppNavbar/>
            <hr/>
            <BelowNav/>
            <BlogBody1/>
            <BlogBody2/>
            <BlogBody3/>
            <BlogBody4/>
            <BlogBody5/>
            <BlogBody6/>
            <BlogBody7/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default Blog;
