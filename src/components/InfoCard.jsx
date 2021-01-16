import React from 'react';

const varData = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying:<br />
            Add {varData ? 'income' : 'expense'} for {varData ? '$5' : '$120'} in Category {varData ? 'Salary' : 'Travel'} for {varData ? 'Monday' : 'Tuesday'} ...
        </div>
    )
}

export default InfoCard;
