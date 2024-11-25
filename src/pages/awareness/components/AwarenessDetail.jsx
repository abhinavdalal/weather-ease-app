import React from 'react';

const descriptions = {
  "Weather Ready Essentials": {
    English: {
      "Summer": {
        "Clothing": "Opt for breathable, lightweight fabrics like cotton T-shirts, dresses, and shorts.",
        "Footwear": "Sandals or flip-flops for ventilation."
      },
      "Monsoon": {
        "Clothing": "Use quick-dry fabrics, lightweight rain jackets, or old, easy-to-dry clothes.",
        "Footwear": "Waterproof boots or durable plastic sandals/shoes that dry quickly."
      },
      "Winter": {
        "Clothing": "Layer with sweaters, jackets, scarves, or dupattas to stay warm.",
        "Footwear": "Sturdy shoes or boots with thick socks for insulation."
      },
      "Masks and Respiratory Protection": {
        "N95 Masks": "For poor air quality or outbreaks; replace every 2–3 days.",
        "Surgical Masks": "For crowded areas or flu season; discard after use."
      }
    },
    Hindi: {
      "Summer": {
        "Clothing": "कॉटन की टी-शर्ट, ड्रेसेस और शॉर्ट्स जैसी सांस लेने योग्य, हल्की कपड़ों का चयन करें।",
        "Footwear": "वेंटिलेशन के लिए सैंडल या फ्लिप-फ्लॉप्स।"
      },
      "Monsoon": {
        "Clothing": "जल्द सूखने वाले कपड़े, हल्की वर्षा जैकेट या पुराने, आसानी से सूखने वाले कपड़े पहनें।",
        "Footwear": "वॉटरप्रूफ बूट या मजबूत प्लास्टिक सैंडल/जूते जो जल्दी सूखते हैं।"
      },
      "Winter": {
        "Clothing": "गर्म रहने के लिए स्वेटर, जैकेट, स्कार्फ या दुपट्टा पहनें।",
        "Footwear": "इंसुलेशन के लिए मोटे मोजे के साथ मजबूत जूते या बूट।"
      },
      "Masks and Respiratory Protection": {
        "N95 Masks": "खराब वायु गुणवत्ता या प्रकोपों के लिए; हर 2-3 दिन में बदलें।",
        "सर्जिकल मास्क": "भीड़-भाड़ वाले क्षेत्रों या फ्लू सीज़न के लिए; उपयोग के बाद फेंक दें।"
      }
    }
  }
};

function AwarenessDetail({ currentLanguage }) {
  const currentSelection = "Awareness Detail";
  
  // Access the language section from the "Weather Ready Essentials" object
  const languageData = descriptions["Weather Ready Essentials"][currentLanguage];

  return (
    <>
      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "Summer :" : "गर्मियां :"}</span>
        <span>
          {languageData && languageData["Summer"]
            ? `${languageData["Summer"].Clothing} ${languageData["Summer"].Footwear}`
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "Monsoon :" : "मानसून :"}</span>
        <span>
          {languageData && languageData["Monsoon"]
            ? `${languageData["Monsoon"].Clothing} ${languageData["Monsoon"].Footwear}`
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>

      <div className="mt-4 text-justify">
        <span className=''>{currentLanguage === "English" ? "Winter :" : "सर्दियां :"}</span>
        <span>
          {languageData && languageData["Winter"]
            ? `${languageData["Winter"].Clothing} ${languageData["Winter"].Footwear}`
            : `More information about ${currentSelection} will be displayed here.`}
        </span>
      </div>
    </>
  );
}

export default AwarenessDetail;
