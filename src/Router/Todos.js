import React, { useState } from "react";
import "./Router.css";

export function Todos() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files[0]).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  }

  function renderPhotos(source) {
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 100px)",
        background: "#ddd",
        fontSize: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    ></div>
  );
}
