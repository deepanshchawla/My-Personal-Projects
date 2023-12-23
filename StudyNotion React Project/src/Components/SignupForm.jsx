import {Link, useNavigate} from "react-router-dom"
import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn})=>{
    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState("student");
    const navigate = useNavigate();
    const [formData,setFormData] = useState(
        {firstName:"", lastName:"",email:"",password:"", confirmPassword:""}
    );

    function changeHandler(e){
        setFormData((prevData)=>{
            return {...prevData, 
                [e.target.name]:e.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Passwords Do Not Match")
        }
        else{
            navigate("/dashboard");
            setIsLoggedIn(true);
            toast.success("Logged In");
        }
    }

    return (
        <div>
            {/* student-instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button className={`${accountType=== "student"? "bg-richblack-900 text-richblack-5":"text-richblack-200 bg-transparent"} py-2 px-5 rounded-full transition-all duration-200` } onClick={()=>{
                    setAccountType("student");
                }}>
                    Student
                </button>

                <button className={`${accountType=== "instructor"? "bg-richblack-900 text-richblack-5":"text-richblack-200 bg-transparent"} py-2 px-5 rounded-full transition-all duration-200` } onClick={()=>{
                    setAccountType("instructor");
                }}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className="">
                {/* this div contains first name and last name */}
                <div className="flex w-full gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type="text" placeholder="enter first name" name="firstName" value={FormData.firstName} onChange={changeHandler}></input>
                    </label>
                    
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type="text" placeholder="enter last name" name="lastName" value={FormData.lastName} onChange={changeHandler}></input>
                    </label>
                </div>
                
                {/* email address */}
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-[20px]">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>

                    <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type="email" value={formData.email} onChange={changeHandler} placeholder="enter email id" name="email"/>
                </label>

                {/* create password and confirm password */}
                <div className="flex gap-x-4 w-full mt-[20px]">
                    <label className="w-full relative cursor-pointer">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>

                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type={showPassword1?"text":"password"} value={formData.password} onChange={changeHandler} placeholder="enter password" name="password"/>

                        <span className="absolute right-3 top-[38px]" onClick={()=>{
                            setShowPassword1((prev)=>{
                                return !prev;
                            });
                        }}>{showPassword1?(<AiOutlineEyeInvisible fontsize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontsize={24} fill="#AFB2BF"></AiOutlineEye>)}</span>
                    </label>
                    
                    <label className="w-full relative cursor-pointer">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>

                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full " required type={showPassword2?"text":"password"} value={formData.confirmPassword} onChange={changeHandler} placeholder="confirm password" name="confirmPassword"/>

                        <span className="absolute right-3 top-[38px]" onClick={()=>{
                            setShowPassword2((prev)=>{
                                return !prev;
                            });
                        }}>{showPassword2?(<AiOutlineEyeInvisible fontsize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontsize={24} fill="#AFB2BF"></AiOutlineEye>)}</span>
                    </label>
                </div>

                <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;