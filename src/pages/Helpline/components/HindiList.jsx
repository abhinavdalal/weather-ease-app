import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
//import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function EnglishList() {
    return (
      <List sx={{ textAlign: 'center' }}>
            <Grid container spacing={2}>
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
                        src="/assets/fire.jpg"
                        alt="Description of the image"
                        width="40"
                        height="30" />
                    <span>आग <a href="tel:101">101</a></span>
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
                        src="/assets/ambulance.jpg"
                        alt="Description of the image"
                        width="50"
                        height="60" />
                    <span>एम्बुलेंस <a href="tel:102">102</a></span>
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
                        src="/assets/Child-Helpline.jpg"
                        alt="Description of the image"
                        width="60"
                        height="80" />
                    <span>बाल हेल्पलाइन <a href="tel:1098">1098</a></span>
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
                        src="/assets/traffic.jpg"
                        alt="Description of the image"
                        width="70"
                        height="80" />
                    <span>ट्रैफ़िक <a href="tel:1073">1073</a></span>
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
                        src="/assets/EMERGENCY.jpg"
                        alt="Description of the image"
                        width="90"
                        height="90" />
                    <span>आपातकालीन <a href="tel:112">112</a></span>
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
                    <strong>अस्पताल और फार्मेसियों</strong>.
                    <p className="text-justify"> 
                    सत्व बाल चिकित्सा - 
                        <a href="tel:08655285545">08655285545</a>
                    </p>
                    <p className="text-justify">
                    वाडिया हॉस्पिटल- 
                        <Button href="https://maps.app.goo.gl/7eNnzKcrKau8uZn29">click here</Button>
                    </p>
                    </span>
                </ListItem>

                {/* Tuberculosis section with name and number on separate lines */}
                <ListItem
                    sx={{
                        fontSize: '1.2rem',
                        textAlign: 'center',
                        border: '4px solid yellow',
                        borderRadius: '20px',
                        padding: '15px',
                        width: '250px',
                        height: '190px',
                        display: 'flex',
                        flexDirection: 'column', // Use column direction to stack name and number
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        margin: '10px'
                    }}
                >
                    <img
                        src="/assets/TUBERCULOSIS.jpeg"
                        alt="Description of the image"
                        width="100"
                        height="80" />
                    <span>क्षय रोग</span>
                    <span><a href="tel:022-22621625">022-22621625</a></span>
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
                भारतीय हेल्पलाइन नंबर [मुंबई] : <Button href="https://indianhelpline.com/">click here</Button>
            </ListItem>

        </List>
    )
}

export default EnglishList
