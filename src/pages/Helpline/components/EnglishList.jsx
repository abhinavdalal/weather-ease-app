import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function EnglishList() {
    return (
        <List sx={{ textAlign: 'center' }}>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of Fire : <a href="tel:101">101</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of you need Police : <a href="tel:100">100</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you need Ambulance: <a href="tel:102">102</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a disaster: <a href="tel:1916">1916</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>24×7 Helpline no. : <a href="tel:108">108</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Ambulance: <a href="tel:102">102</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Child Helpline : <a href="tel:1098">1098</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case you need Police : <a href="tel:100">100</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you are stuck in Traffic : <a href="tel:1073">1073</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of an accident : <a href="tel:108">108</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of emergency : <a href="tel:112">112</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a fire : <a href="tel:101">101</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Fumigation Helpline number : <a href="tel:02223011958">02223011958</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>To track your location : <a href="tel:1090">1090</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Emergency operation centre [Mumbai] : <a href="tel:1916">1916</a>, <a href="tel:02222694725">02222694725</a></ListItem>
            <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Indian Helpline Numbers [Mumbai] : <Button href="https://indianhelpline.com/">click here</Button></ListItem>

        </List>
    )
}

export default EnglishList
