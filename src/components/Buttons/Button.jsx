import "./Button.css";

export default function Button({ children, handleClick }) {
  return (
    <li>
      <button className="btn" onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
