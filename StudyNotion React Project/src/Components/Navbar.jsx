import {Link} from "react-router-dom";
import React from "react";
import {toast} from 'react-hot-toast';

function Navbar(props){
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={require("../assets/Logo.svg").default} width="160" height="32" loading="lazy"/>
            </Link>

            <nav>
                <ul className="text-richblack-100 flex gap-x-6">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/#">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/#">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>


            <div className="flex item-center gap-x-4">
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className="rich-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Log In
                        </button>
                    </Link>
                }
                
                {!isLoggedIn &&
                    <Link to="/signUp">
                        <button className="rich-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign Up
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button className="rich-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged out");
                        }}>
                            Logout
                        </button>
                    </Link>
                }
                
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="rich-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;