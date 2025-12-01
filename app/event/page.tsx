import React from 'react';

const EventSection =async () => {
    const res = await fetch('https://dummyjson.com/products?limit=30')
const data = res.json()
console.log(data);

    return (
        <div>
            event page
        </div>
    );
};

export default EventSection;