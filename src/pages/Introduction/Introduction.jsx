import { Link } from "react-router-dom";
import './Introduction.css';
import ResponsiveAppBar from "../../components/OpenBar";

function Introduction() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="intro-container">
        <h1 className="intro-title">Select an Option</h1>
        <div className="intro-buttons">
          <Link to="/home" className="btn">
            Students
          </Link>
          <Link to="/home" className="btn">
            Parents
          </Link>
        </div>
      </div>
    </>
  );
}

export default Introduction;
