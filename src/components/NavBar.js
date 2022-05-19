import React from "react";

export default function NavBar() {
  const navItems = [
    {
      key: 0,
      name: "Place Order",
      haha: "",
    },
    {
      key: 1,
      name: "Records",
      haha: "",
    },
    {
      key: 2,
      name: "About",
      haha: "",
    },
  ];

  const navItemsElement = navItems.map((item) => (
    <h3 className="nav-button" key={item.key}>
      {item.name}
    </h3>
  ));

  return <div className="nav-bar">{navItemsElement}</div>;
}
