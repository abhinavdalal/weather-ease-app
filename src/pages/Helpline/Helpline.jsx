
import React from 'react';
import './Helpline.css';
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";

const Helpline = () => {
  return (
     <div className="helpline-container">
        <ResponsiveAppBar />
      <h2>Emergency Helpline Numbers</h2>
      <ul>
        <li>In case of Fire: 911</li>
        <li>In case of you need Police: 911</li>
        <li>If you need Ambulance: 911</li>
        <li>In case of a disaster: 1916</li>
        <li>24×7 Helpline no. : 108</li>
        <li>For Ambulance : 102</li>
        <li>For Child Helpline : 1098</li>
        <li>In case you need Police: 100</li>
        <li> If you are stuck inTraffic : 1073</li>
        <li>In case of an accident : 108</li>
        <li>In case of emergency : 112</li>
        <li>In case of a fire : 101</li>
        <li>Fumigation Helpline number : 02223011958</li>
        <li>to track your location : 1090</li>
        <li>Emergency operation centre [Mumbai] : 1916 , 02222694725 </li>
      </ul>
      <SimpleBottomNavigation />

    </div>
     
  );
}

export default Helpline;
