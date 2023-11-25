import { Link } from "react-router-dom";
import './Introduction.css';
import ResponsiveAppBar from "../../components/OpenBar";

function Introduction() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="intro-container">
        <p className="intro-paragraph">
          Dear Families, we are here to empower our communities with weather updates, words of encouragement, and crucial recommendations. Weathering storms together because every forecast deserves hope and support.
        </p>
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
