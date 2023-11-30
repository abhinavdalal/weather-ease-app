import React from 'react';
import './Recipe.css';
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";

const Recipe = () => {
  return (
    <div className="recipe-container">
     <ResponsiveAppBar /> 
      <h1 className="recipe-name">Besan Moisturizing Face Pack</h1>
      <p className="recipe-ingredients">
        <strong>Ingredients:</strong><br />
        2 tablespoons besan (gram flour)<br />
        1 tablespoon yogurt<br />
        1 teaspoon honey<br />
        A pinch of turmeric <br />
        Rosewater or plain water (as needed for consistency)
      </p>
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        1. In a bowl, mix besan, yogurt, honey, and turmeric .<br />
        2. Add rosewater or water gradually to form a smooth paste with a spreadable consistency.<br />
        3. Ensure that the mixture is free of lumps and well-blended.<br />
        4. Apply the pack to your face and neck, avoiding the eye area.<br />
        5. Leave it on for 15-20 minutes or until it dries.<br />
        6. Gently rinse off with lukewarm water and pat your skin dry.
      </p>

      <h1 className="recipe-name">Homemade Sunscreen</h1>
      <p className="recipe-ingredients">
        <strong>Ingredients:</strong><br />
        Coconut Oil: Coconut oil has natural SPF properties, but it's not sufficient on its own.<br />
        Aloe Vera Gel: Known for its soothing properties and can contribute to the overall texture of the sunscreen.<br />
        Sesame Oil: Another oil with natural SPF properties.<br />
        Essential Oil (e.g., Lavender or Neem): Optional for fragrance and additional skin benefits.
      </p>
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        Mix equal parts coconut oil and sesame oil, and then add an equal amount of aloe vera gel. Optionally, add a few drops of essential oil for fragrance. Stir thoroughly to ensure an even distribution. Store the mixture in a dark glass container. Apply to your skin before sun exposure and reapply as needed, especially after swimming or sweating. Note that this homemade sunscreen may not provide the same level of protection as commercially available sunscreens, and a patch test is advisable, especially for sensitive skin.
      </p>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Recipe;
