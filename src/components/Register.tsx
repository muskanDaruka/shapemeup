"use client";

import { useState, useContext, MouseEvent } from "react";
import { AuthContext } from "../context/Auth";
import { useCreateUser } from "@/hooks/user.hooks";
import Image from "next/image";
const Register = () => {
  const [invalidmsg, setInvalidmsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate: createUser } = useCreateUser();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { setIsRegistrationOpen, setIsOpen, setIsForgotPasswordOpen } =
    useContext(AuthContext);

  const onSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalidmsg("");
    if (user.password !== confirmPassword) {
      setInvalidmsg("Passwords do not match");
      return;
    }
    try {
      const response = await createUser(user);
      console.log("API Response:", response);
      setIsRegistrationOpen(false);
      setIsOpen(true);
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please check your information and try again.");
    }

  };

  const password = () => {
    // <span>Password is required</span>
    setShowPassword(!showPassword);
    // <span>Password is required</span>
    if (!user.password || user.password.length < 6) {
      setInvalidmsg("Password must be at least 6 characters long");
      return false;
    }
    setInvalidmsg("");
    return true;
  };
  const handleCloseClick = () => {
    setIsRegistrationOpen(false);
  };

  const googleSignUp = () => {
    console.log("Google Login clicked");
  };
  const signIn = () => {
    console.log("SignIn clicked");
    setIsOpen(true);
    setIsForgotPasswordOpen(false);
    setIsRegistrationOpen(false);
  };
  // const signUp = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setIsRegistrationOpen(false);
  //   setIsOpen(true);
  // };

  return (
    <div className="w-[calc(100vw-200px)] h-5/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all object-cover">
      <button
        onClick={handleCloseClick}
        className="fixed top-1 right-1  pt-1 pl-2 pb-1 bg-[#f2994a] hover:bg-[#f2994a] text-white rounded-full cursor-pointer w-8 h-8"
        id="closeButton"
      >
        X
      </button>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="flex ">
          <div className="flex-shrink-0">
            <h4 className="mt-10 ml-10 text-2xl">Welcome to shape me up</h4>
            <h2 className="text-black text-2xl font-bold mb-5 ml-10 mt-5">
              Create an account
            </h2>
            <form onSubmit={onSubmitSignUp}>
              <div className="m-0 ml-10 mb-6">
                <label htmlFor="email">Email ID</label>
                <br />
                <input
                  type="text"
                  name="email"
                  value={user?.email}
                  className="w-[520px] h-12 border-slate-250 border-2 rounded-lg"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="m-0 ml-10 mb-6">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="Name"
                  value={user?.name}
                  className="w-[520px] h-12 border-slate-250 border-2 rounded-lg"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="m-0 ml-10 mb-6">
                <label htmlFor="password">Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, password: e.target.value }))
                    }
                    className="w-full h-12 border-slate-250 border-2 rounded-lg"
                  />
                  <Image
                    src={
                      showPassword
                        ? "/assets/images/login/view_password.png"
                        : "/assets/images/login/hide_password.png"
                    }
                    alt={showPassword ? "Hide Password" : "View Password"}
                    className="text-[#333] p-1  m-1 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                    width={8} height={5}
                    onClick={password}
                  />
                </div>
                {/* <span className="text-danger mb-2 ">{invalidmsg}</span> */}
              </div>
              <div className="m-0 ml-10 mb-6">
                <label htmlFor="password">Confirn Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-12 border-slate-250 border-2 rounded-lg"
                  />
                  <Image
                    src={
                      showPassword
                        ? "/assets/images/login/view_password.png"
                        : "/assets/images/login/hide_password.png"
                    }
                    alt={showPassword ? "Hide Password" : "View Password"}
                    className="text-[#333] p-1  m-1 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                    onClick={password}
                    width={8} height={5}
                  />
                </div>
                <span className="text-danger mb-2 ">{invalidmsg}</span>
              </div>
              <button
                className="mt-5 ml-10 p-2 pl-[220px] flex w-[520px] h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg"

              >
                Sign up
              </button>
              <button
                className=" mt-5 ml-10 pt-4 pl-[100px] flex w-[520px] h-15 bg-[#34383d] text-white font-sans text-2xl font-bold rounded-lg"
                onClick={googleSignUp}
              >
                <Image
                  src="/assets/images/social_media/google.png"
                  alt="Google"
                  className="m-2 pb-3"
                  width={25}
                  height={25}
                />
                Or signup with google
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
              )}
              <div className="mt-5 ml-10 text-xl">
                Already have an account?
                <button
                  onClick={signIn}
                  className="text-[#f2994a] text-xl"
                  title="Login here"
                >
                  Login Here
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[''] ml-[200px]">
            <Image
              src="/assets/images/shapemeup_logo.png"
              loading="lazy"
              alt="Shape-me-up"
              width={150}
              height={50}
              className="img-responsive modal-logo bg-[#34383d] "
            />
            <Image
              src="/assets/images/login/login_right.png"
              alt="image"
              className=" pb-30 "
              width={800}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;