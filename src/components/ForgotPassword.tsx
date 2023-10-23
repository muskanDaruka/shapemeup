/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const backToLogin = () => {

}
const ForgotPassword = () => {
    return (
        <div className="w-[calc(100vw-200px)] h-5/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <center>
                <h1 className="text-3xl text-black ">Forgot Password</h1>
                <p className="font-normal text-black text-2xl">Enter your Registerd Email</p>
                <input type="text" name="email" className="w-1/3 h-23 border-slate-250 border-2 rounded-lg" />
                <button className="text-white bg-[#f2994a] font-sans text-2xl w-1/3 h-28 m-5 p-4">Send Mail</button>
                <a href="#" onClick={backToLogin} className="text-[#f2994a]" title="Back to Login">
                    Back to Login
                </a>
            </center>
        </div>
    )
}
export default ForgotPassword;