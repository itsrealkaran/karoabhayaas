// components/screens/Classes.js
import React from "react";
import ClassCard from "../snippets/ClassCard";

const Classes = () => {
  // Mock data for classes (replace with your actual data)
  const classesData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww",
      title: "Sample Video Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      image:
        "https://www.online-tech-tips.com/wp-content/uploads/2016/03/widescreen-iphone-photo.jpg",
      title: "Sample Video Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww",
      title: "Sample Video Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    // Add more class data as needed
  ];

  return (
    <div style={containerStyle}>
      <div style={classesContainerStyle}>
        {classesData.map((classData) => (
          <ClassCard key={classData.id} {...classData} />
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  margin: "4rem",
};

const headingStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1.5rem",
  fontWeight: "100",
  marginBottom: "1rem",
};

const classesContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default Classes;
