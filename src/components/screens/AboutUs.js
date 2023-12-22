import React from 'react';
import { StyleRoot } from 'radium';
import "@fontsource/roboto-mono"; 

const AboutUs = () => {
  return (
    <StyleRoot>
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={imageDivStyle}>
          <img src="https://www.directcom.com/images/300x200/money.jpg" alt="About Us Image" style={imageStyle} />
        </div>
        <div style={textDivStyle}>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div style={{...rowStyle, '@media (max-width: 1000px)': { flexDirection: 'column-reverse', alignItems: 'center'}}}>
        <div style={textDivStyle}>
          <p>
            Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={imageDivStyle}>
          <img src="https://www.directcom.com/images/300x200/money.jpg" alt="About Us Image" style={imageStyle} />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={imageDivStyle}>
          <img src="https://www.directcom.com/images/300x200/money.jpg" alt="About Us Image" style={imageStyle} />
        </div>
        <div style={textDivStyle}>
          <p>
            Duis aute irure Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
    </StyleRoot>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '3rem auto'
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Roboto Mono',
  fontSize: '1.2rem',
  '@media (max-width: 1000px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
  justifyContent: 'space-between',
  width: '80%',
  margin: '2rem auto 4rem',
};

const imageDivStyle = {
  width: '48%',
  '@media (max-width: 1000px)': {
    width: '50%',
  },
};

const textDivStyle = {
  width: '48%',
  textAlign: 'justify',
  '@media (max-width: 1000px)': {
    width: '50%',
  },
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  minWidth: '300px',
};

export default AboutUs;