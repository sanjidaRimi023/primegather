import React from 'react';

type EventGridProps = {
    children?: React.ReactNode;
};

const EventGrid:React.FC<EventGridProps>= ({children}) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {children}
        </div>
    );
};

export default EventGrid;