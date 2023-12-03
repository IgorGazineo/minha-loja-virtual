import Button from "./Button.jsx";
import "./Buttons.css";

export default function Buttons({ handleClick, btnValue }) {
  return (
    <ul className="btns">
      <Button
        handleClick={() => handleClick(0)}
        className={btnValue === 0 ? "active" : ""}
      >
        Smartphone
      </Button>
      <Button
        handleClick={() => handleClick(1)}
        className={btnValue === 1 ? "active" : ""}
      >
        Notebook
      </Button>
      <Button
        handleClick={() => handleClick(2)}
        className={btnValue === 2 ? "active" : ""}
      >
        Tv
      </Button>
      <Button
        handleClick={() => handleClick(3)}
        className={btnValue === 3 ? "active" : ""}
      >
        Headphone
      </Button>
    </ul>
  );
}
