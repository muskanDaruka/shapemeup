/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <section className="bg-[#35383D] py-10 px-5 flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
            <div className="flex flex-col flex-1 gap-5">
                <img src="/assets/images/shapemeup_logo_footer.png" alt="shapemeup_logo_footer" className="h-auto lg:w-4/12" />
                <h5 className="text-white text-opacity-60 text-sm text-center lg:text-left">Tone up with Shape me up for a better you.</h5>
                <ul className="flex flex-col lg:flex-row items-center justify-start gap-5">
                    <li className="text-white font-semibold text-lg"><Link href={"/about-us"}>About Us</Link></li>
                    <li className="text-white font-semibold text-lg"><Link href={"/blogs"}>Blogs</Link></li>
                    <li className="text-white font-semibold text-lg"><Link href={"/exercises"}>Exercises</Link></li>
                    <li className="text-white font-semibold text-lg"><Link href={"/coaches"}>Coaches</Link></li>
                    <li className="text-white font-semibold text-lg"><Link href={"/courses"}>Courses</Link></li>
                </ul>
                <ul className="flex items-center lg:justify-start justify-center gap-20 mt-8">
                    <li><img src="/assets/images/social_media/facebook.png" alt="Facebook" /></li>
                    <li><img src="/assets/images/social_media/twitter.png" alt="Twitter" /></li>
                    <li><img src="/assets/images/social_media/instagram.png" alt="Instagram" /></li>
                </ul>
            </div>
            <div className="flex items-start justify-center flex-col flex-1 w-full gap-5">
                <h3 className="text-3xl font-semibold text-white max-sm:text-center w-full">Get in touch with us</h3>
                <form className="w-full flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row items-center w-full gap-5">
                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label htmlFor="firstName" className="text-white text-opacity-80 text-sm">First Name</label>
                            <input type="text" name="firstName" id="firstName" className="h-12 rounded-md p-2 text-black" placeholder="First Name" />
                        </div>
                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label htmlFor="lastName" className="text-white text-opacity-80 text-sm">Last Name</label>
                            <input type="text" name="lastName" id="lastName" className="h-12 rounded-md p-2 text-black" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-opacity-80 text-sm">Email Address</label>
                        <input type="text" name="email" id="email" className="h-12 rounded-md p-2 text-black" placeholder="Email Address" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-white text-opacity-80 text-sm">Your Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" className="rounded-md p-2 text-black" placeholder="Your Message" />
                    </div>
                    <button type="submit" className="bg-[#f2994a] text-white rounded-md py-4">SEND MESSAGE</button>
                </form>
            </div>
        </section>
    )
}

export default Footer