import React from 'react';
import '../styles/PromoCodes.css';
import PromoCodeCard from './PromoCodeCard';
import PromoCodeFilter from './PromoCodeFilter';
import PromoCodeList from './PromoCodeList';

const PromoCodePage = () => {
    // Mock data for testing, replace with real data later
    const promoCodes = [
        { id: 1, code: 'JS12J', description: 'Some description if needed', date: '12 Sept 2023', status: 'Used' },
        // ... Add more codes as needed
    ];

    return (
        <div className="promo-page">
            <h1>Promo Codes</h1>
            <div className="promo-content">
                <div className="promo-cards-section">
                    <PromoCodeCard value="$5" type="value" remaining="98" />
                    {/* Add more cards as needed */}
                </div>
                <div className="promo-list-section">
                    <PromoCodeFilter />
                    <PromoCodeList promoCodes={promoCodes} />
                </div>
            </div>
        </div>
    );
};

export default PromoCodePage;
