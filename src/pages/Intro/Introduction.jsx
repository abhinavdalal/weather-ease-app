import { Link } from "react-router-dom";
import './Introduction.css'

function Introduction() {

  // const handleClick = () => {
  //   console.log('go to different page');
    
  // }

  return (
    <>
      <div className="optionText">
        <h1> Select one option </h1>
      </div>
      <div>
      <Link to="/">
        <button className="btn">
          STUDENTS
        </button>
      </Link>
        <button className="btn">
          PARENTS
        </button>
      </div>
    </>
  );
}

export default Introduction;
