import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../../components/OpenBar';

function Introduction() {
  return (
    <>
      {/* <div className='font-bold	text-2xl'>testing</div> */}
      <ResponsiveAppBar />
      <Container sx={{ mt: 4, backgroundColor: '#ADD8E6', padding: '20px', borderRadius: '10px' }}>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <div className="intro-container"></div>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#000' }}>
            Dear Families, we are here to empower our communities with weather updates, words of encouragement, and crucial recommendations. Weathering storms together because every forecast deserves hope and support.  प्रिय परिवारों, हम मौसम संबंधी अपडेट, प्रोत्साहन के शब्दों और महत्वपूर्ण अनुशंसाओं के साथ अपने समुदायों को सशक्त बनाने के लिए यहां हैं। तूफ़ानों का मिलकर सामना करें क्योंकि हर पूर्वानुमान आशा और समर्थन का पात्र है।
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography classes={{"root" : "text-4xl"}} variant="h4" sx={{ color: '#000' }}>
            Select an Option
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to="/home" variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Students (छात्र)
          </Button>
          <Button component={Link} to="/home" variant="contained" color="primary">
            Parents (अभिभावक)
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Introduction;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '../../components/OpenBar';

// function Introduction() {
//   return (
//     <>
//       <ResponsiveAppBar />
//       <div className="mt-4 bg-blue-200 p-5 rounded-lg">
//         <div className="text-center mb-4">
//           <p className="text-lg text-black">
//             Dear Families, we are here to empower our communities with weather updates, words of encouragement, and crucial recommendations. Weathering storms together because every forecast deserves hope and support.  प्रिय परिवारों, हम मौसम संबंधी अपडेट, प्रोत्साहन के शब्दों और महत्वपूर्ण अनुशंसाओं के साथ अपने समुदायों को सशक्त बनाने के लिए यहां हैं। तूफ़ानों का मिलकर सामना करें क्योंकि हर पूर्वानुमान आशा और समर्थन का पात्र है।
//           </p>
//         </div>
//         <div className="text-center mb-2">
//           <h4 className="text-2xl text-black">
//             Select an Option
//           </h4>
//         </div>
//         <div className="flex justify-center">
//           <Link to="/home" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">
//             Students (छात्र)
//           </Link>
//           <Link to="/home" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">
//             Parents (अभिभावक)
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Introduction;
