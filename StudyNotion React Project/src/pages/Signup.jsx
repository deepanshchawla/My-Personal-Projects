import Template from "../Components/Template";
import React from "react";
import signupImg from '../assets/signup.png'

function Signup({setIsLoggedIn}){
    return (
        <Template 
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond." 
            description2="Education to future-proof your career." 
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        >

        </Template>
    );
}

export default Signup;