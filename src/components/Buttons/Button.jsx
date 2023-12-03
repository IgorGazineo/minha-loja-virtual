import "./Button.css";

export default function Button({ children }) {
  return (
    <li>
      <button className="btn">{children}</button>
    </li>
  );
}
