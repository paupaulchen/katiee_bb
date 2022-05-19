import React from "react";

export default function MainContent({ userName }) {
  return (
    <div>
      <h1>
        Why are you so good? {userName.firstName} {userName.lastName}
      </h1>
      <ul className="ressons-ul">
        <li>天生我材必有用</li>
        <li>千金散盡還復來</li>
        <li>tyty offers please</li>
      </ul>
    </div>
  );
}
