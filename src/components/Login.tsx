/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, MouseEvent } from "react";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { useCreateUser } from "@/hooks/user.hooks";

const Login = () => {
  const [invalidmsg, setInvalidmsg] = useState("");
  const { mutate: createUser } = useCreateUser();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setIsForgotPasswordOpen, setIsOpen, setIsRegistrationOpen } =
    useContext(AuthContext);

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(user);
    // e.target.value();
    // <span>Email is required</span>
    // <span>Enter a valid email address</span>
  };
  const password = () => {
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
    setIsOpen(false);
  };
  const rememberMe = () => {
    console.log("Remember me clicked");
  };
  const forgotPassword = () => {
    setIsForgotPasswordOpen(true);
    setIsOpen(false);
    setIsRegistrationOpen(false);
    console.log("Forgot Password clicked");
  };
  const googleLogin = () => {
    console.log("Google Login clicked");
  };
  const signup = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log("Signup clicked");
    e.preventDefault();
    setIsRegistrationOpen(true);
    setIsOpen(false);
  };

  return (
    <div className="w-[calc(100vw-200px)] h-5/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
      <button
        onClick={handleCloseClick}
        className="fixed top-1 right-1  pt-1 pl-2 pb-1 bg-[#f2994a] hover:bg-[#f2994a] text-white rounded-full cursor-pointer w-8 h-8"
        id="closeButton"
      >
        X
      </button>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-2 sm:pb-6">
        <div className="flex w-full justify-evenly">
          <div className="bg-['']">
            <img
              src="/assets/images/shapemeup_logo.png"
              loading="lazy"
              alt="Shape-me-up"
              className="img-responsive modal-logo bg-[#34383d] h-auto"
            />
            <img
              src="/assets/images/login/login_left.png"
              alt="image"
              className="h-126"
            />
          </div>
          <div>
            <h4 className="mt-20">Welcome back</h4>
            <h2 className="text-black text-2xl font-bold mb-10 mt-10">
              Login to your account
            </h2>
            <form onSubmit={onSubmitLogin}>
              <div className="m-0 mb-6">
                <label htmlFor="email">Email ID</label>
                <br />
                <input
                  type="text"
                  name="email"
                  value={user?.email}
                  className="w-full h-12 border-slate-250 border-2 rounded-lg"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="m-0 mb-6">
                <label htmlFor="password">Password</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, password: e.target.value }))
                    }
                    className="w-full h-12 border-slate-250 border-2 rounded-lg"
                  />
                  <img
                    src={
                      showPassword
                        ? "/assets/images/login/view_password.png"
                        : "/assets/images/login/hide_password.png"
                    }
                    alt={showPassword ? "Hide Password" : "View Password"}
                    className="text-[#333] p-1 w-8 h-5 m-1 rounded-lg"
                    onClick={password}
                  />
                </div>
                <span className="text-danger mb-2 ">{invalidmsg}</span>
              </div>
              <div className="flex">
                <div className="mb-6">
                  <input
                    type="checkbox"
                    name="remember"
                    value="Remember me"
                    onChange={rememberMe}
                  />
                  <label htmlFor="remember"> Remember me</label>
                </div>
                <div className="mb-6 ml-64">
                  <button
                    onClick={forgotPassword}
                    className="text-[#f2994a]"
                    title="Forgot password?"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
              <button
                className=" mt-5 p-2 pl-60 flex w-full h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg"
                onClick={Login}
              >
                Login now
              </button>
              <button
                className=" mt-5 pt-4 flex w-full h-15 bg-[#34383d] text-white font-sans font-normal rounded-lg"
                onClick={googleLogin}
              >
                <img
                  src="/assets/images/social_media/google.png"
                  alt="Google"
                  className="m-2 pl-40  pb-3"
                />
                Or login with google
              </button>
              <div className="mt-5">
                Dont have an account?
                <a
                  href="/"
                  onClick={signup}
                  className="text-[#f2994a]"
                  title="Join free today"
                >
                  Join free today
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
