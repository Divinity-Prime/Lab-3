import { useState } from "react";
import colors from "../data/data";

export default function ColorBox({ initialColor }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        margin: "1px",
        cursor: "pointer",
      }}
    ></div>
  );
}
