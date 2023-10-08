import React, { useState, memo } from 'react';
import '../styles.css';

const ParkingForm = memo(({ setParkingData }) => {
    const [plate, setPlate] = useState('');
    const [hours, setHours] = useState(1);

    // Event Handler for Plate Input
    const handlePlateChange = (e) => {
        const plateValue = e.target.value;
        setPlate(plateValue);
    };

    // Event Handler for Hours Input
    const handleHoursChange = (e) => {
        const hoursValue = parseInt(e.target.value, 10);
        if (hoursValue >= 1) {
            setHours(hoursValue);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        setParkingData({ plate, hours });
    };

    return (
        <form onSubmit={handleSubmit} className="parking-form">
            <input
                className="parking-input"
                value={plate}
                onChange={handlePlateChange}
                placeholder="Plate Number"
            />
            <input
                className="parking-input"
                type="number"
                value={hours}
                onChange={handleHoursChange}
                min={1}
            />
            <button type="submit" className="parking-button">Submit</button>
        </form>
    );
});

export default ParkingForm;
