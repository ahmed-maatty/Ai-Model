"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const t = Cookies.get("token");
    console.log(t)
    setToken(t || null);
  }, []);

  return (
    <div className="sectionsContainer">
      <section id="Home" className="homeSection">
        <div className="home_header">
          <h1>Your virtual assistant for instant</h1>
          <h3>personalized website support.</h3>
          <Link href={token ? "/chat" : "/login"}>Get Started</Link>
        </div>
        <div className="home_imgs">
          <img className="img1" src="/assets/robot.png" alt="" />
          <img className="img2" src="/assets/Component.png" alt="" />
        </div>
      </section>
      <section id="aboutUs" className="aboutUsSection">
        <div className="aboutHeader">
          <h1>Why US</h1>
          <p>
            Choose Oscar for Expert Solutions and Lasting Impact, At Oscar, we
            provide unparalleled expertise and tailored solutions designed to
            meet your unique needs. Our team combines experience, innovation,
            and cutting-edge technology to deliver results that drive real
            business growth. Every project is handled with a customer-centric
            approach, ensuring practical and sustainable outcomes. Join a
            community of satisfied clients who trust Oscar for reliable,
            innovative, and effective strategies. We focus on empowering
            businesses to thrive, stay ahead of the competition, and achieve
            long-term success. With Oscar, your goals are our mission, and your
            success is our priority.
          </p>
        </div>
        <div className="why_us_boxes">
          <div className="why_us_2_boxes">
            <div className="box">
              <div className="bg_container">
                <img className="img_lamb" src="/assets/lamb.png" alt="" />
              </div>
              <h5>Expertise and Innovation</h5>
            </div>
            <div className="box">
              <div className="bg_container">
                <img className="diamond_img" src="/assets/diamond.png" alt="" />
              </div>
              <h5>Client-Centric Excellence</h5>
            </div>
          </div>
          <div className="box">
            <div className="bg_container">
              <img className="puzzle_img" src="/assets/puzzle.png" alt="" />
            </div>
            <h5>Tailored Solutions</h5>
          </div>
        </div>
      </section>
      <section id="contactUs" className="contactUsSection">
        <div className="contact_header">
          <h1>
            Excited <br />
            to explore <br />
            <span>possibilities together?</span>
          </h1>
        </div>
        <div className="contact_us_content">
          <h4>Drop us a message</h4>
          <form action="">
            <div>
              <label htmlFor="">Enter your email</label>
              <input type="text" placeholder="Write Your Email...." />
            </div>
            <div>
              <label htmlFor="">Add your message here</label>
              <textarea
                name=""
                id=""
                rows={9}
                placeholder="Enter Message Here...."
              ></textarea>
            </div>
            <button>submit</button>
          </form>
        </div>
      </section>
      <div className="getStartedBtn">
        <Link href={token ? "/chat" : "/login"}>Get Started</Link>
      </div>
    </div>
  );
}
