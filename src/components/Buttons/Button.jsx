import "./Button.css";

export default function Button({ children, handleClick, className }) {
  const newClass = `btn ${className}`;
  return (
    <li>
      <a href="#products">
        <button className={newClass} onClick={handleClick}>
          {children}
        </button>
      </a>
    </li>
  );
}
