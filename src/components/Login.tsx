/* eslint-disable @next/next/no-img-element */
"use client";

import { MouseEvent, useState } from "react";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { useRouter } from "next/navigation";
// import { useCreateUser } from "@/hooks/user.hooks";
import { IUser } from "@/types/user.type";
import { signIn } from "next-auth/react";

const Login = () => {

  // const { mutate: createUser } = useCreateUser();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const navigation = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setIsForgotPasswordOpen, setIsOpen, setIsRegistrationOpen, setIsAdmin, setIsLogin } =    //setIsAdmin
    useContext(AuthContext);

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("Event Object:", e);
      console.log("Form submission prevented");
      const { email, password } = user;
      setError("");
      if (user.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response:", response)
      const data = await response.json();
      console.log("data:", data)
      if (data.openRegister) {
        setIsRegistrationOpen(true);
        setIsOpen(false);
      }
      if (data.redirect === "/admin/exercise") {
        setIsAdmin(true);
      }

      if (response.ok) {
        // Successful login, redirect based on server response
        navigation.push(data.redirect);

        setIsOpen(false);
        setIsLogin(true);
        console.log(`Navigating to ${data.redirect}`);
      } else {
        // Failed login, handle the error
        setError(data.message);
        console.log("Login failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };
  const password = () => {
    setShowPassword(!showPassword);
    if (!showPassword && user.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
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
  const googleLogin = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };
  const signup = (e: MouseEvent<HTMLAnchorElement>) => {

    e.preventDefault();
    setIsRegistrationOpen(true);
    setIsOpen(false);
  };

  return (
    <div className="flex md:h-5/6 h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
      <button
        onClick={handleCloseClick}
        className="flex items-center justify-center fixed top-1 right-1 bg-[#FBEFB0] hover:bg-opacity-50 text-white rounded-full cursor-pointer w-[50px] h-[50px]"
        id="closeButton"
      >
        <img
          src="/assets/images/icons/close.png"
          alt="close"
        />
      </button>
      <div className="bg-white">
        <div className="flex w-full justify-evenly">
          <div className="relative">
            <div className="bg-['']">
              <img
                src="/assets/images/shapemeup_logo.png"
                loading="lazy"
                alt="Shape-me-up"
                className="img-responsive modal-logo bg-[#34383d] h-[40px] absolute "
              />
              <img
                src="/assets/images/login/login_left.png"
                alt="image"
                className="h-126"
              />
            </div>
          </div>
          <div className="p-8">
            <h4 className="m-4">Welcome back</h4>
            <h2 className="text-black text-2xl font-bold m-4">
              Login to your account
            </h2>
            <form onSubmit={onSubmitLogin}>
              <div className="m-4">
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
              <div className="m-4">
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
                {/* <span className="text-danger mb-2 ">{invalidmsg}</span> */}
                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}
              </div>
              <div className="flex">
                <div className="m-4">
                  <input
                    type="checkbox"
                    name="remember"
                    value="Remember me"
                    onChange={rememberMe}
                  />
                  <label htmlFor="remember"> Remember me</label>
                </div>
                <div className="m-4 ml-64">
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

                className=" m-4 flex items-center justify-center w-[522px] h-12 bg-[#f2994a] text-white font-sans font-bold text-2xl rounded-lg"


              >
                Login now
              </button>
              <button
                className="m-4 flex p-2 items-center justify-center w-[522px] h-15 bg-[#34383d] text-white font-sans font-normal rounded-lg"
                onClick={googleLogin}
              >
                <img
                  src="/assets/images/social_media/google.png"
                  alt="Google"
                  className="m-2 flex items-center justify-center"
                />
                Or login with google
              </button>



              <div className="m-4">
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
