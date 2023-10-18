/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const Login = () => {
  const [invalidmsg, setInvalidmsg] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmitLogin = () => { };
  const password = () => { };
  const rememberMe = () => { };
  const forgotPassword = () => { };
  const googleLogin = () => { };
  const signup = () => { };

  return (
    <div className="w-[calc(100vw-200px)] h-5/6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div>
          <div className="bg-['']">
            <img
              src="/assets/images/shapemeup_logo.png"
              loading="lazy"
              alt="Shape-me-up"
              className="img-responsive modal-logo-bg"
            />
          </div>
          <div>
            <h4>Welcome back</h4>
            <h2>Login to your account</h2>
            <form onSubmit={onSubmitLogin}>
              <div>
                <label htmlFor="email">Email ID</label>
                <input type="text" name="email" />
                <span>Email is required</span>
                <span>Enter a valid email address</span>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                  />
                  <span onClick={password}>{showPassword ? "" : ""}</span>

                  <span>Password is required</span>
                </div>
                <span className="text-danger mb-2">{invalidmsg}</span>
              </div>
              <div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      name="remember"
                      value="Remember me"
                      onChange={rememberMe}
                    />
                    <label htmlFor="remember"> Remember me</label>
                  </div>
                </div>
                <div>
                  <a href="#" onClick={forgotPassword} title="Forgot password?">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button onClick={Login}>Login now</button>
              <button onClick={googleLogin}>
                <img
                  src="/assets/images/social_media/google.png"
                  alt="Google"
                />
                Or login with google
              </button>
              Dont have an account?
              <a href="#" onClick={signup} title="Join free today">
                Join free today
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
