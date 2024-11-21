import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItemIcon, ListItemText } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import CheckroomIcon from '@mui/icons-material/Checkroom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

const descriptions = {
    Dengue: {
        English: `Symptoms: High fever, severe headache, pain behind the eyes, joint & muscle pain and rash.

Prevention Tips:
- Use mosquito repellents.
- Sleep under a mosquito net.
- Avoid standing water around the home.





                              Safe Remedies:
- Papaya Leaf Extract: Known to help increase platelet count, papaya leaf juice (one tablespoon twice daily) may aid recovery.
- Hydration: Drink plenty of water, coconut water, and fruit juices to stay hydrated and support immune function.`,
        Hindi: `लक्षण: उच्च बुखार, तेज़ सिरदर्द, आँखों के पीछे दर्द, जोड़ों और मांसपेशियों में दर्द, चकत्ते।

रोकथाम के उपाय:
- मच्छर भगाने वाले का उपयोग करें।
- मच्छरदानी के नीचे सोएं।
- घर के आसपास खड़े पानी से बचें।

सुरक्षित उपाय:
- पपीते का पत्ता अर्क: पपीते का पत्ता प्लेटलेट्स बढ़ाने में सहायक हो सकता है। एक बड़ा चम्मच दिन में दो बार सेवन करें।
- हाइड्रेशन: पानी, नारियल पानी और फलों के रस का सेवन करें।`
    },

    Malaria: {
        English: `Symptoms:- Fever, chills, sweating, headache, nausea, vomiting.

Prevention Tips:
- Sleep under a mosquito net.
- Use insect repellents.
- Avoid outdoor activities at dusk.

Safe Remedies:
-  Boil few Neem leaves in water and take once a day as a preventive measure.
- Cinnamon Tea: Cinnamon is believed to help reduce inflammation. Boil a stick in water, add honey, and drink once daily.`,
        Hindi: `लक्षण: बुखार, ठंड लगना, पसीना आना, सिरदर्द, मतली, उल्टी।

रोकथाम के उपाय:
- मच्छरदानी के नीचे सोएं।
- मच्छर भगाने वाले का उपयोग करें।
- सूर्यास्त के समय बाहर जाने से बचें।

सुरक्षित उपाय:
- निवारक उपाय के रूप में नीम की कुछ पत्तियों को पानी में उबालें और दिन में एक बार लें।
- दालचीनी की चाय: दालचीनी सूजन को कम करने में सहायक हो सकती है। एक चम्मच शहद के साथ पीएं।`
    },

    "Seasonal Diseases": {
        English: `Common Cold and Flu (Winter Season)

Symptoms: Runny nose, sore throat, cough, fatigue, mild fever.

Prevention Tips:
- Practice good hygiene.
- Avoid close contact with infected individuals.
- Stay warm.

Safe Remedies:
- Ginger Tea with Honey: Ginger has antiviral properties; boil slices in water, add honey, and drink twice daily.
- Steam Inhalation: Inhale steam with eucalyptus oil to relieve congestion.`,
        Hindi: `सर्दी और फ्लू (सर्दियों के मौसम में)

लक्षण: नाक बहना, गले में खराश, खांसी, थकान, हल्का बुखार।

रोकथाम के उपाय:
- अच्छी स्वच्छता बनाए रखें।
- संक्रमित व्यक्तियों से दूर रहें।
- गर्म रहें।

सुरक्षित उपाय:
- अदरक की चाय और शहद: अदरक में एंटीवायरल गुण होते हैं। पानी में उबालें, शहद मिलाकर दिन में दो बार पियें।
- भाप लें: नाक बंद को खोलने के लिए नीलगिरी के तेल के साथ भाप लें।`
    },

    "Seasonal Changes": {
        English: `

1. Chikungunya
Symptoms: Sudden high fever, joint pain, rash, headache, fatigue.

Prevention Tips:
- Use mosquito repellents.
- Avoid stagnant water near your home.
- Wear long-sleeved clothing.

Safe Remedies:
- Turmeric Milk: Turmeric has anti-inflammatory properties that can help reduce joint pain. Drink a glass of warm milk with a pinch of turmeric daily.
- Ginger Tea: Ginger’s anti-inflammatory properties may alleviate pain; drink ginger tea once or twice daily.

2. Leptospirosis
Symptoms: Fever, muscle aches, headache, chills, nausea, vomiting. Severe cases may cause liver or kidney issues.

Prevention Tips:
- Avoid wading in or drinking contaminated water, especially during floods.
- Wear protective clothing if in contact with waterlogged areas.

Safe Remedies:
- Garlic: Garlic has antimicrobial properties. Chewing a clove or adding it to food may support immunity.
- Vitamin C-Rich Foods: Include foods like oranges and guavas to boost immunity and help the body fight infections.`,
        Hindi: `मानसून के मौसम में रोग:

1. चिकनगुनिया
लक्षण: अचानक तेज बुखार, जोड़ों का दर्द, चकत्ते, सिरदर्द, थकान।

रोकथाम के उपाय:
- मच्छर भगाने वाले का उपयोग करें।
- घर के आसपास ठहरे हुए पानी से बचें।
- लंबी आस्तीन वाले कपड़े पहनें।

सुरक्षित उपाय:
- हल्दी वाला दूध: हल्दी में सूजन कम करने के गुण होते हैं। एक गिलास गर्म दूध में एक चुटकी हल्दी मिलाकर पियें।
- अदरक की चाय: अदरक में सूजन कम करने के गुण होते हैं। दिन में एक या दो बार अदरक की चाय पियें।

2. लेप्टोस्पायरोसिस
लक्षण: बुखार, मांसपेशियों में दर्द, सिरदर्द, ठंड लगना, मतली, उल्टी। गंभीर मामलों में लीवर या किडनी की समस्याएं हो सकती हैं।

रोकथाम के उपाय:
- बाढ़ के दौरान दूषित पानी में चलने या पीने से बचें।
- जलभराव वाले क्षेत्रों में संपर्क के लिए सुरक्षात्मक कपड़े पहनें।

सुरक्षित उपाय:
- लहसुन: लहसुन में रोगाणुरोधी गुण होते हैं। लहसुन का सेवन या भोजन में मिलाकर खाएं।
- विटामिन सी युक्त खाद्य पदार्थ: संतरे और अमरूद जैसे खाद्य पदार्थ शामिल करें, जो प्रतिरक्षा प्रणाली को मजबूत करते हैं।`
    },

    "Fumigation Services": {
    English: `Fumigation services are essential for preventing the spread of vector-borne diseases by controlling mosquito and pest populations in areas with high infection risks.

Service Details:
- Effective against mosquitoes, flies, and other insects.
- Reduces the spread of dengue, malaria, and chikungunya.
- Performed by licensed professionals using safe fumigants.

Recommended Frequency:
- Monthly fumigation in high-risk areas.
- Before and during peak mosquito season for best results.

Fumigation services:
- 1916
- 91-8510036600
`,

    Hindi: `फ्यूमिगेशन सेवाएं मच्छरों और कीटों की आबादी को नियंत्रित करने के लिए आवश्यक हैं, जिससे संक्रमण की उच्च जोखिम वाले क्षेत्रों में रोग फैलने से रोका जा सकता है।

सेवा विवरण:
- मच्छरों, मक्खियों और अन्य कीड़ों के खिलाफ प्रभावी।
- डेंगू, मलेरिया और चिकनगुनिया के प्रसार को कम करता है।
- लाइसेंस प्राप्त पेशेवरों द्वारा सुरक्षित फ्यूमिगेंट का उपयोग किया जाता है।

अनुशंसित आवृत्ति:
- उच्च जोखिम वाले क्षेत्रों में मासिक फ्यूमिगेशन।
- सर्वोत्तम परिणामों के लिए मच्छर के चरम मौसम से पहले और उसके दौरान।


धूमन सेवाएं:
-1916
-91-8510036600
`
},

    "Weather Ready Essentials": {
        English: `### 1. Clothing Essentials for Various Weather Conditions

#### Summer
- **Clothing**: Choose affordable, lightweight fabrics like cotton. Opt for breathable options such as T-shirts, cotton dresses, and shorts for comfort in the heat.
- **Footwear**: Sandals or flip-flops are cost-effective and ideal for hot weather, providing ventilation and comfort.

#### Monsoon (Rainy Season)
- **Clothing**: Select quick-dry fabrics such as lightweight rain jackets, or repurpose old T-shirts and pants that dry easily. Consider using clothes you don't mind getting wet or damaged.
- **Footwear**: Waterproof rubber boots are essential in rainy conditions, but if unavailable, durable plastic sandals or shoes that dry quickly after getting wet are a good alternative.

#### Winter
- **Clothing**: Layer with sweaters, jackets, and scarves (or dupattas used as scarves) to keep warm. Layering is key to adjusting to varying temperatures.
- **Footwear**: Choose boots or sturdy shoes to protect your feet from the cold and wet conditions. Don’t forget thick socks for added warmth.
Masks and Respiratory Protection

 N95 Masks
Use: During poor air quality, dust storms, or respiratory outbreaks.
Precautions: Replace regularly (every 2-3 days).

Surgical Masks
Use: In crowded places or during flu season.
Precautions: Discard after each use.

Cloth Masks
Use: Daily activities, in crowded places.
Precautions: Wash after each use, ensure full coverage`,
        Hindi: `### 1. विभिन्न मौसम स्थितियों के लिए आवश्यक वस्त्र

#### गर्मी
- **कपड़े**: कॉटन जैसे किफायती, हल्के कपड़े चुनें - टी-शर्ट, सूती कपड़े और शॉर्ट्स आरामदायक होते हैं 
- **जूते**: सैंडल या फ्लिप-फ्लॉप अक्सर गर्म मौसम के लिए सबसे किफायती और आरामदायक जूते होते हैं। 

#### मानसून (बरसात का मौसम)
- **कपड़े**: जल्दी सूखने वाले कपड़े, जैसे हल्के रेन जैकेट या पुरानी टी-शर्ट और पैंट जो आसानी से सूख जाते हैं। बरसात के मौसम के लिए पुराने कपड़ों को दोबारा इस्तेमाल करने पर विचार करें।
- **जूते**: जलरोधक रबर के जूते आवश्यक हो सकते हैं, लेकिन यदि अनुपलब्ध हैं, तो टिकाऊ प्लास्टिक के सैंडल या जूते जो भीगने के बाद आसानी से सूख सकते हैं।

#### सर्दी 
- **कपड़े**: स्वेटर, जैकेट और दुपट्टे जिनका उपयोग स्कार्फ के रूप में किया जा सकता है 
- **जूते**: जूते या मजबूत जूते जो ठंड और गीलेपन से बचाने में मदद कर सकते हैं। अपने पैरों को मोज़े से ढककर रखें 

### 2. मौसम की स्थिति के लिए प्राथमिक चिकित्सा किट

#### ग्रीष्म/गर्मी:
- गर्मी से संबंधित बीमारियों को रोकने के लिए नमक, चीनी और पानी जैसी बुनियादी सामग्री का उपयोग करके DIY पुनर्जलीकरण समाधान।
- कूलिंग जेल या एलोवेरा (स्थानीय स्तर पर मुफ्त में उगाया जा सकता है या कम लागत पर खरीदा जा सकता है)।
- मामूली कट और खरोंच के लिए बैंड-एड्स।

#### मानसून/बारिश:
- मच्छर दूर भागने वाला 
- सरल एंटीसेप्टिक समाधान (मामूली काटने या घावों के इलाज के लिए प्रभावी)।
- कट या फफोले के लिए जलरोधक पट्टियाँ।

#### जाड़े की सर्दी:
- फटने से बचाने के लिए लिप बाम।
- साधारण हैंड वार्मर (जिसे कपड़े के पाउच में नमक और चावल का उपयोग करके घर पर बनाया जा सकता है)।
- शुष्क त्वचा को रोकने के लिए वैसलीन या गाढ़ा लोशन। 
मास्क और श्वसन सुरक्षा

 N95 मास्क
उपयोग: खराब वायु गुणवत्ता, धूल भरी आँधी, या श्वसन प्रकोप के दौरान।
सावधानियां: नियमित रूप से बदलें (हर 2-3 दिन में)।

सर्जिकल मास्क
उपयोग: भीड़-भाड़ वाली जगहों पर या फ्लू के मौसम में।
सावधानियाँ: प्रत्येक उपयोग के बाद त्याग दें।

कपड़े का मास्क
उपयोग: दैनिक गतिविधियाँ, भीड़-भाड़ वाली जगहों पर।
सावधानियां: प्रत्येक उपयोग के बाद धोएं, पूर्ण कवरेज सुनिश्चित क`
    }
};

const Awareness = ({ currentLanguage }) => {
    const [currentSelection, setCurrentSelection] = useState("");
    const [open, setOpen] = useState(false);

    const handleOpen = (selection) => {
        setCurrentSelection(selection);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <Typography variant="h5" align="center" sx={{ mb: 2, mt: 3, fontWeight: 'bold', color: 'black' }}>
                {currentLanguage === 'English' ? 'Health Awareness' : 'स्वास्थ्य जागरूकता'}
            </Typography>
            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {["Dengue", "Malaria", "Seasonal Diseases", "Seasonal Changes", "Fumigation Services","Weather Ready Essentials"].map((item) => (
                    <ListItem
                        key={item}
                        onClick={() => handleOpen(item)}
                        sx={{
                            cursor: 'pointer',
                            border: '1px solid #d3d3d3',
                            borderRadius: '10px',
                            width: '300px',
                            margin: '10px 0',
                            backgroundColor: '#f7f7f7',
                            '&:hover': { backgroundColor: '#e0f7fa' },
                        }}
                    >
                        <ListItemIcon>
                            {item === "Dengue" && <HealthAndSafetyIcon color="primary" />}
                            {item === "Malaria" && <AcUnitIcon color="secondary" />}
                            {item === "Seasonal Diseases" && <LocalHospitalIcon color="error" />}
                            {item === "Seasonal Changes" && <FilterDramaIcon color="info" />}
                            {item === "Fumigation Services" && <CleaningServicesIcon color="action" />}
                            {item === "Weather Ready Essentials" && <CheckroomIcon color="success" />}
                        </ListItemIcon>
                        <ListItemText primary={item} sx={{ color: 'black' }} />
                    </ListItem>
                ))}
            </List>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'black' }}>
                        {currentSelection}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>
                        {(descriptions[currentSelection] && descriptions[currentSelection][currentLanguage]) ||
                        `More information about ${currentSelection} will be displayed here.`}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default Awareness;
