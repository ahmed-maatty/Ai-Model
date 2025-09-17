import React from "react";
import Link from "next/link";

function register() {
  return (
    <section className="authSection">
      <form className="authForm" action="" method="post">
        <h3>Create Account</h3>
        <div className="input_container">
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            name="username"
            placeholder="Write Your username"
          />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="Write Your Email" />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Write Your Password"
          />
        </div>
        <button className="authBtn">Create</button>
        <Link href={"/login"}>Already Have Account?</Link>
      </form>
    </section>
  );
}

export default register;
