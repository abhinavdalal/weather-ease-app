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
import DiseaseDetail from './components/DiseaseDetail';
import FumigationDetail from './components/FumigationDetail';
import AwarenessDetail from './components/AwarenessDetail';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'blue',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 5,
    textAlign: 'center',
    color: 'white',
};

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
        English: {" Symptoms":" (Chikungunya Symptoms)High fever, joint pain, rash, fatigue.",
"Prevention":" Use mosquito repellents, wear long-sleeved clothing, avoid stagnant water.",
"Remedies":" Turmeric milk, ginger tea."},
        Hindi: {"Symptoms":"(चिकनगुनिया के लक्षण) तेज बुखार, जोड़ों का दर्द, चकत्ते, थकान।",
"Prevention":" मच्छर भगाने वाले का उपयोग करें, लंबी आस्तीन के कपड़े पहनें।",
"Remedies":" हल्दी वाला दूध, अदरक की चाय।"}
    },

   "Fumigation Services": {
    English: {
      description:
        "Fumigation services are essential for preventing the spread of vector-borne diseases by controlling mosquito and pest populations in areas with high infection risks.",
     " ServiceDetails": "- Effective against mosquitoes, flies, and other insects.\n- Reduces the spread of dengue, malaria, and chikungunya.\n- Performed by licensed professionals using safe fumigants.",
      "RecommendedFrequency": "- Monthly fumigation in high-risk areas.\n- Before and during peak mosquito season for best results.",
      "ContactNo.": "- BMC 1916\n- PRIVATE COMPANY 91-8510036600",
    },
    Hindi: {
      description:
        "फ्यूमिगेशन सेवाएं मच्छरों और कीटों की आबादी को नियंत्रित करने के लिए आवश्यक हैं, जिससे संक्रमण की उच्च जोखिम वाले क्षेत्रों में रोग फैलने से रोका जा सकता है।",
      "सेवाविवरण": "- मच्छरों, मक्खियों और अन्य कीड़ों के खिलाफ प्रभावी।\n- डेंगू, मलेरिया और चिकनगुनिया के प्रसार को कम करता है।\n- लाइसेंस प्राप्त पेशेवरों द्वारा सुरक्षित फ्यूमिगेंट का उपयोग किया जाता है।",
     " अनुशंसित आवृत्ति": "- उच्च जोखिम वाले क्षेत्रों में मासिक फ्यूमिगेशन।\n- सर्वोत्तम परिणामों के लिए मच्छर के चरम मौसम से पहले और उसके दौरान।",
     " संपर्क नं.": "- BMC 1916\n- PRIVATE COMPANY 91-8510036600",
    },
  },

    
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
        "गर्मी": {
            "कपड़े": "कॉटन की टी-शर्ट, ड्रेसेस और शॉर्ट्स जैसी सांस लेने योग्य, हल्की कपड़ों का चयन करें।",
            "जूते": "वेंटिलेशन के लिए सैंडल या फ्लिप-फ्लॉप्स।"
        },
        "बरसात": {
            "कपड़े": "जल्द सूखने वाले कपड़े, हल्की वर्षा जैकेट या पुराने, आसानी से सूखने वाले कपड़े पहनें।",
            "जूते": "वॉटरप्रूफ बूट या मजबूत प्लास्टिक सैंडल/जूते जो जल्दी सूखते हैं।"
        },
        "सर्दी": {
            "कपड़े": "गर्म रहने के लिए स्वेटर, जैकेट, स्कार्फ या दुपट्टा पहनें।",
            "जूते": "इंसुलेशन के लिए मोटे मोजे के साथ मजबूत जूते या बूट।"
        },
        "मास्क और श्वसन सुरक्षा": {
            "N95 मास्क": "खराब वायु गुणवत्ता या प्रकोपों के लिए; हर 2-3 दिन में बदलें।",
            "सर्जिकल मास्क": "भीड़-भाड़ वाले क्षेत्रों या फ्लू सीज़न के लिए; उपयोग के बाद फेंक दें।"
        }
    }
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
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
              <HealthAndSafetyIcon
                        sx={{ marginRight: 2, color: 'green', fontSize: '1.5rem' }}
                    />
         Health & Safety
        </AccordionSummary>
        <AccordionDetails>
        <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {["Dengue", "Malaria", "Seasonal Diseases", "Chikungunya"].map((item) => (
                    <ListItem
                        key={item}
                        onClick={() => handleOpen(item)}
                        sx={{
                            cursor: 'pointer',
                            border: '1px solid #d3d3d3',
                            borderRadius: '10px',
                            width: '200px',
                            margin: '10px 0',
                            backgroundColor: '#f7f7f7',
                            '&:hover': { backgroundColor: '#e0f7fa' },
                        }}
                    >
                        <ListItemIcon>
                            {item === "Dengue" && <HealthAndSafetyIcon color="primary" />}
                            {item === "Malaria" && <AcUnitIcon color="secondary" />}
                            {item === "Seasonal Diseases" && <LocalHospitalIcon color="error" />}
                            {item === "Chikungunya" && <FilterDramaIcon color="info" />}
                            
                        </ListItemIcon>
                        <ListItemText primary={item} sx={{ color: 'black' }} />
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
      </Accordion>
            
            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {[ "Fumigation Services", "Weather Ready Essentials"].map((item) => (
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
                            {item === "Chikungunya" && <FilterDramaIcon color="info" />}
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

    {["Dengue", "Malaria", "Seasonal Diseases", "Chikungunya"].includes(currentSelection) && (
      <DiseaseDetail currentLanguage={currentLanguage} currentSelection={currentSelection} />
    )}

    {currentSelection === "Fumigation Services" && (
      <FumigationDetail currentLanguage={currentLanguage} />
    )}

    {currentSelection === "Weather Ready Essentials" && (
      <AwarenessDetail currentLanguage={currentLanguage} />
    )}
  

        

                    {/* <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black' }}> */}
                    {/* <div className="mt-2 text-justify">
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
                    </div> */}
                    {/* </Typography> */}
                </Box>
            </Modal>
        </>
    );
};

export default Awareness;
