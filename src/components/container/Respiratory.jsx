import React from "react";

const Respiratory = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <iframe
        src="https://humanrespiratory.vercel.app/"
        title="Respiratory"
        style={{ width: "500px", height: "400px" }}
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default Respiratory;
