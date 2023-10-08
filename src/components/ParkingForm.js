import React, { useState } from 'react';
import '../styles.css';

function ParkingForm({ setParkingData }) {
    const [plate, setPlate] = useState('');
    const [hours, setHours] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        // ... Extraordinary feature logic here...
        setParkingData({ plate, hours });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={plate} onChange={e => setPlate(e.target.value)} placeholder="Plate Number" />
            <input type="number" value={hours} onChange={e => setHours(e.target.value)} min={1} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ParkingForm;