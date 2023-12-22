import {Link} from "react-router-dom";
import React from "react";
import {toast} from 'react-hot-toast';

function Navbar(props){
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-evenly">
            <Link to="/">
                <img src={require("../assets/Logo.svg").default} width="160" height="32" loading="lazy"/>
            </Link>

            <nav>
                <ul className="flex gap-3">
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


            <div className="flex ml-5 mr-3 gap-3">
                {!isLoggedIn &&
                    <Link to="/login">
                        <button>
                            Log In
                        </button>
                    </Link>
                }
                
                {!isLoggedIn &&
                    <Link to="/signUp">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged out");
                        }}>
                            Logout
                        </button>
                    </Link>
                }
                
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;