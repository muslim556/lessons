import React, { useState } from "react";
import "./addimg.css";

export function AddImg() {
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
    <div id="app">
      <label>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <span>++</span>
      </label>
      <div id="result">{renderPhotos(selectedFiles)}</div>
    </div>
  );
}
