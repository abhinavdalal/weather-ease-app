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
        <br />
        2 बड़े चम्मच बेसन<br />
        1 बड़ा चम्मच दही<br />
        1 चम्मच शहद<br />
        एक चुटकी हल्दी <br />
        गुलाब जल या सादा पानी (एकरूपता के लिए आवश्यकतानुसार)
      </p>
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        1. In a bowl, mix besan, yogurt, honey, and turmeric .<br />
        2. Add rosewater or water gradually to form a smooth paste with a spreadable consistency.<br />
        3. Ensure that the mixture is free of lumps and well-blended.<br />
        4. Apply the pack to your face and neck, avoiding the eye area.<br />
        5. Leave it on for 15-20 minutes or until it dries.<br />
        6. Gently rinse off with lukewarm water and pat your skin dry.
      <br/>
        1. एक कटोरे में बेसन, दही, शहद और हल्दी मिलाएं
        2. फैलाने योग्य स्थिरता के साथ एक चिकना पेस्ट बनाने के लिए धीरे-धीरे गुलाब जल या पानी मिलाएं।<br />
        3. सुनिश्चित करें कि मिश्रण में गांठें न हों और अच्छी तरह मिश्रित हो।<br />
        4. आंखों के क्षेत्र को बचाते हुए पैक को अपने चेहरे और गर्दन पर लगाएं।<br />
        5. इसे 15-20 मिनट तक या सूखने तक लगा रहने दें।<br />
        6. धीरे-धीरे गुनगुने पानी से धो लें और अपनी त्वचा को थपथपाकर सुखा लें।
      </p>

      <h1 className="recipe-name">Homemade Sunscreen</h1>
      <p className="recipe-ingredients">
        <strong>Ingredients:</strong><br />
        Coconut Oil: Coconut oil has natural SPF properties, but it's not sufficient on its own.<br />
        Aloe Vera Gel: Known for its soothing properties and can contribute to the overall texture of the sunscreen.<br />
        Sesame Oil: Another oil with natural SPF properties.<br />
        Essential Oil (e.g., Lavender or Neem): Optional for fragrance and additional skin benefits.
        <br />
        नारियल तेल: नारियल तेल में प्राकृतिक एसपीएफ़ गुण होते हैं, लेकिन यह अपने आप में पर्याप्त नहीं है।<br />
        एलोवेरा जेल: अपने सुखदायक गुणों के लिए जाना जाता है और सनस्क्रीन की समग्र बनावट में योगदान दे सकता है।<br />
        तिल का तेल: प्राकृतिक एसपीएफ़ गुणों वाला एक और तेल।<br />
        आवश्यक तेल (जैसे, लैवेंडर या नीम): सुगंध और अतिरिक्त त्वचा लाभ के लिए वैकल्पिक।
      </p>
      <p className="recipe-instructions">
        <strong>Instructions:</strong><br />
        Mix equal parts coconut oil and sesame oil, and then add an equal amount of aloe vera gel. Optionally, add a few drops of essential oil for fragrance. Stir thoroughly to ensure an even distribution. Store the mixture in a dark glass container. Apply to your skin before sun exposure and reapply as needed, especially after swimming or sweating. Note that this homemade sunscreen may not provide the same level of protection as commercially available sunscreens, and a patch test is advisable, especially for sensitive skin.
        <br />
        नारियल तेल और तिल के तेल को बराबर मात्रा में मिलाएं और फिर बराबर मात्रा में एलोवेरा जेल मिलाएं। वैकल्पिक रूप से, सुगंध के लिए आवश्यक तेल की कुछ बूँदें जोड़ें। समान वितरण सुनिश्चित करने के लिए अच्छी तरह हिलाएँ। मिश्रण को एक गहरे रंग के कांच के कंटेनर में रखें। धूप में निकलने से पहले अपनी त्वचा पर लगाएं और आवश्यकतानुसार दोबारा लगाएं, खासकर तैराकी या पसीना आने के बाद। ध्यान दें कि यह होममेड सनस्क्रीन व्यावसायिक रूप से उपलब्ध सनस्क्रीन के समान सुरक्षा प्रदान नहीं कर सकता है, और विशेष रूप से संवेदनशील त्वचा के लिए पैच परीक्षण की सलाह दी जाती है।
      </p>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Recipe;
