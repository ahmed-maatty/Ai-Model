import React from "react";
import Link from "next/link";

function login() {
  return (
    <section className="authSection">
      <form className="authForm" action="" method="post">
        <h3>Login</h3>
        <div className="input_container">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="Write Your Email" />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" placeholder="Write Your Password" />
        </div>
        <button className="authBtn">Login</button>
        <Link href={"/register"}>Do Not Have Account ?</Link>
      </form>
    </section>
  );
}

export default login;
