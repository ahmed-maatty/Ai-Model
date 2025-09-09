import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <main>
          <div className="footer_content">
            <div className="footer_data">
              <h1 className="logo">Oscar</h1>
              <div className="footer_links">
                <Link href={"#aboutUs"}>About US</Link>
                <Link href={"#contactUs"}>Contact US</Link>
              </div>
            </div>
              <div className="social_media">
                <img src="/assets/youtube.png" alt="" />
                <img src="/assets/twitter.png" alt="" />
                <img src="/assets/facebook.png" alt="" />
                <img src="/assets/instgram.png" alt="" />
              </div>
          </div>
          <p>© 2026, Oscar</p>
        </main>
      </div>
    </footer>
  );
}

export default Footer;
