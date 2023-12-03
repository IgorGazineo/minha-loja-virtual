import "./Button.css";

export default function Button({ children, handleClick, className }) {
  const newClass = `btn ${className}`;
  return (
    <li>
      <button className={newClass} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
