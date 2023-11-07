import  './motivation.css';
import React, { useState, useEffect } from 'react';
import BottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";

const quotes = [
  "Incase of disaster, HELPLINE NUMBER : 1916",
  "24×7 Free HELPINE NUMBER : 108 ",
  "For Ambulence, HELPLINE NUMBER : 102",
  "For Child HELPLINE NUMBER : 1098",
  "Traffic HELPLINE NUMBER : 1073",
  "Incase of an accident, HELPLINE NUMBER : 108",
  "Incase of emergency, HELPLINE NUMBER : 112",
  "Incase of fire, HELPLINE NUMBER : 101" ,
  "If it is sunny outside, Drink water" ,
  "If its going to rain, don't forget to carry an umbrella",
  "If the sky is clear, go take a walk outside",
  "If its too sunny , use sunscreen.",
  "if its cold, wear warm clothes",
  
];

function Motivation() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const changeQuote = () => {
    
    setQuoteIndex((quoteIndex + 1) % quotes.length)
  };
  
  return (
    <>
  <ResponsiveAppBar /> 
    <div className="centre">
      <b className="bold" id="quote">
        {quotes[quoteIndex]}
      </b>
      <br />
      <button onClick={changeQuote}>Change</button>
    </div>
  <BottomNavigation/>
    </>
           );
  
}

export default Motivation ;