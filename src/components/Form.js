import React, { useState } from "react";
import KatieStories from "../services/katieStories";
import Button from "./Button";

export default function Form({ handleForm }) {
  function getRandomCaption() {
    const randomIndex = Math.floor(Math.random() * KatieStories.length);
    const randomCaption = KatieStories[randomIndex].caption;
    console.log(randomCaption);
  }

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  }

  /**
   * Controlled Components:
   * value={inputData.lastName}
   * https://reactjs.org/docs/forms.html#controlled-components
   */

  return (
    <div className="form">
      <input
        type="text"
        placeholder="First name"
        className="form--input"
        name="firstName"
        onChange={handleChange}
        value={inputData.firstName}
      />
      <input
        type="text"
        placeholder="Last name"
        className="form--input"
        name="lastName"
        onChange={handleChange}
        value={inputData.lastName}
      />
      <Button
        handleClick={() => handleForm(inputData)}
        className="form--button"
        label="Submit"
      />
    </div>
  );
}
