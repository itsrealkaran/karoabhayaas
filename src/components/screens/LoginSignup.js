import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";

const LoginSignup = () => {
  const { login, logout, isLoggedIn } = useContext(AppContext);
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    otp: "",
  });

  const [activeForm, setActiveForm] = useState("login");

  const toggleForm = () => {
    setActiveForm(activeForm === "login" ? "signup" : "login");
  };

  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add login functionality (API call, validation, etc.) here
    login({ username: loginFormData.username }); // Replace this with actual login logic
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add signup functionality (API call, validation, etc.) here
  };

  const handleLogout = () => {
    // Simulating logout
    logout(); // Replace this with actual logout logic
  };

  return (
    <div style={containerStyle}>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {loginFormData.username}!</p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </div>
      ) : (
        <div style={formContainerStyle}>
          {activeForm === "login" ? (
            <form onSubmit={handleLoginSubmit} style={formStyle}>
              {/* Login Form JSX */}
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={loginFormData.username}
                  onChange={handleLoginChange}
                  style={inputStyle}
                />
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  style={inputStyle}
                />
              </div>
              <div style={buttonContainer}>
                <button type="submit" style={buttonStyle}>
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <span style={linkStyle} onClick={toggleForm}>
                    Signup
                  </span>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} style={formStyle}>
              {/* Signup Form JSX */}
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={signupFormData.name}
                  onChange={handleSignupChange}
                  style={inputStyle}
                />
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={signupFormData.email}
                  onChange={handleSignupChange}
                  style={inputStyle}
                />
              </div>
              <div
                style={{
                  ...inputContainerStyle,
                  flexDirection: "row",
                  marginBottom: "0rem",
                }}
              >
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="PHONE NUMBER"
                  value={signupFormData.phoneNumber}
                  onChange={handleSignupChange}
                  style={{ ...inputStyle, marginRight: "1rem" }}
                />
                <button type="submit" style={buttonStyle}>
                  SEND OTP
                </button>
              </div>
              <div style={inputContainerStyle}>
                <p>
                  Didn't receive OTP? <span style={linkStyle}> Resend</span>
                </p>
                <input
                  type="text"
                  name="otp"
                  placeholder="OTP"
                  value={signupFormData.otp}
                  onChange={handleSignupChange}
                  style={inputStyle}
                />
              </div>
              <div style={buttonContainer}>
                <button type="submit" style={buttonStyle}>
                  Signup
                </button>
                <p>
                  Already have an account?{" "}
                  <span style={linkStyle} onClick={toggleForm}>
                    Login
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "5rem 4rem 2rem",
  border: "2px solid #eee",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  backgroundColor: "transparent",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 1rem",
  //  alignItems: 'center',
};

const inputStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  width: "calc(100% - 2rem)",
  padding: "0.5rem 1rem",
  border: "2px solid #eee",
};

const buttonStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  backgroundColor: "#000",
  color: "#fff",
  textWrap: "nowrap",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
};

const buttonContainer = {
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
  justifyContent: "center",
  alignItems: "center",
  //  width: '100%',
};

const linkStyle = {
  color: "#1D7AE7",
  fontWeight: "600",
  cursor: "pointer",
};

export default LoginSignup;
