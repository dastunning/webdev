import React from 'react';

const PromoCodeCard = ({ value, type, remaining }) => {
    return (
        <div className="promo-card">
            <span>Show</span>
            <span>{value}</span>
            <span>{type} promo code</span>
            <span>{remaining} left</span>
        </div>
    );
};

export default PromoCodeCard;