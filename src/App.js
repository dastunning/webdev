import React, { useState } from 'react';
import ParkingForm from './components/ParkingForm';
import DisplayParkingData from './components/DisplayParkingData';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';
import LoginPage from './LoginPage';
import Promocodes from './components/Promocodes';

function App() {
    const [parkingData, setParkingData] = useState(null);
    const [role, setRole] = useState('');  // Role state to determine user role

    const handleLoginSuccess = userRole => {
        setRole(userRole);  // Set the user role after login
    };

    // Render based on role
    if (role === 'operator') {
        return <Promocodes />;
    } else if (role === 'user') {
        return (
            <div className="App">
                <h1>Parking Payment System</h1>
                <ParkingForm setParkingData={setParkingData} />
                {parkingData && <DisplayParkingData data={parkingData} />}
            </div>
        );
    } else {
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }
}

export default withExtraFeaturesHOC(App);
