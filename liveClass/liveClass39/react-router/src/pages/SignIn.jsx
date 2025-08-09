import React, { useState } from "react";
import { useNavigate } from "react-router";

export const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email == "alifrayhanme@gmail.com" && password == "123456") {
      const user = {
        userName: "Alif Rayhan",
        Age: 25,
        Address: "Belkuchi, Sirajgang",
      };
      navigate("/profile", {state: user});
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <h1>Sign in Page</h1>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          onChange={handelEmail}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handelPassword}
        />
        <br />
        <button onClick={handelSubmit}>Log In</button>
      </form>
    </>
  );
};
