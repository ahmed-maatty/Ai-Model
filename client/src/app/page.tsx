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
      <section id="aboutUs" className="aboutUsSection"></section>
      <section id="contactUs" className="contactUsSection"></section>
    </div>
  );
}
