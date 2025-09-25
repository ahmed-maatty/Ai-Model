"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<{
    username: "";
    email: "";
    password: "";
  }>({ username: "", email: "", password: "" });
  const setData = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="authSection">
      <form className="authForm" onSubmit={registerHandler} method="post">
        <h3>Create Account</h3>
        <div className="input_container">
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            name="username"
            placeholder="Write Your username"
            onChange={(e) => setData(e.target.name, e.target.value)}
          />
        </div>
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
          Create
        </button>
        <Link href={"/login"}>Already Have Account?</Link>
      </form>
    </section>
  );
}

export default Register;
