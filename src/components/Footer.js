// Footer/Footer.js
import React from "react";
import { StyleRoot } from "radium";
import "@fontsource/roboto-mono";

const Footer = () => {
  return (
    <StyleRoot>
      <footer style={footerStyle}>
        <div style={divStyle}>
          <p>KARO ABHAYAAS 112, ELECTRONIC CITY BANGALORE, INDIA</p>
        </div>
        <div style={divStyle}>
          <p>© 2023 Karo Abhyaash. All rights reserved.</p>
          <div style={buttonGroupStyle}>
            <button style={buttonStyle}>Contact Us</button>
            <button style={buttonStyle}>Subscribe</button>
          </div>
        </div>
      </footer>
    </StyleRoot>
  );
};

// Internal CSS styles
const footerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "1.3rem",
  fontFamily: "Roboto Mono",
  textTransform: "uppercase",
  padding: "2rem 2rem 7rem 2rem",

  "@media (max-width: 740px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

const divStyle = {
  width: "300px",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  backgroundColor: "#fff",
  textTransform: "uppercase",
  color: "#000",
  padding: "12px 16px",
  border: "none",
  cursor: "pointer",
};

export default Footer;
