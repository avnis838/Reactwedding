import React, { useState, useEffect } from "react";
import "./webpage.css";
import weddingPhoto from "./wedding1.jpg";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

function Webpage() {
  const [message, setMessage] = useState(
    "Welcome to our wedding planning site!"
  );
  const messages = [
    "Plan your dream wedding with us!",
    "Find the perfect venue and vendors!",
    "Create beautiful memories to last a lifetime!",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMessage(messages[index]);
  }, [index]);
  return (
    <div className="App">
      <div className="webpage">
        <div className="card-container">
          <div className="card">
            <h2 className="heading">Welcome to our Marriage Planning Site</h2>
            <div className="button-container">
              <button className="login-button">Login</button>
              <Link
                to="/registeration"
                className="register-button"
                style={linkStyle}
              >
                Register
              </Link>
            </div>
          </div>
          <div className="card rightcard">
            <img
              src={weddingPhoto}
              alt="Wedding"
              className="image photo-card"
            />
            <h2 className="message">{message}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webpage;
