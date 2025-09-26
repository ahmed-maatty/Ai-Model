"use client";
import React, { useState } from "react";

function Chat() {
  const [message , setMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const chatHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({prompt}),
      });
      const data = await res.json();
      setMessage(data.result);
      document.getElementById("messageBar").value = " "
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="chatSection">
      <div className="chatScreen">
        <h1>oscar</h1>
        <div className="screen">
          {
            prompt && (
              <div className="prompt_contaiener">
                <p className="sender">{prompt}</p>
              </div>
            )
          }
          {
            message && (
              <div className="prompt_contaiener">
                <p className="response">{message}</p>
              </div>
            )
          }
        </div>
        <div className="input_btn_send">
          <input
            type="text"
            placeholder="Write Your Message"
            onChange={(e) => setPrompt(e.target.value)}
            id="messageBar"
          />
          <button onClick={chatHandler}>Send</button>
        </div>
      </div>
    </section>
  );
}

export default Chat;
