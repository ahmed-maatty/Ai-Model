import Link from "next/link";

export default function Home() {
  return (
    <div className="sectionsContainer">
      <section id="Home" className="homeSection">
        <div className="home_header">
          <h1>Your virtual assistant for instant</h1>
          <h3>personalized website support.</h3>
          <Link href={"/login"}>Get Started</Link>
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
            Choose us for unparalleled expertise, tailored solutions, and
            cutting-edge technology. Join a community of satisfied clients who
            thrive with our customer-centric approach and proven track record of
            success.
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
      <section id="contactUs" className="contactUsSection"></section>
    </div>
  );
}
