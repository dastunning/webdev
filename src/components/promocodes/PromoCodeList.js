import React from 'react';

const PromoCodeList = ({ promoCodes }) => {
    return (
        <div className="promo-list">
            {promoCodes.map(code => (
                <div key={code.id} className="promo-item">
                    <span>{code.code}</span>
                    <span>{code.description}</span>
                    <span>{code.date}</span>
                    <span>{code.status}</span>
                </div>
            ))}
        </div>
    );
};

export default PromoCodeList;
