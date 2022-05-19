import React from "react";

export default function Card({ id, img, caption }) {
  function darkenImg() {
    console.log("hiiiiiiiiiiii");
  }
  return (
    <div className="card">
      <img
        src={`./../images/${img}`}
        onMouseOver={darkenImg}
        className="card--image"
      />
      <p className="card--id">{caption}</p>
    </div>
  );
}
