import React from 'react';
import ParkingForm from './components/ParkingForm';
import DisplayParkingData from './components/DisplayParkingData';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';
import LoginPage from './LoginPage';

function App() {
    const [parkingData, setParkingData] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                <>
                    <h1>Parking Payment System</h1>
                    <ParkingForm setParkingData={setParkingData} />
                    {parkingData && <DisplayParkingData data={parkingData} />}
                </>
            ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default withExtraFeaturesHOC(App);