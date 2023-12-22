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
        <form onSubmit={submitHandler}>
            {/* here we have enclosed the input tag inside of the label tag by doing this we do not need to link the input tag with the label tag */}
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>

                <input required type="email" placeholder="enter email id" name="email"  value={formData.email} onChange={changeHandler}/>
            </label>
            
            <label>
                <p>
                    Password <sup>*</sup>
                </p>

                <input required type={showPassword?"text":"password"}  placeholder="enter your password" name="password" value={formData.password} onChange={changeHandler}/>

                <span onClick={()=>{
                    setShowPassword((prev)=>{
                        return !prev;
                    });
                }}>{showPassword?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)}</span>

                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>
             
            <button>
                Sign In
            </button>
        </form>
    ); 
}

export default LoginForm;