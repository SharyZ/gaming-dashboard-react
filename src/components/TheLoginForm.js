import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "react-query";

import api from "../api";
import useAuth from "../hooks/useAuth";

export const TheLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();

  const loginQuery = useMutation(
    (event) => {
      event.preventDefault();

      return api.post("/api/token/", {
        email: loginFormData.email,
        password: loginFormData.password,
      });
    },
    {
      onSuccess: (data) => {
        const accessToken = data.data.access;
        setAuth(accessToken);
        navigate(from, { replace: true });
      },
    }
  );

  const handleInputChange = (event) =>
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });

  return (
    <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="mb-6">Login</h1>
        <p className="mb-2 text-[#9DA1B4]">Enter your username and password.</p>
      </div>
      <form
        className="w-full space-y-6"
        method="POST"
        onSubmit={loginQuery.mutate}
      >
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
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="pt-6">
        <p className="text-[#9DA1B4]">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};
