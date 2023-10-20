/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const Register = () => {
    const [invalidmsg, setInvalidmsg] = useState("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const onSubmitSignUp = (e) => {
        e.target.value();
        // <span>Email is required</span>
        // <span>Enter a valid email address</span>
    };
    const password = () => {
        // <span>Password is required</span>
        setShowPassword(!showPassword);
        // <span>Password is required</span>
        if (!password || password.length < 6) {
            setInvalidmsg("Password must be at least 6 characters long");
            return false;
        }
        setInvalidmsg("");
        return true;
    };
    const handleCloseClick = () => {
        console.log("Close button clicked");
    }
    const googleSignUp = () => {
        console.log("Google Login clicked");
    };
    const signUp = () => {
        console.log("Signup clicked");
    };

    return (
        <div className="w-[calc(100vw-200px)] h-5/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all object-cover">
            <button onClick={handleCloseClick} className="fixed top-1 right-1  pt-1 pl-2 pb-1 bg-[#f2994a] hover:bg-[#f2994a] text-white rounded-full cursor-pointer w-8 h-8" id="closeButton">
                X
            </button>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex w-screen justify-evenly">
                    <div>
                        <h4 className="mt-20">Welcome to shape me up</h4>
                        <h2 className="text-black text-2xl font-bold mb-5 mt-5">Create an account</h2>
                        <form onSubmit={onSubmitSignUp}>
                            <div className="m-0 mb-6">
                                <label htmlFor="email">Email ID</label><br />
                                <input type="text" name="email" value={email} className="w-full h-12 border-slate-250 border-2 rounded-lg" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="m-0 mb-6">
                                <label htmlFor="name">Name</label><br />
                                <input type="text" name="Name" value={name} className="w-full h-12 border-slate-250 border-2 rounded-lg" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="m-0 mb-6">
                                <label htmlFor="password">Password</label>
                                <div className="flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="w-full h-12 border-slate-250 border-2 rounded-lg"
                                    />
                                    <img src={showPassword ? "/assets/images/login/view_password.png" : "/assets/images/login/hide_password.png"}
                                        alt={showPassword ? "Hide Password" : "View Password"}
                                        className="text-[#333] p-1 w-8 h-5 m-1 rounded-lg"
                                        onClick={password}
                                    />
                                </div>
                                {/* <span className="text-danger mb-2 ">{invalidmsg}</span> */}
                            </div>
                            <div className="m-0 mb-6">
                                <label htmlFor="password">Confirn Password</label>
                                <div className="flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="w-full h-12 border-slate-250 border-2 rounded-lg"
                                    />
                                    <img src={showPassword ? "/assets/images/login/view_password.png" : "/assets/images/login/hide_password.png"}
                                        alt={showPassword ? "Hide Password" : "View Password"}
                                        className="text-[#333] p-1 w-8 h-5 m-1 rounded-lg"
                                        onClick={password}
                                    />
                                </div>
                                <span className="text-danger mb-2 ">{invalidmsg}</span>
                            </div>
                            <button className=" mt-5 p-2 pl-36 flex w-full h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg" onClick={signUp}>Sign up</button>
                            <button className=" mt-5 pt-4 flex w-full h-15 bg-[#34383d] text-white font-sans text-2xl font-bold rounded-lg" onClick={googleSignUp}>
                                <img
                                    src="/assets/images/social_media/google.png"
                                    alt="Google"
                                    className="m-2  pb-3"
                                />
                                Or signup with google
                            </button>
                            <div className="mt-5">
                                Already have an account?
                                <a href="/login" onClick={signUp} className="text-[#f2994a]" title="Login here">
                                    Login here
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="bg-['']">
                        <img
                            src="/assets/images/shapemeup_logo.png"
                            loading="lazy"
                            alt="Shape-me-up"
                            className="img-responsive modal-logo bg-[#34383d] h-auto"
                        />
                        <img
                            src="/assets/images/login/login_right.png"
                            alt="image"
                            className="h-auto w-full pb-30 "
                        />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;
