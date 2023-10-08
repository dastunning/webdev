import React, { useState } from 'react';
import ParkingForm from './components/ParkingForm';
import DisplayParkingData from './components/DisplayParkingData';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';

function MainPaymentPage() {
    const [parkingData, setParkingData] = useState(null);
    const [amount, setAmount] = useState(0); // Mock amount based on hours

    const handlePaymentData = data => {
        setParkingData(data);
        // Simple logic: $5/hour
        setAmount(data.hours * 5);
    }

    const handlePaymentRedirect = () => {
        window.location.href = 'https://payment-provider-url.com'; // Replace with actual payment provider URL
    }

    return (
        <div className="container payment-container">
            <h1>Parking Payment System</h1>
            <ParkingForm setParkingData={handlePaymentData} />
            {parkingData && (
                <div>
                    <DisplayParkingData data={parkingData} />
                    <p>Amount Due: ${amount}</p>
                    <button onClick={handlePaymentRedirect}>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
}

export default withExtraFeaturesHOC(MainPaymentPage);