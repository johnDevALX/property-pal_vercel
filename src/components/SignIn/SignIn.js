import React, {useState} from 'react';
import './SignIn.css'
import {BsApple, BsFacebook, BsGoogle} from "react-icons/bs";
import SignInForm from "./SignInForm/SignInForm";
import NewAccountForm from "./NewAccount/NewAccountForm";
import AppNavbar from "../AppNavbar/AppNavbar";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";


const SignIn = () => {
    const [signInForm, setSignInForm] = useState(false);
    const [newAccForm, setNewAccForm] = useState(false);

    function showSignInForm(){
        setSignInForm(!signInForm);
        setNewAccForm(false)
    }
    function showNewAccForm(){
        setNewAccForm(!newAccForm);
        setSignInForm(false)
    }

    return (
        <div>
            <AppNavbar/>
            <hr/>
            <div className="mt-4">
                <div className="flex m-auto justify-between items-center" >
                    <div className="coll" ></div>

                    <div  className="sign grid items-center " >
                        <h4 className="text-center text-black font-medium text-2xl" >Welcome to Property<i className="text-blue-700 font-bold" >Pal</i></h4>
                        <div className="flex items-center mt-5">
                            <button onClick={showSignInForm} className={`focus:border-b-4 focus:border-blue-700 pr-4 pb-2 mr-1 ${signInForm && "border-b-4 border-blue-700"} `} >Sign in</button>
                            <button onClick={showNewAccForm} className={`focus:border-b-4 focus:border-blue-700 pr-4 pb-2 ${newAccForm && "border-b-4 border-blue-700"} `} >New account</button>

                        </div>
                        <hr/>
                        {signInForm ? <SignInForm/> : <p></p>}
                        {newAccForm ? <NewAccountForm/> : <p></p>}
                        <hr/>
                        <h4 aria-checked="true" className="aria-checked:text-center mt-4" >Or Connect with:</h4>
                        <div className="grid mt-4 mb-8" >
                            <button className="flex p-1 mb-3 border border-spacing-2 border-slate-400 rounded-md hover:bg-blue-100 " ><span className=" text-blue-700 pl-2" ><BsApple/></span> <p className="connect pl-8 text-sm " >Connect with Apple</p></button>
                            <button className="flex p-1 mb-3 border border-spacing-2 border-slate-400 rounded-md hover:bg-blue-100" ><span className="text-blue-700 pl-2" ><BsFacebook/></span> <p className="connect pl-8 text-sm" >Connect with Facebook</p></button>
                            <button className="flex p-1 border border-spacing-2 border-slate-400 rounded-md hover:bg-blue-100" ><span className="text-blue-700 pl-2" ><BsGoogle/></span> <p className="connect pl-8 text-sm" >Connect with Google</p></button>
                        </div>
                    </div>

                    <div className="coll" ></div>
                </div>
            </div>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default SignIn;
