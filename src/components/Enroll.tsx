import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/Auth";
import Image from "next/image";

const Enroll = () => {
    const { setIsOpen, setIsForgotPasswordOpen, setIsRegistrationOpen, setIsEnroll } =
        useContext(AuthContext);
    const signUpEnroll = () => {
        setIsOpen(false);
        setIsEnroll(false);
        setIsForgotPasswordOpen(false);
        setIsRegistrationOpen(true);
    };
    const handleCloseClick = () => {
        setIsEnroll(false);
    };
    return (
        <>
            <div className="w-[calc(50vw-400px)]  h-4/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-5">

                <button
                    onClick={handleCloseClick}
                    className="flex items-center justify-center fixed top-1 right-1 bg-[#FBEFB0] hover:bg-opacity-50 text-white rounded-full cursor-pointer w-[50px] h-[50px]"
                    id="closeButton"
                >
                    <Image
                        src="/assets/images/icons/close.png"
                        alt="close"
                        width={24}
                        height={24}
                    />
                </button>
                <div>
                    <Image
                        src={`/assets/images/home/homebanner.png`}
                        alt="banner"
                        className="w-full h-full -z-10 "
                        width={500}
                        height={260}
                    />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-center p-2">Signup to Enroll</h1>
                    <p className="text-xl opacity-50">Set up an account to enroll into our fitness classes </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li className="text-normal" >Take your fitness goals to the next level with one-on-one personal training.</li>
                        <li className="text-normal">Train when it&apos;s convenient for you, with the best trainers guiding you.</li>
                    </ul>
                </div>
                <button
                    onClick={signUpEnroll}
                    className="bg-[#f2994a] text-white float-left mt-5  w-full h-[50px]"
                    title="Sign up"
                >
                    Sign Up
                </button>
            </div>
        </>
    )
}
export default Enroll;