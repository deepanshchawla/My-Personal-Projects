import {Link} from "react-router-dom"
import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png"

function Template({title, description1, description2, image, formtype, setIsLoggedIn}){

    return (
        <div>
            <div>
                <h1>
                    {title}
                </h1>

                <p>
                    <span>{description1}</span>
                    <span>{description2}</span>
                </p>

                {formtype==="signup"?<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>:<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>}
                {/* if(formtype=="signUp"){
                    <Signup></Signup>
                }

                else{
                    <LoginForm></LoginForm>
                } */}

                <div>
                    <div>

                    </div>

                    <p>OR</p>

                    <div>

                    </div>
                </div>

                <button>
                    <p>Signup With Google</p>
                </button>
            </div>

            <div>
                <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy"/>
                <img src={image} alt="students" width={558} height={490} loading="lazy"/>

            </div>
        </div>
    );
}

export default Template;