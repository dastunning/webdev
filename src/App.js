import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ParkingForm from './components/ParkingForm';
import DisplayParkingData from './components/DisplayParkingData';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';
import LoginPage from './LoginPage';
import PromoCodePage from './components/promocodes/PromoCodePage';
import MainPaymentPage from './MainPaymentPage';

function App() {
    const [parkingData, setParkingData] = useState(null);
    const [role, setRole] = useState(''); // Role state to determine user role

    const handleLoginSuccess = userRole => {
        setRole(userRole); // Set the user role after login
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={role ? <Navigate to={`/${role}`} /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />

                <Route path="/admin" element={role === 'admin' ? <PromoCodePage /> : <Navigate to="/login" />} />

                <Route
                    path="/operator"
                    element={
                        role === 'operator' ? (
                            <div className="App">
                                <h1>Parking Payment System</h1>
                                <ParkingForm setParkingData={setParkingData} />
                                {parkingData && <DisplayParkingData data={parkingData} />}
                            </div>
                        ) : <Navigate to="/login" />
                    }
                />

                <Route path="/user" element={role === 'user' ? <MainPaymentPage /> : <Navigate to="/login" />} />

                {/* Default route */}
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default withExtraFeaturesHOC(App);
