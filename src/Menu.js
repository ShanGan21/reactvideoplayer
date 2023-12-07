import React, { useState } from "react";

function Menu({ selected, onSelectVideo }) {
  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  };

  return (
    <form onClick={clickHandler}>
      <input
        type="radio"
        name="src"
        value="fast"
        checked={selected == "fast"}
      />{" "}
      fast
      <input
        type="radio"
        name="src"
        value="slow"
        checked={selected == "slow"}
      />{" "}
      slow
      <input
        type="radio"
        name="src"
        value="cute"
        checked={selected == "cute"}
      />{" "}
      cute
      <input
        type="radio"
        name="src"
        value="eek"
        checked={selected == "eek"}
      />{" "}
      eek
    </form>
  );
}

export default Menu;
