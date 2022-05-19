import React, { useState } from "react";
import KatieStories from "../services/katieStories";
import Card from "./Card";
import Button from "./Button";

export default function KatieMeme() {
  const [storyIndex, setStoryIndex] = useState(0);
  /**
   * if old value of state is needed to determine the new value of state,
   * pass a callback function to the state setter function instead of the new value.
   * this callback func will receive the old value of state as its parameter
   */

  const story = KatieStories[storyIndex];

  function newKatieMeme() {
    setStoryIndex(Math.floor(Math.random() * KatieStories.length));
    const newCaption = story.caption;
    console.log(newCaption);
  }

  return (
    <div className="katieMeme">
      <Button
        handleClick={newKatieMeme}
        className="katieMeme--button"
        label="Generate new!"
      />
      <Card key={story.id} {...story} />
    </div>
  );
}
