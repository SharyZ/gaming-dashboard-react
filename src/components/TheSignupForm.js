import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import api from "../api";

const SIGNUP_API_URL = "/auth/user/signup";

export const TheSignupForm = () => {
  const navigate = useNavigate();

  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { isError, isSuccess, mutate } = useMutation(
    (event) => {
      event.preventDefault();
      console.log(signupFormData);

      return api.post(SIGNUP_API_URL, {
        username: signupFormData.username,
        email: signupFormData.email,
        password: signupFormData.password,
        re_password: signupFormData.re_password,
      });
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleInputChange = (event) =>
    setSignupFormData({
      ...signupFormData,
      [event.target.name]: event.target.value,
    });

  return (
    <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="mb-6">Signup</h1>
        <p className="mb-2 text-[#9DA1B4]">
          Enter your username, email and password to register.
        </p>
        {isError && (
          <p className="mb-2 text-red-500">Username or E-mail already taken!</p>
        )}
        {/* {isSuccess && navigate("/home")} */}
      </div>
      <form className="w-full space-y-6" method="POST" onSubmit={mutate}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="re_password">Password Confirmation</label>
          <input
            type="password"
            name="re_password"
            id="re_password"
            placeholder="password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <input type="submit" value="Signup" />
        </div>
      </form>
      <div className="pt-6">
        <p className="text-[#9DA1B4]">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
