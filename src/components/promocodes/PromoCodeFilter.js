import React from 'react';

const PromoCodeFilter = () => {
    return (
        <div className="promo-filter">
            <input type="text" placeholder="Search..." />
            <select>
                <option value="all">All</option>
                <option value="used">Used</option>
                <option value="given">Given</option>
                <option value="expired">Expired</option>
            </select>
        </div>
    );
};

export default PromoCodeFilter;
