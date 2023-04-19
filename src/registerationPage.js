import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./register.css";
import brideImg from "./bride.jpeg";
import groomImg from "./groom.jpg";
import otherImg from "./other.jpg";
import logo from "./logo.png";

const linkStyle = {
  textDecoration: "none",
};

const RegisterationPage = ({ onSubmit }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    location: "",
  });

  const history = useNavigate();

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const backgroundImage =
    selectedRole === "bride"
      ? `url(${brideImg})`
      : selectedRole === "groom"
      ? `url(${groomImg})`
      : `url(${otherImg})`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    history("/homepage"); // Redirect to homepage after submitting the form
  };

  const handleInputChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <body>
      <div
        className="registration-container"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="registration-card">
          <div
            className="registerhead"
            style={{ display: "flex", direction: "horizontal" }}
          >
            <h2>Register with </h2>
            <img src={logo} alt="Riti Riwaz logo" className="logo2" />
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                className="y"
                name="role"
                id="role"
                onChange={handleRoleChange}
              >
                <option value="other">Other</option>
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
              </select>
            </div>
            <div className="input-container">
              <div className="input-group ">
                <label htmlFor="firstName">First Name:</label>
                <input
                  style={{ backgroundColor: "#da9393" }}
                  placeholder="Avnish"
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group ">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  style={{ backgroundColor: "#da9393" }}
                  placeholder="Kumar"
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  style={{ backgroundColor: "#da9393" }}
                  placeholder="+91/9191919191"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group ">
                <label htmlFor="email">Email:</label>
                <input
                  style={{ backgroundColor: "#da9393" }}
                  placeholder="xyz@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="form-group ">
                <label htmlFor="date">Wedding Date:</label>
                <input
                  style={{ backgroundColor: "#da9393" }}
                  placeholder="01-01-2002"
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <div className="input-group x ">
                  <label htmlFor="location">Wedding Location:</label>
                  <input
                    style={{ backgroundColor: "#da9393" }}
                    placeholder="Patwatoli,Manpur,Gaya,Bihar"
                    type="text"
                    id="location"
                    name="location"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="submit-button"
                onSubmit={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default RegisterationPage;
