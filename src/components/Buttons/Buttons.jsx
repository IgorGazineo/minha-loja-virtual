import Button from "./Button.jsx";
import "./Buttons.css";

export default function Buttons() {
  return (
    <ul className="btns">
      <Button>Smartphone</Button>
      <Button>Notebook</Button>
      <Button>Tv</Button>
      <Button>Headphone</Button>
    </ul>
  );
}
