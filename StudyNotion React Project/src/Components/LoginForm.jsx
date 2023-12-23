import {Link, useNavigate} from "react-router-dom"
import React from "react";
import { useState} from "react";

import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast } from 'react-hot-toast';

function LoginForm({setIsLoggedIn}){
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"", password:""
    });

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(e){
        setFormData((prevdata)=>{
            return {...prevdata,
                [e.target.name]:e.target.value
            }
        });
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submitHandler}>
            {/* here we have enclosed the input tag inside of the label tag by doing this we do not need to link the input tag with the label tag */}
            <label className="w-full ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>

                <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full" required type="email" placeholder="enter email id" name="email"  value={formData.email} onChange={changeHandler}/>
            </label>
            
            <label className="w-full relative cursor-pointer">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>

                <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type={showPassword?"text":"password"}  placeholder="enter your password" name="password" value={formData.password} onChange={changeHandler}/>

                <span className="absolute right-3 top-[38px]" onClick={()=>{
                    setShowPassword((prev)=>{
                        return !prev;
                    });
                }}>{showPassword?(<AiOutlineEyeInvisible fontsize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontsize={24} fill="#AFB2BF"></AiOutlineEye>)}</span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 w-full max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>
             
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
                Sign In
            </button>
        </form>
    ); 
}

export default LoginForm;