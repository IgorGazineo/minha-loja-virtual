import Button from "./Button.jsx";
import "./Buttons.css";

export default function Buttons({ handleClick }) {
  return (
    <ul className="btns">
      <Button handleClick={() => handleClick(0)}>Smartphone</Button>
      <Button handleClick={() => handleClick(1)}>Notebook</Button>
      <Button handleClick={() => handleClick(2)}>Tv</Button>
      <Button handleClick={() => handleClick(3)}>Headphone</Button>
    </ul>
  );
}
