import React from 'react';

const SignInForm = () => {
    return (
        <div className="pl-3" >
            <form>
                <div className="grid">
                    <span className="text-sm font-bold text-black my-2" >Email</span>
                    <input type="text" className="bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5" placeholder="Enter email" required />
                </div>
                <div className="grid" >
                    <span className="text-sm font-bold text-black my-2" >Password</span>
                    <input type="password" className="bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white focus:outline-none rounded-sm pl-2 py-1.5" placeholder="Enter Password" required/>
                </div>
                <div className="flex items-center justify-center m-auto " >
                    <button className="text-center p-1 px-6 my-3 hover:border hover:border-spacing-2 hover:border-slate-400 text-md rounded-md bg-blue-700 text-white hover:bg-white hover:text-blue-700 " >Sign in</button>
                </div>
            </form>
            <div className="mb-4 text-center" >
                <a href="#" className="mt-3  text-md font-bold text-blue-600" >Forgot your password?</a>
            </div>
        </div>
    );
};

export default SignInForm;
