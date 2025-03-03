import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

function EnglishList() {
    return (
        <List sx={{ textAlign: 'center' }}>
          
          <Grid container spacing={2}>
  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      border: '4px solid yellow', 
      borderRadius: '20px', // Adjusted for better rounded corners
      padding: '15px', // Increased padding for more space
      width: '200px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px' // Added margin for spacing between items
    }}
  >
    <img 
      src="assets/fire.jpg" 
      alt="Description of the image" 
      width="40" 
      height="30" 
    />
    <span>FIRE <a href="tel:101">101</a></span>
  </ListItem>

  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      border: '4px solid yellow', 
      borderRadius: '20px',
      padding: '15px', 
      width: '200px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    <img 
      src="assets/ambulance.jpg"
      alt="Description of the image" 
      width="50" 
      height="60" 
    />
    <span>AMBULANCE <a href="tel:102">102</a></span>
  </ListItem>

  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      border: '4px solid yellow', 
      borderRadius: '20px', 
      padding: '15px', 
      width: '200px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    <img 
      src="assets/Child-Helpline.jpg"
      alt="Description of the image" 
      width="60" 
      height="80" 
    />
    <span>CHILD HELPLINE <a href="tel:1098">1098</a></span>
  </ListItem>

  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      border: '4px solid yellow', 
      borderRadius: '20px', 
      padding: '15px', 
      width: '200px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    <img 
      src="assets/traffic.jpg"
      alt="Description of the image" 
      width="70" 
      height="80" 
    />
    <span>TRAFFIC <a href="tel:1073">1073</a></span>
  </ListItem>

  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'left', 
      border: '4px solid yellow', 
      borderRadius: '20px', 
      padding: '15px', 
      width: '250px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    <img 
      src="assets/EMERGENCY.jpg"
      alt="Description of the image" 
      width="90" 
      height="90" 
    />
    <span>EMERGENCY <a href="tel:112">112</a></span>
  </ListItem>
  <ListItem 
    sx={{ 
      fontSize: '1.2rem', 
      textAlign: 'center', 
      border: '4px solid yellow', 
      borderRadius: '20px', 
      padding: '15px', 
      width: '250px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    <img 
      src="assets/TUBERCULOSIS.jpeg"
      alt="Description of the image" 
      width="70" 
      height="80" 
    />
    <span>TUBERCULOSIS <a href="tel: 022-22621625"> 022-22621625</a></span>
  </ListItem>

  <ListItem 
    sx={{ 
      fontSize: '1 rem', 
      textAlign: 'left', 
      border: '4px solid yellow', 
      borderRadius: '20px', 
      padding: '15px', 
      width: '300px', 
      height: '170px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '10px'
    }}
  >
    
    <span>
    <strong>Hospital and Pharmacies</strong>.
    <p class="text-justify"> 
        Sattva Pediatric - 
        <a href="tel:08655285545">08655285545</a>
    </p>
    <p class="text-justify">
        Wadia Hospital - 
        <Button href="https://maps.app.goo.gl/7eNnzKcrKau8uZn29">click here</Button>
    </p>
</span>

  </ListItem>
</Grid>


<ListItem 
  sx={{ 
    fontSize: '1.2rem', 
    textAlign: 'center', 
    color: 'black', // Changes the text color to black
    backgroundColor: 'white', // Adds a white background
    border: '4px solid black', // Adds a border to the box
    borderRadius: '15px', // Rounds the corners for a modern look
    padding: '15px', // Adds padding inside the box
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)', // Adds a subtle shadow for depth
    margin: '20px auto', // Centers the box and adds vertical margin
    maxWidth: '600px', // Sets a maximum width for the box
  }}
>
  INDIAN HELPLINE NUMBERS [MUMBAI] : <Button href="https://indianhelpline.com/">click here</Button>
</ListItem>

        </List>
    )
}

export default EnglishList
