import {Link, useNavigate} from "react-router-dom"
import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn})=>{
    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);

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
            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* this div contains first name and last name */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input required type="text" placeholder="enter first name" name="firstName" value={FormData.firstName} onChange={changeHandler}></input>
                    </label>
                    
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input required type="text" placeholder="enter last name" name="lastName" value={FormData.lastName} onChange={changeHandler}></input>
                    </label>
                </div>
                
                {/* email address */}
                <label>
                    <p>
                        Email Address <sup>*</sup>
                    </p>

                    <input required type="email" value={formData.email} onChange={changeHandler} placeholder="enter email id" name="email"/>
                </label>

                {/* create password and confirm password */}
                <div>
                    <label>
                        <p>
                            Create Password<sup>*</sup>
                        </p>

                        <input required type={showPassword1?"text":"password"} value={formData.password} onChange={changeHandler} placeholder="enter password" name="password"/>

                        <span onClick={()=>{
                            setShowPassword1((prev)=>{
                                return !prev;
                            });
                        }}>{showPassword1?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)}</span>
                    </label>
                    
                    <label>
                        <p>
                            Confirm Password <sup>*</sup>
                        </p>

                        <input required type={showPassword2?"text":"password"} value={formData.confirmPassword} onChange={changeHandler} placeholder="confirm password" name="confirmPassword"/>

                        <span onClick={()=>{
                            setShowPassword2((prev)=>{
                                return !prev;
                            });
                        }}>{showPassword2?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)}</span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;