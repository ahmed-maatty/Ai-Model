"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
function NavBar() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const t = Cookies.get("token");
    setToken(t || null);
  }, []);
  console.log(token);
  return (
    <nav>
      <div className="container">
        <main className="nav_content">
          <Link href={"/"} className="logo">
            Oscar
          </Link>
          <div className="nav_links">
            <Link href={"/#aboutUs"}>About US</Link>
            <Link href={"/#contactUs"}>Contact US</Link>
            {token ? (
              <Link href={"/chat"} className="loginBtn">
                Start Chat
              </Link>
            ) : (
              <Link href={"/login"} className="loginBtn">
                Login
              </Link>
            )}
          </div>
        </main>
      </div>
    </nav>
  );
}

export default NavBar;
