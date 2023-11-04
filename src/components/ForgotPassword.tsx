/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/Auth";


const ForgetPassword: React.FC = () => {
    const { setIsOpen, setIsForgotPasswordOpen, setIsRegistrationOpen } = useContext(AuthContext);
    const backToLogin = () => {
        setIsOpen(true);
        setIsForgotPasswordOpen(false);
        setIsRegistrationOpen(false);
    }
    const handleCloseClick = () => {
        console.log("Close button clicked");
    }

    return (
        <div className="w-[calc(50vw-100px)]  h-3/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="border-transparent mt-[40px] mb-[100px] px-4 pb-4 sm:p-6 sm:pb-4">
                <button onClick={handleCloseClick} className="fixed top-2 right-1  pt-1 pl-2 pb-1 bg-[#f2994a] hover:bg-[#f2994a] text-white rounded-full cursor-pointer w-8 h-8" id="closeButton">
                    X
                </button>
                <center>
                    <h1 className="m-[50px] text-2xl text-black font-bold">Forgot Password</h1>
                    <p className="font-normal text-black text-xl float-left ml-[140px]">Enter your Registerd Email</p><br />
                    <input type="text" name="email" className="w-[500px] m-5 h-12 border-slate-250 border-2 rounded-lg" /><br />
                    <button className="w-[500px] h-12 bg-[#f2994a] border-slate-250 border-2 rounded-lg">Send Mail</button><br />
                    <button onClick={backToLogin} className="text-[#f2994a] float-left ml-[140px] mt-5 " title="Back to Login">
                        Back to Login
                    </button>
                </center>
            </div>
        </div>
    )
}
export default ForgetPassword;