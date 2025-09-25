"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const setData = (key: string, value: string) => {
    setUser((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/auth/login" , {
        method : "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      const data = await res.json();
      Cookies.set('token' , data.token , {
        expires:1
      });
      router.push("/");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <section className="authSection">
      <form className="authForm" onSubmit={loginHandler} method="post">
        <h3>Login</h3>
        <div className="input_container">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Write Your Email"
            onChange={(e) => setData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Write Your Password"
            onChange={(e) => setData(e.target.name, e.target.value)}
          />
        </div>
        <button className="authBtn" type="submit">
          Login
        </button>
        <Link href={"/register"}>Do Not Have Account ?</Link>
      </form>
    </section>
  );
}

export default Login;
