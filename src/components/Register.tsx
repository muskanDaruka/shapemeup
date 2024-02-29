"use client";

import { useState, useContext, MouseEvent } from "react";
import { AuthContext } from "../context/Auth";
import { useCreateUser } from "@/hooks/user.hooks";
import Image from "next/image";
const Register = () => {
  const [invalidmsg, setInvalidmsg] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const { mutate: createUser } = useCreateUser();
  console.log("createUser:", createUser);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const { setIsRegistrationOpen, setIsOpen, setIsForgotPasswordOpen } =
    useContext(AuthContext);

  const onSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalidmsg("");
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (user.password !== user.confirmPassword) {
      setInvalidmsg("Passwords do not match");
      return;
    }
    try {
      console.log("try working");
      const response = await createUser(user);
      console.log("API Response:", response);

      // if (response.status === 401) {
      //   setError("User already exists with this email. Please login instead.");
      //   return;
      // }
      console.log("Registration Successfull")
      setIsRegistrationOpen(false);
      setIsOpen(true);
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please check your information and try again.");
      return;
    }
  };
  const passwordConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setInvalidmsg("");
    if (!showConfirmPassword && user.password !== user.confirmPassword) {
      setInvalidmsg("Passwords do not match");
      return false;
    }
    return true;
  }
  const password = () => {
    setShowPassword(!showPassword);
    if (!showPassword && user.password.length < 6) {
      setError("Password must be at least 6 characters long");
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

  return (
    <div className="max-w-screen-md sm:max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl w-[calc(100vw-200px)] h-5/6  transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all object-cover">
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
                    className="text-[#333] p-1 w-8 h-5 m-1 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                    onClick={password}
                    width={20}
                    height={20}
                  />
                </div>

                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}
              </div>
              <div className="m-0 ml-10 mb-6">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) => setUser((prev) => ({ ...prev, confirmPassword: e.target.value }))
                    }
                    className="w-full h-12 border-slate-250 border-2 rounded-lg"
                  />
                  <Image
                    src={
                      showConfirmPassword
                        ? "/assets/images/login/view_password.png"
                        : "/assets/images/login/hide_password.png"
                    }
                    alt={showConfirmPassword ? "Hide Password" : "View Password"}
                    className="w-8 h-5 absolute p-1 m-1 right-3 cursor-pointer text-[#333]"
                    onClick={passwordConfirm}
                    width={8}
                    height={5}
                  />
                </div>

                {invalidmsg && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{invalidmsg}</div>
                )}
                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}
              </div>
              <button
                className="flex items-center justify-center ml-10 w-[520px] h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg"

              >
                Sign up
              </button>
              <button
                className=" ml-10 flex items-center justify-center mt-6 w-[520px] p-2 h-15 bg-[#34383d] text-white font-sans text-2xl font-bold rounded-lg"
                onClick={googleSignUp}
              >
                <Image
                  src="/assets/images/social_media/google.png"
                  alt="Google"
                  className="m-2 flex items-center justify-center"
                  width={25}
                  height={25}
                />
                Or signup with google
              </button>
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