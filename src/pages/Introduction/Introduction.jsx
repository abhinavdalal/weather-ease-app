import { Link } from "react-router-dom";
import './Introduction.css'

function Introduction() {

  return (
    <>
      <div className="optionText">
        <h1> Select one option </h1>
      </div>
      <div>
        <Link to="/temp">
          <button className="btn">
            STUDENTS
          </button>
        </Link>
        <Link to="/temp">
          <button className="btn">
            PARENTS
          </button>
        </Link>
      </div>
    </>
  );
}

export default Introduction;
