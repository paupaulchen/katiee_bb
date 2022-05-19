import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import CardsSlide from "./CardsSlide";
import Form from "./Form";
import RandomKatie from "./KatieMeme";

export default function App() {
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });

  function handleForm(inputName) {
    console.log("handleForm", inputName);
    setUserName(inputName);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <Form handleForm={handleForm} />
        <MainContent userName={userName} />
        <RandomKatie />
        <CardsSlide />
      </main>
    </div>
  );
}
