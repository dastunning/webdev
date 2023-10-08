// Promocodes.js

import React, { useState } from 'react';
import '../styles.css';

function Promocodes() {
    const [promocode, setPromocode] = useState('');
    const [promocodeData, setPromocodeData] = useState(null);

    const handleCheckPromocode = () => {
        // Mock checking logic, you should use actual logic to fetch promocode details here
        if (promocode === 'SAMPLECODE') {
            setPromocodeData({
                status: 'USED',
                usedAt: '2023-09-27 15:42',
                company: 'Clean Power Alliance',
                limitValue: 0,
                plateNumber: '9GGB381',
                expiresAt: '--'
            });
        } else {
            setPromocodeData(null);
        }
    };

    return (
        <div className="container">
            <h2>Check Promocode</h2>
            <input
                className="parking-input"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
                placeholder="Enter Promocode"
            />
            <button onClick={handleCheckPromocode} className="parking-button">Check Promocode</button>

            {promocodeData && (
                <div className="promocode-details">
                    <p><strong>Status:</strong> {promocodeData.status}</p>
                    <p><strong>Used at:</strong> {promocodeData.usedAt}</p>
                    <p><strong>Company:</strong> {promocodeData.company}</p>
                    <p><strong>Limit value:</strong> {promocodeData.limitValue}</p>
                    <p><strong>Plate number:</strong> {promocodeData.plateNumber}</p>
                    <p><strong>Expires at:</strong> {promocodeData.expiresAt}</p>
                </div>
            )}
        </div>
    );
}

export default Promocodes;
