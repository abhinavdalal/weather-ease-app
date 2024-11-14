import React, { useState } from 'react';
import './Recipe.css';
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Recipe = ({currentLanguage}) => {

  return (
    <div className="recipe-container">

      <h1 className="recipe-name">Besan Moisturizing Face Pack</h1>
      
      {/* Ingredients */}
      <p className="recipe-ingredients">
        <strong>Ingredients:</strong><br />
        {currentLanguage === 'English' ? (
          <>
            2 tablespoons besan (gram flour)<br />
            1 tablespoon yogurt<br />
            1 teaspoon honey<br />
            A pinch of turmeric<br />
            Rosewater or plain water (as needed for consistency)
          </>
        ) : (
          <>
            2 बड़े चम्मच बेसन<br />
            1 बड़ा चम्मच दही<br />
            1 चम्मच शहद<br />
            एक चुटकी हल्दी<br />
            गुलाब जल या सादा पानी (एकरूपता के लिए आवश्यकतानुसार)
          </>
        )}
      </p>

      {/* Instructions */}
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        {currentLanguage === 'English' ? (
          <>
            1. In a bowl, mix besan, yogurt, honey, and turmeric.<br />
            2. Add rosewater or water gradually to form a smooth paste.<br />
            3. Ensure the mixture is lump-free and well-blended.<br />
            4. Apply to face and neck, avoiding the eye area.<br />
            5. Leave for 15-20 minutes or until it dries.<br />
            6. Rinse off with lukewarm water and pat dry.
          </>
        ) : (
          <>
            1. एक कटोरे में बेसन, दही, शहद और हल्दी मिलाएं।<br />
            2. फैलाने योग्य स्थिरता के साथ एक चिकना पेस्ट बनाने के लिए धीरे-धीरे गुलाब जल या पानी मिलाएं।<br />
            3. सुनिश्चित करें कि मिश्रण में गांठें न हों और अच्छी तरह मिश्रित हो।<br />
            4. आंखों के क्षेत्र को बचाते हुए पैक को अपने चेहरे और गर्दन पर लगाएं।<br />
            5. इसे 15-20 मिनट तक या सूखने तक लगा रहने दें।<br />
            6. धीरे-धीरे गुनगुने पानी से धो लें और थपथपाकर सुखा लें।
          </>
        )}
      </p>

      <h1 className="recipe-name">Homemade Sunscreen</h1>

      {/* Ingredients for Sunscreen */}
      <p className="recipe-ingredients">
        <strong>Ingredients:</strong><br />
        {currentLanguage === 'English' ? (
          <>
            Coconut Oil: Has natural SPF properties, but it's not sufficient alone.<br />
            Aloe Vera Gel: Known for soothing properties.<br />
            Sesame Oil: Another oil with natural SPF.<br />
            Essential Oil (e.g., Lavender or Neem): Optional for fragrance.
          </>
        ) : (
          <>
            नारियल तेल: प्राकृतिक एसपीएफ़ गुण होते हैं, लेकिन यह अपने आप में पर्याप्त नहीं है।<br />
            एलोवेरा जेल: अपने सुखदायक गुणों के लिए जाना जाता है।<br />
            तिल का तेल: प्राकृतिक एसपीएफ़ गुणों वाला एक और तेल।<br />
            आवश्यक तेल (जैसे, लैवेंडर या नीम): सुगंध और अतिरिक्त लाभ के लिए।
          </>
        )}
      </p>

      {/* Instructions for Sunscreen */}
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        {currentLanguage === 'English' ? (
          <>
            Mix equal parts coconut and sesame oil, then add an equal amount of aloe vera gel. Optionally, add a few drops of essential oil. Stir well and store in a dark glass container. Apply before sun exposure and reapply as needed.
          </>
        ) : (
          <>
            नारियल और तिल के तेल को बराबर मात्रा में मिलाएं, फिर एलोवेरा जेल मिलाएं। सुगंध के लिए आवश्यक तेल की कुछ बूँदें डालें। अच्छी तरह हिलाएँ और एक गहरे कांच के कंटेनर में रखें। धूप में निकलने से पहले लगाएं।
          </>
        )}
      </p>

      
    </div>
  );
};

export default Recipe;

