import React from 'react'

const descriptions = {
    Dengue: {
        English: {"Symptoms": "High fever, severe headache, pain behind the eyes, joint & muscle pain, rash.", 
        "Prevention": "Use mosquito repellents, sleep under mosquito nets, avoid stagnant water.",
        "Remedies": "Papaya leaf extract (one tablespoon twice daily), stay hydrated with water, coconut water, and fruit juices."
        },
        Hindi:{ "Symptoms":" उच्च बुखार, तेज़ सिरदर्द, आँखों के पीछे दर्द, जोड़ों और मांसपेशियों में दर्द, चकत्ते।",
"Prevention":" मच्छर भगाने वाले का उपयोग करें, मच्छरदानी के नीचे सोएं, ठहरे हुए पानी से बचें।",
"Remedies":" पपीते का पत्ता अर्क, भरपूर पानी और नारियल पानी पीएं।"}
    },

    Malaria: {
        English: {"Symptoms":" Fever, chills, sweating, headache, nausea, vomiting.",
"Prevention":" Sleep under mosquito nets, use insect repellents, avoid outdoor activities at dusk.",
"Remedies":" Neem leaf tea, cinnamon tea with honey."},
        Hindi: {"Symptoms": "बुखार, ठंड लगना, पसीना आना, सिरदर्द, मतली, उल्टी।",
"Prevention":" मच्छरदानी का उपयोग करें, मच्छर भगाने वाले लगाएं, सूर्यास्त के समय बाहर जाने से बचें।",
"Remedies":" नीम की पत्ती की चाय, दालचीनी की चाय।"}
    },

    "Seasonal Diseases": {
        English: {"Symptoms":"(Common Cold & Flu Symptoms) Runny nose, sore throat, cough, fatigue, mild fever.",
"Prevention":" Maintain good hygiene, avoid close contact with sick individuals, stay warm.",
"Remedies":" Ginger tea with honey, steam inhalation with eucalyptus oil."},
        Hindi: {"Symptoms":"(सर्दी और फ्लू के लक्षण) नाक बहना, गले में खराश, खांसी, थकान, हल्का बुखार।",
"Prevention":" स्वच्छता बनाए रखें, बीमार लोगों से दूर रहें, गर्म रहें।",
"Remedies":" अदरक की चाय, नीलगिरी के तेल के साथ भाप।"}
    },

"Chikungunya": {
    English: {
        "Symptoms": "(Symptoms of Chikungunya)High fever, joint pain, rash, fatigue.",
        "Prevention": "Use mosquito repellents, wear long-sleeved clothing, avoid stagnant water.",
        "Remedies": "Turmeric milk, ginger tea."
    },
    Hindi: {
        "Symptoms": "(चिकनगुनिया के लक्षण) तेज बुखार, जोड़ों का दर्द, चकत्ते, थकान।",
        "Prevention": "मच्छर भगाने वाले का उपयोग करें, लंबी आस्तीन के कपड़े पहनें।",
        "Remedies": "हल्दी वाला दूध, अदरक की चाय।"
    }
},
"Tuberculosis": {  // Added new disease - Tuberculosis
    English: {
        "Symptoms": "Persistent cough, chest pain, weight loss, fatigue, fever, night sweats.",
        "Prevention": "Avoid close contact with infected individuals, cover mouth while coughing, wear masks.",
        "Remedies": "Ensure proper rest, nutrition, and follow TB treatment protocol prescribed by healthcare providers."
    },
    Hindi: {
        "Symptoms": "लगातार खांसी, सीने में दर्द, वजन घटना, थकान, बुखार, रात को पसीना आना।",
        "Prevention": "संक्रमित व्यक्तियों के निकट संपर्क से बचें, खांसी करते समय मुँह ढकें, मास्क पहनें।",
        "Remedies": "सही आराम, पोषण प्राप्त करें, और स्वास्थ्य सेवा प्रदाताओं द्वारा निर्धारित टीबी उपचार का पालन करें।"
    }
  },

};
    
    function DiseaseDetail({currentLanguage,currentSelection}) {
  return (
    <>
    <div className="mt-2 text-justify">
                        <span className=''>{ currentLanguage === "English"  ? "Symptoms :" : "लक्षण :" }</span>
                        <span>{((descriptions[currentSelection] && descriptions[currentSelection][currentLanguage] && descriptions[currentSelection][currentLanguage]["Symptoms"]) ||
                        `More information about ${currentSelection} will be displayed here.`)}
                        </span>   
                    </div>
                    <div className="mt-2 text-justify">
                        <span className=''>{ currentLanguage === "English"  ? "Prevention :" : "रोकथाम :" }</span>
                        <span>{((descriptions[currentSelection] && descriptions[currentSelection][currentLanguage] && descriptions[currentSelection][currentLanguage]["Prevention"]) ||
                        `More information about ${currentSelection} will be displayed here.`)}
                        </span>   
                    </div>
                    <div className="mt-2 text-justify">
                        <span className=''>{ currentLanguage === "English"  ? "Remedies :" : "उपाय :" }</span>
                        <span>{((descriptions[currentSelection] && descriptions[currentSelection][currentLanguage] && descriptions[currentSelection][currentLanguage]["Remedies"]) ||
                        `More information about ${currentSelection} will be displayed here.`)}
                        </span>   
                    </div>
                    </>
   
  )
}

export default DiseaseDetail