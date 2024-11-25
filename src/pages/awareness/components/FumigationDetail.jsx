import React from 'react';

const descriptions = {
  English: {
    "➡":"Fumigation services are essential for preventing the spread of vector-borne diseases by controlling mosquito and pest populations in areas with high infection risks.",
    "ServiceDetails": "- Effective against mosquitoes, flies, and other insects.\nReduces the spread of dengue, malaria, and chikungunya.\n- Performed by licensed professionals using safe fumigants.",
    "RecommendedFrequency": "- Monthly fumigation in high-risk areas.\n- Before and during peak mosquito season for best results.",  // Fixed key
    "ContactNo.": "- BMC 1916",
    "PrivateCompanyContact": " 91-8510036600", 
  },
  Hindi: {
    "➡": "फ्यूमिगेशन सेवाएं मच्छरों और कीटों की आबादी को नियंत्रित करने के लिए आवश्यक हैं, जिससे संक्रमण की उच्च जोखिम वाले क्षेत्रों में रोग फैलने से रोका जा सकता है।",
    "ServiceDetails": "- मच्छरों, मक्खियों और अन्य कीड़ों के खिलाफ प्रभावी।\n- डेंगू, मलेरिया और चिकनगुनिया के प्रसार को कम करता है।\n- लाइसेंस प्राप्त पेशेवरों द्वारा सुरक्षित फ्यूमिगेंट का उपयोग किया जाता है।",
    "RecommendedFrequency": "- उच्च जोखिम वाले क्षेत्रों में मासिक फ्यूमिगेशन।\n- सर्वोत्तम परिणामों के लिए मच्छर के चरम मौसम से पहले और उसके दौरान।",  // Fixed key
    "ContactNo.": "- BMC 1916",
    "PrivateCompanyContact": " 91-8510036600",  
  }
};

function FumigationDetail({ currentLanguage }) {
  const currentSelection = "Fumigation Detail";
  return (
    <>
      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "➡ :" : " ➡:"}</span>
        <span>
          {descriptions[currentLanguage] && descriptions[currentLanguage]["➡"]
            ? descriptions[currentLanguage]["➡"]
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "ServiceDetails :" : "सेवाविवरण :"}</span>
        <span>
          {descriptions[currentLanguage] && descriptions[currentLanguage]["ServiceDetails"]
            ? descriptions[currentLanguage]["ServiceDetails"]
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "Recommended Frequency :" : "अनुशंसित आवृत्ति :"}</span>
        <span>
          {descriptions[currentLanguage] && descriptions[currentLanguage]["RecommendedFrequency"]
            ? descriptions[currentLanguage]["RecommendedFrequency"]
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "ContactNo. :" : "संपर्क नं.:"}</span>
        <span>
          {descriptions[currentLanguage] && descriptions[currentLanguage]["ContactNo."]
            ? descriptions[currentLanguage]["ContactNo."]
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "Private Company Contact :" : "प्राइवेट कंपनी संपर्क :"}</span>
        <span>
          {descriptions[currentLanguage] && descriptions[currentLanguage]["PrivateCompanyContact"]
            ? descriptions[currentLanguage]["PrivateCompanyContact"]
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>
    </>
  );
}

export default FumigationDetail;
