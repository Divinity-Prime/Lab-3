import ColorBox from "./ColorBox";
import colors from "../data/data";

export default function ColorBoxesContainer() {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    boxes.push(<ColorBox key={i} initialColor={randomColor} />);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      {boxes}
    </div>
  );
}
