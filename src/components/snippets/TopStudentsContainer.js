// components/Home/TopStudentsContainer.js
import React, { useRef, useEffect } from "react";
import TopStudentCard from "./TopStudentCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TopStudentsContainer = () => {
  // Sample data
  const topStudents = [
    {
      image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg",
      name: "John Doe",
      quote: "Some review submitted by the user about the company",
    },
    {
      image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg",
      name: "John Doe",
      quote: "Some review submitted by the user about the company",
    },
    {
      image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg",
      name: "John Doe",
      quote: "Some review submitted by the user about the company",
    },
    {
      image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg",
      name: "John Doe",
      quote: "Some review submitted by the user about the company",
    },
    {
      image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg",
      name: "John Doe",
      quote: "Some review submitted by the user about the company",
    },
    // Add more student data as needed
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 320; // Scroll amount to scroll out first card

    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>Top Students</p>
      <div ref={containerRef} style={scrollContainerStyle}>
        {topStudents.map((student, index) => (
          <TopStudentCard key={index} {...student} />
        ))}
      </div>
      <div style={arrowContainerStyle}>
        <IoIosArrowBack
          style={arrowStyle}
          onClick={() => handleScroll("left")}
        />
        <IoIosArrowForward
          style={arrowStyle}
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  margin: "2rem 0",
  position: "relative",
};

const headingStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1.5rem",
  fontWieght: "100",
  marginBottom: "1rem",
};

const scrollContainerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "3rem",
  overflowX: "hidden", // Hide the scrollbar
  scrollBehavior: "smooth",
  boxSizing: "border-box",
  position: "relative",
  maxWidth: "calc(100% - 4rem)",
  margin: "0 3rem 2rem",
};

const arrowContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "100%",
};

const arrowStyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "#ddd",
  transition: "color 0.3s ease-in-out",
};

export default TopStudentsContainer;
