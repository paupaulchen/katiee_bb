import React from "react";
import KatieStories from "../services/katieStories";
import Card from "./Card";

export default function CardsSlide() {
  const cardElements = KatieStories.map((story) => (
    <Card key={story.id} {...story} />
  ));
  return <section className="card--slide">{cardElements}</section>;
}
