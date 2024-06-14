/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };
    const handleStepClick = (stepNumber: number) => {
        setStep(stepNumber);
    };
    return (
        <>
            <section className="relative">
                <Link href={`/`}>
                    <div className="flex lg:flex-row">
                        <h2 className="font-bold text-[#f2994a]  mt-5  ml-[20px] lg:text-left mb-2">
                            &lt;
                        </h2>
                        <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left mb-2">
                            Back
                        </h2>
                    </div>
                </Link>
                <div>
                    <div className="w-[1025px] h-[720px] shadow-2xl flex items-center justify-center flex-col mx-auto p-5 mb-5">
                        <h1 className="text-xl text-center mb-8">Make Payment</h1>
                        <div className="flex space-x-4 mb-8">
                            <button className={`w-10 h-10 text-white rounded-full bg-[#F2994A] ${step >= 1 ? 'bg-[#F2994A]' : 'bg-gray-300'}`} onClick={() => handleStepClick(1)}>1</button>
                            <button className={`w-10 h-10 text-white rounded-full bg-[#F2994A] ${step >= 2 ? 'bg-[#F2994A]' : 'bg-gray-300'}`} onClick={() => handleStepClick(2)}>2</button>
                            <button className={`w-10 h-10 text-white rounded-full bg-[#F2994A] ${step === 3 ? 'bg-[#F2994A]' : 'bg-gray-300'}`} onClick={() => handleStepClick(3)}>3</button>
                        </div>
                        {
                            step === 1 && (
                                <>
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <div className="flex flex-col p-5 w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" id="fname" name="fname" placeholder="First Name" className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300" />
                                                </div>
                                                <div className="mb-5">
                                                    <input type="text" id="email" name="email" placeholder="Email Address" className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300" />
                                                </div>
                                                <h1 className="text-[#F2994A] font-bold ">Select Method of Payment</h1>
                                                <div className="flex items-center m-1">
                                                    <label htmlFor="creditCard">Credit Card Or Debit</label>
                                                    <input type="checkbox" id="creditCard" name="creditCard" className="ml-2 " />

                                                </div>

                                                <div className="flex items-center m-1">
                                                    <label htmlFor="paypal">Paypal</label>
                                                    <input type="checkbox" id="paypal" name="paypal" className="ml-2" />

                                                </div>

                                                <div className="flex items-center m-1">
                                                    <label htmlFor="bankTransfer">Bank Transfer</label>
                                                    <input type="checkbox" id="bankTransfer" name="bankTransfer" className="ml-2" />

                                                </div>

                                            </div>
                                            <div className="flex flex-col p-5 w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" id="lname" name="lname" placeholder="Last Name" className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300" />
                                                </div>
                                                <div className="mb-5">
                                                    <input type="text" id="address" name="address" placeholder="Address for Delivery" className="w-full md:w-60 h-[120px] rounded-md bg-white text-black px-2 py-1 border border-gray-300" />
                                                </div>
                                                <div>
                                                    <input type="number" id="phone" name="phone" placeholder="Mobile Phone" className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-[270px] h-[50px] bg-[#F2994A] text-white rounded-md ml-[160px]" onClick={handleNextStep}>Next</button>
                                    </div>
                                </>
                            )
                        }
                        {
                            step === 2 && (
                                <>
                                    <div className="flex">
                                        <img src="/assets/images/home/credit.jpeg" alt="image" className="w-[340px] h-[200px] m-6" />
                                        <div className="m-2">
                                            <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" className="w-full md:w-[350px] h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 m-5" />
                                            <div className="flex">
                                                <input type="number" id="expiry" name="expiry" placeholder="Expiry" className="w-full md:w-[165px] h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 m-5" />
                                                <input type="number" id="cvv" name="cvv" placeholder="CVV" className="w-full md:w-[165px] h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 m-5 ml-0" />
                                            </div>
                                            <input type="number" id="holderNumber" name="holderNumber" placeholder="Holder Number" className="w-full md:w-[350px] h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 m-5" />
                                        </div>

                                    </div>
                                    <div>
                                        <input type="checkbox" id="credit" name="credit" className="m-2 ml-[210px] mb-10" />
                                        <label htmlFor="saveCard">Save this credit card</label>
                                    </div>
                                    <button className="w-[270px] h-[50px] bg-[#F2994A] text-white rounded-md " onClick={handleNextStep}>Next</button>

                                </>
                            )
                        }
                        {
                            step === 3 && (
                                <>
                                    <div className="w-[130px] h-[130px] bg-[#F2994A] rounded-3xl flex items-center justify-center">
                                        <img src="/assets/images/icons/tick.png" alt="image" className="w-42 h-42 m-5 " />
                                    </div>
                                    <h1 className="text-xl m-5">Success</h1>
                                    <button className="w-[270px] h-[50px] bg-[#F2994A] text-white rounded-md " onClick={handleNextStep}>Next</button>
                                </>
                            )
                        }

                    </div >
                </div>
            </section>
            <Footer />

        </>
    );
}
