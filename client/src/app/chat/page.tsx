import React from "react";

function page() {
  return (
    <section className="chatSection">
      <div className="chatScreen">
        <h1>oscar</h1>
        <div className="screen"></div>
        <div className="input_btn_send">
          <input type="text" placeholder="Write Your Message" />
          <button>Send</button>
        </div>
      </div>
    </section>
  );
}

export default page;
