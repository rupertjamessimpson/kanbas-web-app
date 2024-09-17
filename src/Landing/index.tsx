import { Link } from "react-router-dom";
import "./index.css";

export default function Landing() {
  return (
    <div className="landing-container">
      <h1 className="mb-4">Rupert Simpson's Homework Page</h1>
      <div className="mb-3">
        <Link to="/kanbas/Dashboard">Kanbas</Link>
      </div>
      <div>
        <Link to="/labs/lab1" className="mb-3">Lab 1</Link>{" | "}
        <Link to="/labs/lab2" className="mb-3">Lab 2</Link>{" | "}
        <Link to="/labs/lab3" className="mb-3">Lab 3</Link>{" | "}
        <Link to="/labs/lab4" className="mb-3">Lab 4</Link>
      </div>
    </div>
  );
}
