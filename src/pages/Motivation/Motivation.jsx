import React, { useState } from 'react';
import './Motivation.css'; 
import BottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";
import Card from '@mui/material/Card';

const quotes = [
  "If it's raining outside, remember to carry an umbrella.",
  "Don't forget your sunscreen on a sunny day!",
  "Layer up with a jacket when it's cold and windy.",
  "Wear breathable/loose clothing on a hot and humid day.",
  "Check for severe weather alerts before heading out.",
  "Stay hydrated on hot days, drink plenty of water.",
  "Consider wearing a hat to protect yourself from the sun.",
  "Bring a reusable water bottle to stay refreshed.",
  "Wear comfortable shoes for long walks on clear days.",
  "Pack a light jacket for cooler evenings.",
  "Keep an extra pair of sunglasses in your bag.",
  "Use a moisturizer in dry and windy weather.",
  "Opt for closed shoes on rainy or snowy days.",
  "Drive carefully during foggy conditions.",
  "Charge your devices in case of power outages during storms.",
  "Secure loose items in your yard during windy days.",
  "Plan outdoor activities on days with clear skies.",
  "Keep an emergency kit in your car for unexpected weather events.",
  "Check road conditions before embarking on a road trip.",
  "Avoid strenuous activities during extreme heat.",
  "Bring a portable charger for your phone in case of power outages.",
  "Consider a rain cover for your backpack on rainy days.",
  "Keep an eye on tide levels if you're near the coast.",
  "Pack a picnic on pleasant days and enjoy the outdoors.",
  "Ensure your pets have shelter during inclement weather.",
  "Plan indoor activities for days with heavy rain or storms.",
  "Check the air quality before engaging in outdoor exercises.",
  "In case of a disaster, HELPLINE NUMBER: 1916",
  "24×7 Free HELPLINE NUMBER: 108",
  "For Ambulance, HELPLINE NUMBER: 102",
  "For Child HELPLINE NUMBER: 1098",
  "Traffic HELPLINE NUMBER: 1073",
  "In case of an accident, HELPLINE NUMBER: 108",
  "In case of emergency, HELPLINE NUMBER: 112",
  "In case of fire, HELPLINE NUMBER: 101",
  "If it is sunny outside, drink water",
  "If it's going to rain, don't forget to carry an umbrella",
  "If the sky is clear, go take a walk outside",
  "If it's too sunny, use sunscreen.",
  "If it's cold, wear warm clothes",
];

function Motivation() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const changeQuote = () => {
    setQuoteIndex((quoteIndex + 1) % quotes.length);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="centre">
       <div className='space'/> 
       <Card className="quote-card">
          <p className="quote">
            {quotes[quoteIndex]}
          </p>
       </Card>
        <br />
        <button className="button" onClick={changeQuote}>
          Change Quote
        </button>
     </div>
      <BottomNavigation />
    </>
  );
}

export default Motivation;
