import React from 'react';
import '../styles.css';

function DisplayParkingData({ data }) {
    return (
        <div>
            <p>Plate Number: {data.plate}</p>
            <p>Hours: {data.hours}</p>
        </div>
    );
}

export default DisplayParkingData;