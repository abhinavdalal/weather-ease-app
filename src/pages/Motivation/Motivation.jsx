import React, { useState } from 'react';
import './Motivation.css'; 
import BottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";
import Card from '@mui/material/Card';

// Add image URLs corresponding to each quote
const images = [
  "src/assets/namaste.png",
  "src/assets/rain.jpeg",
  "src/assets/air quality.jpg",
  "src/assets/indoor activities.jpg",
  "src/assets/pets.jpg",
  "src/assets/picnic.jpg",
  "src/asset/sea.jpg",
  "src/asset/rainbag.jpg",
  "src/asset/charger.jpg",
  "src/asset/road.jpg",
  "src/asset/kit.jpg",
  "src/assets/sky.jpg",
  "src/asset/drive.jpg",
  "src/asset/snow.jpeg",
  "src/asset/run.jpg",
  "src/asset/water.jpg",
  "src/asset/drink.jpeg",
  "src/asset/hat.jpg",
  "src/asset/storm.jpg",
  "src/asset/cold.jpg",
   // ... add more image URLs
];

const quotes = [
  "नमस्ते",
  "If it's raining outside, remember to carry an umbrella or a raincoat.",
  "Check the air quality before engaging in outdoor exercises",
  "Plan indoor activities for days with heavy rain or storm",
  "Ensure your pets have shelter during inclement weather",
  "Pack a picnic on pleasant day and enjoy the outdoors",
  "Keep an eye on tide levels if you're near the coast",
  "Consider a rain cover for your backpack on rainy day",
  "Carry a portable charger for your phone in case of power outages",
  "Check road conditions before embarking on a road trip",
  "Keep an emergency kit in your car for unexpected weather events",
  "Plan outdoor activities on days with clear skies",
  "Drive carefully during foggy conditions",
  "Pick a light jacket for the cooler evenings",
  "Wear comfortable shoes for long walks on clear days",
  "carry a reusable water bottle to stay refreshed",
  "Stay hydrated on hot days drink plenty of water",
  "Consider wearing a hat to protect yourself from the sun",
  "Check for severe weather alerts before heading out",
  "Layer up with a jacket when it's cold and windy",
  // ... add more quotes
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
          {/* Use an img tag to display the image */}
          <img
            className="quote-image"
            src={images[quoteIndex]}
            alt={`Image for quote ${quoteIndex + 1}`}
          />
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
