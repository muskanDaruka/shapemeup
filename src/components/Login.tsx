/* eslint-disable @next/next/no-img-element */
"use client";

import { MouseEvent, useState } from "react";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useCreateUser } from "@/hooks/user.hooks";
import { IUser } from "@/types/user.type";

const Login = () => {
  const [invalidmsg, setInvalidmsg] = useState("");
  const { mutate: createUser } = useCreateUser();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const navigation = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setIsForgotPasswordOpen, setIsOpen, setIsRegistrationOpen } =
    useContext(AuthContext);

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("Event Object:", e);
      console.log("Form submission prevented");
      const { email, password } = user;

      const adminEmail = 'admin@shapemeup.com';
      const adminPassword = 'admin@1234';

      if (email === adminEmail && password === adminPassword) {
        navigation.push('/admin/exercise');
        console.log("Navigating to /admin/exercise");
      } else {
        navigation.push('/');
        setIsOpen(false);
        console.log("Navigating to /");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }
  const password = () => {
    setShowPassword(!showPassword);
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
                  <img
                    src={
                      showPassword
                        ? "/assets/images/login/view_password.png"
                        : "/assets/images/login/hide_password.png"
                    }
                    alt={showPassword ? "Hide Password" : "View Password"}
                    className="text-[#333] p-1 w-8 h-5 m-1 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
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
                type="submit"
                className=" mt-5 p-2 pl-60 flex w-full h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg"

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
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
              )}
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
