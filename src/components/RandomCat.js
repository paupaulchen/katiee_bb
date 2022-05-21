import React, { useState, useEffect } from "react";

export default function RandomCat() {
  const randomCatURL = "https://api.thecatapi.com/v1/images/search";
  const [cat, setCat] = useState({});

  useEffect(() => {
    getNewCat();
  }, [0]);

  function getNewCat() {
    fetch(randomCatURL)
      .then((res) => res.json())
      .then((data) => setCat(data[0]));
  }

  return <img src={cat.url} onClick={getNewCat} className="randomCat" />;
}
