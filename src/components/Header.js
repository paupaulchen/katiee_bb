import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="./../images/react_logo.svg" className="brand-logo" />
        <h1 className="brand-name">Integrated Orderbook</h1>
      </div>
      <NavBar />
    </header>
  );
}
