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
    <div className="flex h-5/6  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all object-cover">
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
      <div className="bg-white">
        <div className="flex">
          <div className="flex-1">
            <Image
              src="/assets/images/shapemeup_logo.png"
              loading="lazy"
              alt="Shape-me-up"
              width={150}
              height={50}
              className="img-responsive modal-logo bg-[#34383d] h-[40px] object-left-top hidden sm:block"
            />
            <div className="p-5">
              <h4 className="ml-2 text-sm">Welcome to shape me up</h4>
              <h2 className="text-black text-2xl font-bold ml-2">
                Create an account
              </h2>
              <form onSubmit={onSubmitSignUp}>
                <div className="ml-2">
                  <label htmlFor="email" className="text-sm">Email ID</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    value={user?.email}
                    className="w-[522px] h-[40px] border-slate-250 border-2 rounded-lg"
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
                <div className="ml-2">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <br />
                  <input
                    type="text"
                    name="Name"
                    value={user?.name}
                    className="w-[522px] h-[40px] border-slate-250 border-2 rounded-lg"
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div className="ml-2">
                  <label htmlFor="password" className="text-sm">Password</label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, password: e.target.value }))
                      }
                      className="w-[522px] h-[40px] border-slate-250 border-2 rounded-lg pr-10"
                    />
                    <Image
                      src={
                        showPassword
                          ? "/assets/images/login/view_password.png"
                          : "/assets/images/login/hide_password.png"
                      }
                      alt={showPassword ? "Hide Password" : "View Password"}
                      className="text-[#333] p-1 w-8 h-5 m-0 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-32 cursor-pointer"
                      onClick={password}
                      width={20}
                      height={20}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                  )}
                </div>
                <div className="ml-2">
                  <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                  <div className="relative flex items-center">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={(e) => setUser((prev) => ({ ...prev, confirmPassword: e.target.value }))
                      }
                      className="w-[522px] h-[40px] border-slate-250 border-2 rounded-lg"
                    />
                    <Image
                      src={
                        showConfirmPassword
                          ? "/assets/images/login/view_password.png"
                          : "/assets/images/login/hide_password.png"
                      }
                      alt={showConfirmPassword ? "Hide Password" : "View Password"}
                      className="text-[#333] p-1 w-8 h-5 m-0 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-32 cursor-pointer"
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
                  className="m-2 flex items-center justify-center w-[522px] h-[40px] bg-[#f2994a] text-white font-sans font-bold text-sm rounded-lg"

                >
                  Sign up
                </button>
                <button
                  className=" m-2 flex items-center justify-center  w-[522px] h-[40px]  bg-[#34383d] text-white font-sans text-sm font-bold rounded-lg"
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
                <div className="text-sm text-center mr-16">
                  Already have an account?
                  <button
                    onClick={signIn}
                    className="text-[#f2994a] text-sm"
                    title="Login here"
                  >
                    Login Here
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/images/login/login_right.png"
              alt="image"
              className="object-cover"
              width={800}
              height={899.89}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;