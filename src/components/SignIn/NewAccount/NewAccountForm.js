import React, {useState} from 'react';
import ProfessionalForm from "./ProfesionalForm";

const NewAccountForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [radio, setRadio] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const regex = /^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).{9,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailStatus;
    let mailStatus = true;
    let report;
    let status;
    let upperStatus;
    let lowerStatus;
    let numberStatus;
    let symbolStatus;
    let lengthStatus;
    let btnStatus = false;

    const handleRadio = () => {
        setRadio(!radio);
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleEmailValue = (e) =>{
        setEmail(e.target.value)
        // const { name, value } = e.target;
        // setPayLoad((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleCurrPassword = (e) => {
        setPassword(e.target.value)
    }

    if (!emailRegex.test(email)){
        emailStatus = "Enter a valid email address";
        mailStatus = false;
    }

    if (regex.test(password)){
        report = "Strong password";
        status = true;
    } else {
        report = "Poor password"
        status = false;
    }

    if (!emailStatus && status){
        btnStatus = true;
    }

    const hasUppercase = /^(?=.*[A-Z])/.test(password);
    const hasLowercase = /^(?=.*[a-z])/.test(password);
    const hasNumber = /^(?=.*[0-9])/.test(password);
    const hasSymbol = /^(?=.*[^A-Za-z0-9])/.test(password);
    const hasLengthEight = /^.{9,}$/.test(password);

    upperStatus = hasUppercase;
    lowerStatus = hasLowercase;
    numberStatus = hasNumber;
    symbolStatus = hasSymbol;
    lengthStatus = hasLengthEight;

    return (
        <div className="pl-3" >
            <form>
                <div className="grid">
                    <span className="text-sm font-bold text-black my-2" >Email</span>
                    <input type="email" value={email} onChange={handleEmailValue} className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white ${mailStatus? "focus:border-green-600" : "focus:border-red-700"} focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="Enter email" required />
                    {email && <span className={`text-red-700 text-xs`} >{emailStatus}</span>}
                </div>
                <div className="grid" >
                    <span className="flex justify-between text-sm font-bold text-black my-2" >Password <i className={`text-end text-sm font-medium ${status ? "text-green-600" : "text-red-600"} `} >{password && report}</i></span>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={handleCurrPassword} className={`bg-slate-100 text-sm text-black border border-spacing-2 border-slate-400  hover:border-blue-500 focus:bg-white ${status? "focus:border-green-600" : "focus:border-red-700"} focus:outline-none rounded-sm pl-2 py-1.5`} placeholder="Create password"  required/>
                </div>
                <div>
                    <input type="checkbox" onClick={handleShowPassword} /> <span className={`font-medium text-sm`} >Show password</span>
                </div>
                <div className={`text-sm pl-3 mt-2`} >
                    <p className={`${lengthStatus ? "hidden" : "text-red-700"}`} >At least 8 characters</p>
                    <p className={`${numberStatus ? "hidden" : "text-red-700"}`} >At least 1 number</p>
                    <p className={`${symbolStatus ? "hidden" : "text-red-700"}`} >At least 1 special character</p>
                    <p className={`${lowerStatus ? "hidden" : "text-red-700"}`} >At least 1 lowercase letter</p>
                    <p className={`${upperStatus ? "hidden" : "text-red-700"}`} >At least 1 uppercase letter</p>
                </div>
                <div className={`my-4`} >
                    <input type="checkbox" onClick={handleRadio} /> <span className={`font-bold`} >I am a landlord or industry professional</span>
                </div>
                <div className={`${radio ? "grid" : "hidden"}`} ><ProfessionalForm/></div>


                <div className="flex items-center justify-center m-auto " >
                    <button className={`text-center p-1 px-6 my-3 hover:border hover:border-spacing-2 hover:border-slate-400 text-md rounded-md bg-blue-700 text-white hover:bg-white hover:text-blue-700 ${btnStatus ? "" : "pointer-events-none opacity-50"}  `} >Submit</button>
                </div>
            </form>
            <div className="mb-4 text-center" >
                <span className={`text-xs text-black`} >By submitting, I accept Property<i className={`text-blue-700 font-medium`} >Pal</i>'s <a href="#" className="underline text-blue-600" >terms of use.</a></span>
            </div>
        </div>
    );
};

export default NewAccountForm;
